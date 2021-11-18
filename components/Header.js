import React, { useState } from "react";
import { useNavigation } from "@react-navigation/core";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { Avatar, HStack, Icon, Input, VStack, Heading } from "native-base";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import { useSelector } from "react-redux";

const Header = ({ isSearch }) => {
  const navigation = useNavigation();
  const dataUser = useSelector((state) => state.user?.user);

  const onSearch = (text) => {
    if (!text) isSearch(false);
    isSearch(text);
  };

  return (
    <>
      <HStack space={3} style={styles.container}>
        <VStack>
          <Heading
            size="md"
            mb={2}
            color="dark.300"
            style={{ fontWeight: "bold" }}
          >
            Selamat Datang,
          </Heading>
          <Heading size="sm" mb={2} color="dark.400">
            {dataUser?.nama_user}
          </Heading>
        </VStack>
        <TouchableOpacity
          activeOpacity={0.5}
          onPress={() => navigation.navigate("Profile")}
        >
          <Avatar
            shadow="5"
            size="md"
            source={{
              uri: dataUser?.photo,
            }}
          >
            Foto
          </Avatar>
        </TouchableOpacity>
      </HStack>
      <VStack space={5} mt={5} mb={3} alignItems="center">
        <Input
          placeholder="Cari"
          variant="filled"
          background="gray.200"
          borderRadius="10"
          placeholderTextColor="gray.500"
          py="1"
          px="2"
          fontSize="14"
          onChangeText={(text) => onSearch(text)}
          InputLeftElement={
            <Icon
              m="2"
              ml="3"
              size="6"
              color="gray.400"
              as={<MaterialIcons name="search" />}
            />
          }
        />
      </VStack>
    </>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-between",
    paddingTop: hp("5%"),
  },
});
