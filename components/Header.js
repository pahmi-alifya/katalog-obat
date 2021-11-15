import React from "react";
import { useNavigation } from "@react-navigation/core";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { Avatar, HStack, Icon, Input, VStack } from "native-base";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";

const Header = () => {
  const navigation = useNavigation();
  return (
    <HStack space={3} style={styles.container}>
      <VStack space={5} alignItems="center">
        <Input
          placeholder="Cari"
          variant="filled"
          bg="gray.200"
          borderRadius="10"
          width={hp("35%")}
          placeholderTextColor="gray.500"
          _hover={{ bg: "gray.200", borderWidth: 0 }}
          py="1"
          px="2"
          fontSize="14"
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
      <TouchableOpacity
        activeOpacity={0.5}
        onPress={() => navigation.navigate("Profile")}
      >
        <Avatar
          bg="cyan.500"
          source={{
            uri: "https://pbs.twimg.com/profile_images/1309797238651060226/18cm6VhQ_400x400.jpg",
          }}
        >
          GG
        </Avatar>
      </TouchableOpacity>
    </HStack>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-between",
  },
});
