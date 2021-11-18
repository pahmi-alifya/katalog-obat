import {
  Avatar,
  VStack,
  View,
  Heading,
  Modal,
  HStack,
  Spinner,
} from "native-base";
import React, { useLayoutEffect } from "react";
import { SafeAreaView, StyleSheet, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import { connect, useSelector } from "react-redux";
import { Colors } from "../constants/style";
import { postLogout } from "../redux/actions/user";

const ProfileScreen = ({ navigation, loading, postLogout }) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Profil",
      headerRight: () => (
        <View style={{ marginRight: 5 }}>
          <TouchableOpacity activeOpacity={0.5} onPress={signOut}>
            <AntDesign name="logout" size={26} color={Colors.dark} />
          </TouchableOpacity>
        </View>
      ),
    });
  }, [navigation]);

  const dataUser = useSelector((state) => state.user?.user);

  const signOut = () => {
    alert("Logout Berhasil!");
    postLogout();
    // navigation.navigate("Login");
  };

  if (loading) {
    return (
      <Modal isOpen={loading}>
        <Modal.Content maxWidth="150px">
          <Modal.Body>
            <HStack space={2} alignSelf="center">
              <Spinner accessibilityLabel="Loading posts" />
              <Heading color="primary.500" fontSize="md">
                Loading
              </Heading>
            </HStack>
          </Modal.Body>
        </Modal.Content>
      </Modal>
    );
  }
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.image}>
        <Avatar
          size="xl"
          shadow="9"
          source={{
            uri: dataUser?.photo,
          }}
        >
          Foto
        </Avatar>
        <View style={styles.biodata}>
          <View
            style={{
              alignSelf: "flex-start",
              paddingLeft: hp("13%"),
              paddingTop: hp("10%"),
            }}
          >
            <VStack space={1}>
              <Heading size="sm" color="dark.400">
                Nama
              </Heading>
              <Heading
                size="md"
                mb={2}
                color="dark.300"
                style={{ fontWeight: "bold" }}
              >
                {dataUser?.nama_user}
              </Heading>
            </VStack>
            <VStack space={1} mt={3}>
              <Heading size="sm" color="dark.400">
                Usernane
              </Heading>
              <Heading
                size="md"
                mb={2}
                color="dark.300"
                style={{ fontWeight: "bold" }}
              >
                {dataUser?.username}
              </Heading>
            </VStack>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: hp("2%"),
  },
  image: {
    alignItems: "center",
    backgroundColor: Colors.primary,
    width: "100%",
    height: hp("25%"),
    padding: hp("5%"),
  },
  biodata: {
    alignItems: "center",
    height: hp("100%"),
    width: hp("70%"),
    marginTop: -hp("5%"),
    backgroundColor: "white",
    // borderTopLeftRadius: hp("25%"),
    borderRadius: hp("30%"),
    shadowColor: "#000",
    shadowRadius: 10,
    shadowOpacity: 0.6,
    shadowOffset: {
      width: 0,
      height: 7,
    },
  },
});

const mapStateToProps = ({ common }) => {
  const { loading } = common;
  return {
    loading,
  };
};

export default connect(mapStateToProps, {
  postLogout,
})(ProfileScreen);
