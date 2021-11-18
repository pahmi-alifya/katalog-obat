import { useIsFocused } from "@react-navigation/core";
import {
  Avatar,
  Heading,
  HStack,
  Image,
  Modal,
  ScrollView,
  Spinner,
  View,
  VStack,
} from "native-base";
import React, { useEffect, useLayoutEffect } from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import { connect } from "react-redux";
import { Colors } from "../constants/style";
import { getMedicineContentDetail } from "../redux/actions/medicine";

const MedicineDetailScreen = ({
  navigation,
  route,
  getMedicineContentDetail,
  medicineContentDetail,
  loading,
}) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Detail Obat",
    });
  }, [navigation]);

  const isFocused = useIsFocused();

  useEffect(() => {
    if (isFocused) {
      getMedicineContentDetail(route?.params?.id);
    }
  }, [isFocused, route?.name]);

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
      <View style={styles.picture}>
        <Image
          size="40"
          style={{ zIndex: 99 }}
          key={medicineContentDetail?.foto_obat}
          source={{
            uri: `${medicineContentDetail?.foto_obat}`,
          }}
          alt="image"
        />
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
                  {medicineContentDetail?.nama_obat}
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
                  {medicineContentDetail?.nama_kategori}
                </Heading>
              </VStack>
              <VStack space={1} mt={3}>
                <Heading size="sm" color="dark.400">
                  Jenis Golongan
                </Heading>
                <Heading
                  size="md"
                  mb={2}
                  color="dark.300"
                  style={{ fontWeight: "bold" }}
                >
                  {medicineContentDetail?.nama_golongan}
                </Heading>
              </VStack>
              <VStack space={1} mt={3}>
                <Heading size="sm" color="dark.400">
                  Deskripsi
                </Heading>
                <Heading
                  size="md"
                  width={hp("45%")}
                  mb={2}
                  color="dark.300"
                  style={{ fontWeight: "bold" }}
                >
                  {medicineContentDetail?.deskripsi}
                </Heading>
              </VStack>
            </View>
          </ScrollView>
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
  picture: {
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
    marginTop: -hp("7%"),
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

const mapStateToProps = ({ common, medicine }) => {
  const { loading } = common;
  const { medicineContentDetail } = medicine;
  return {
    loading,
    medicineContentDetail,
  };
};

export default connect(mapStateToProps, {
  getMedicineContentDetail,
})(MedicineDetailScreen);
