import React, { useState } from "react";
import {
  Button,
  FormControl,
  Heading,
  HStack,
  Image,
  Input,
  ScrollView,
  Text,
  View,
  VStack,
} from "native-base";
import { SafeAreaView, StyleSheet, TouchableOpacity } from "react-native";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import { FontAwesome5 } from "@expo/vector-icons";

import { Colors } from "../constants/style";
import Logo from "../assets/icon.png";
import { connect } from "react-redux";
import { postLogin } from "../redux/actions/user";
import { ResponseModal } from "../components/ResponseModal";

const LoginScreen = ({ navigation, loading, postLogin }) => {
  const [showPassword, setShowPassword] = useState(true);
  const [value, setValue] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [data, setData] = useState(false);

  const handleChangeInput = (data, name) => {
    setValue({ ...value, [name]: data });
  };

  const signIn = () => {
    postLogin(value).then((data) => {
      if (data.status === true) {
        alert("Berhasil Login");
      } else {
        setData(data);
        setShowModal(true);
      }
    });
  };

  return (
    <ScrollView backgroundColor={Colors.white}>
      <ResponseModal
        showModal={showModal}
        setShowModal={(value) => setShowModal(value)}
        {...data}
      />
      <SafeAreaView style={styles.container}>
        <View style={styles.logo}>
          <Image source={Logo} alt="Logo" size="xl" />
        </View>
        <Heading
          size="lg"
          mt={2}
          color={Colors.textPrimary}
          style={{ letterSpacing: 2, fontWeight: "bold" }}
        >
          MASUK
        </Heading>
        <VStack space={2} mt={5} style={styles.form}>
          <FormControl>
            <FormControl.Label
              _text={{ color: "muted.700", fontSize: "sm", fontWeight: 600 }}
            >
              Username
            </FormControl.Label>
            <Input
              autoCapitalize="none"
              placeholder="Username"
              onChangeText={(data) => handleChangeInput(data, "username")}
            />
          </FormControl>
          <FormControl mb={5}>
            <FormControl.Label
              _text={{ color: "muted.700", fontSize: "sm", fontWeight: 600 }}
            >
              Password
            </FormControl.Label>
            <Input
              type={showPassword ? "password" : "text"}
              name="password"
              // maxLength={8}
              placeholder="Password"
              onChangeText={(data) => handleChangeInput(data, "password")}
              InputRightElement={
                <TouchableOpacity
                  activeOpacity={0.5}
                  onPress={() => setShowPassword(!showPassword)}
                >
                  <FontAwesome5
                    name={showPassword ? "eye-slash" : "eye"}
                    size={20}
                    color="black"
                    style={{ paddingRight: 10 }}
                  />
                </TouchableOpacity>
              }
            />
          </FormControl>
          <VStack space={2}>
            <Button
              _text={{ color: "white" }}
              onPress={signIn}
              isLoading={loading}
              size="md"
              bgColor={Colors.primary}
            >
              MASUK
            </Button>
          </VStack>
        </VStack>
      </SafeAreaView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: hp("4%"),
    marginTop: hp("10%"),
  },
  logo: {
    alignSelf: "center",
  },
  form: {
    width: "100%",
  },
});

const mapStateToProps = ({ common }) => {
  const { loading } = common;
  return {
    loading,
  };
};

export default connect(mapStateToProps, {
  postLogin,
})(LoginScreen);
