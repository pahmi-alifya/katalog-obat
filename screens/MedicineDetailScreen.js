import { Avatar, Heading, ScrollView, View, VStack } from "native-base";
import React, { useLayoutEffect } from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import { Colors } from "../constants/style";

const MedicineDetailScreen = ({ navigation }) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Detail Obat",
    });
  }, [navigation]);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.image}>
        <Avatar
          bg="cyan.500"
          size="40"
          shadow="9"
          source={{
            uri: "https://pbs.twimg.com/profile_images/1309797238651060226/18cm6VhQ_400x400.jpg",
          }}
        >
          Obat
        </Avatar>
        <View style={styles.biodata}>
          <ScrollView
            style={{ alignSelf: "flex-start" }}
            showsVerticalScrollIndicator={false}
          >
            <View
              style={{
                paddingLeft: hp("13%"),
                paddingTop: hp("13%"),
              }}
            >
              <VStack space={1}>
                <Heading size="sm" color="dark.400">
                  Nama Obat
                </Heading>
                <Heading
                  size="md"
                  mb={2}
                  color="dark.300"
                  style={{ fontWeight: "bold" }}
                >
                  Admin
                </Heading>
              </VStack>
              <VStack space={1} mt={3}>
                <Heading size="sm" color="dark.400">
                  Kategori Obat
                </Heading>
                <Heading
                  size="md"
                  mb={2}
                  color="dark.300"
                  style={{ fontWeight: "bold" }}
                >
                  Admin
                </Heading>
              </VStack>
              <VStack space={1} mt={3}>
                <Heading size="sm" color="dark.400">
                  Tanggal Kadaluarsa
                </Heading>
                <Heading
                  size="md"
                  mb={2}
                  color="dark.300"
                  style={{ fontWeight: "bold" }}
                >
                  9089089089080
                </Heading>
              </VStack>
            </View>
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default MedicineDetailScreen;

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
    marginTop: -hp("10%"),
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
