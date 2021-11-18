import {
  AspectRatio,
  Box,
  Button,
  Center,
  Fab,
  FlatList,
  Heading,
  HStack,
  Icon,
  Image,
  Modal,
  ScrollView,
  Skeleton,
  Spinner,
  Stack,
  Text,
  View,
  VStack,
} from "native-base";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { FontAwesome } from "@expo/vector-icons";
import { connect } from "react-redux";
import { SafeAreaView, StyleSheet, TouchableOpacity } from "react-native";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import Header from "../components/Header";
import { Colors } from "../constants/style";
import { useIsFocused } from "@react-navigation/core";

import {
  getMedicineCategory,
  getMedicineSubCategory,
  getMedicineSubCategoryContent,
  getMedicineContent,
} from "../redux/actions/medicine";

const HomeScreen = ({
  navigation,
  route,
  getMedicineCategory,
  getMedicineSubCategory,
  getMedicineSubCategoryContent,
  getMedicineContent,
  medicineCategory,
  medicineSubCategory,
  medicineSubCategoryContent,
  medicineContent,
  loading,
}) => {
  const isFocused = useIsFocused();
  const [active, setActive] = useState(null);
  const [subCategoryActive, setSubCategoryActive] = useState(null);

  useEffect(() => {
    getMedicineCategory();
    getMedicineContent();
    setActive(null);
  }, [route?.name]);

  const colorLabel = (color) => {
    switch (color) {
      case "green":
        return Colors.success;
      case "red":
        return Colors.danger;
      case "blue":
        return Colors.primary;
      default:
        return Colors.secondary;
    }
  };

  const getContentMedicine = (id) => {
    setActive(id);
    if (id == 4) {
      getMedicineSubCategory({ kategori: id });
    } else {
      getMedicineContent({ category: id });
    }
  };

  const getSubCategoryContent = (id) => {
    setSubCategoryActive(id);
    getMedicineSubCategoryContent({ sub_kategori: id });
  };

  // if (loading) {
  //   return (
  //     <Modal isOpen={loading}>
  //       <Modal.Content maxWidth="150px">
  //         <Modal.Body>
  //           <HStack space={2} alignSelf="center">
  //             <Spinner accessibilityLabel="Loading posts" />
  //             <Heading color="primary.500" fontSize="md">
  //               Loading
  //             </Heading>
  //           </HStack>
  //         </Modal.Body>
  //       </Modal.Content>
  //     </Modal>
  //   );
  // }
  console.log(medicineSubCategoryContent);
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Header />
        <VStack>
          <Heading
            size="md"
            mt={5}
            mb={2}
            color="dark.300"
            style={{ fontWeight: "bold" }}
          >
            Jenis Obat
          </Heading>
          <VStack space={2}>
            <FlatList
              horizontal
              showsHorizontalScrollIndicator={false}
              data={medicineCategory}
              keyExtractor={(item) => item?.id_kategori}
              renderItem={({ item, index }) => (
                <TouchableOpacity
                  activeOpacity={0.5}
                  onPress={() => getContentMedicine(item?.id_kategori)}
                >
                  <View style={{ padding: 10 }}>
                    {(active ? item?.id_kategori === active : index === 0) ? (
                      <View
                        style={{
                          backgroundColor: colorLabel(item.label),
                          padding: 7,
                          paddingHorizontal: 15,
                          borderRadius: 10,
                        }}
                      >
                        <Heading
                          size="sm"
                          style={{ fontWeight: "300" }}
                          color="white"
                        >
                          {item?.nama_kategori}
                        </Heading>
                      </View>
                    ) : (
                      <View mt={1}>
                        <Heading size="sm" style={{ fontWeight: "300" }}>
                          {item?.nama_kategori}
                        </Heading>
                      </View>
                    )}
                  </View>
                </TouchableOpacity>
              )}
            />
            <FlatList
              showsHorizontalScrollIndicator={false}
              horizontal
              data={medicineSubCategory}
              refreshing={loading}
              keyExtractor={(item) => item?.id_golongan}
              renderItem={({ item, index }) => {
                if (loading) {
                  return <Skeleton variant="text" height={6} />;
                }
                return (
                  <View mx={2} my={1} alignItems="center">
                    <Button
                      size="md"
                      colorScheme="danger"
                      variant={
                        subCategoryActive === item?.id_golongan
                          ? "solid"
                          : "outline"
                      }
                      onPress={() => getSubCategoryContent(item?.id_golongan)}
                    >
                      {item?.nama_golongan}
                    </Button>
                  </View>
                );
              }}
            />

            <FlatList
              showsVerticalScrollIndicator={false}
              numColumns={2}
              data={medicineContent}
              refreshing={loading}
              keyExtractor={(item) => item?.id_obat}
              renderItem={({ item, index }) => {
                if (loading) {
                  return (
                    <Box
                      rounded="lg"
                      overflow="hidden"
                      shadow="1"
                      mx={1}
                      mb={2}
                      borderColor="coolGray.200"
                      width={hp("21%")}
                      borderWidth="1"
                      _dark={{
                        borderColor: "coolGray.600",
                        backgroundColor: "gray.700",
                      }}
                      _light={{
                        backgroundColor: "gray.50",
                      }}
                    >
                      <Box>
                        <AspectRatio w="100%">
                          <Skeleton
                            variant="circle"
                            alignSelf="center"
                            width="40"
                          />
                        </AspectRatio>
                      </Box>
                      <Stack p="4" space={3}>
                        <Stack space={2}>
                          <Skeleton variant="text" height={6} />
                        </Stack>
                      </Stack>
                    </Box>
                  );
                }
                return (
                  <TouchableOpacity
                    activeOpacity={0.5}
                    onPress={() =>
                      navigation.navigate("MedicineDetail", {
                        id: item?.id_obat,
                      })
                    }
                  >
                    <Box
                      rounded="lg"
                      overflow="hidden"
                      shadow="1"
                      mx={1}
                      mb={2}
                      borderColor="coolGray.200"
                      width={hp("21%")}
                      borderWidth="1"
                      _dark={{
                        borderColor: "coolGray.600",
                        backgroundColor: "gray.700",
                      }}
                      _light={{
                        backgroundColor: "gray.50",
                      }}
                    >
                      <Box>
                        <AspectRatio w="100%">
                          <Image
                            source={{
                              uri:
                                item?.foto_obat ??
                                "https://yamicode.xyz/api-obat/public/uploads/images/logo.png",
                            }}
                            alt="image"
                          />
                        </AspectRatio>
                        <Center
                          bg={colorLabel(item?.label)}
                          _text={{
                            fontWeight: "700",
                            fontSize: "xs",
                          }}
                          position="absolute"
                          bottom="0"
                          px="3"
                          py="1.5"
                        >
                          {item?.nama_kategori}
                        </Center>
                      </Box>
                      <Stack p="4" space={3}>
                        <Stack space={2}>
                          <Heading size="sm" ml="-1.5">
                            {item?.nama_obat}
                          </Heading>
                          <Text
                            fontSize="xs"
                            fontWeight="500"
                            ml="-1"
                            mt="-1"
                            numberOfLines={2}
                            ellipsizeMode="tail"
                          >
                            {item?.deskripsi}
                          </Text>
                        </Stack>
                      </Stack>
                    </Box>
                  </TouchableOpacity>
                );
              }}
            />
          </VStack>
          <Box position="relative" h={50} w="100%">
            <Fab
              position="absolute"
              renderInPortal={isFocused ? true : false}
              size="sm"
              icon={
                <Icon
                  color="white"
                  as={<FontAwesome name="sort-alpha-asc" />}
                  size="sm"
                />
              }
            />
          </Box>
        </VStack>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: hp("3%"),
    paddingTop: hp("3%"),
    marginTop: hp("1%"),
    justifyContent: "center",
  },
});

const mapStateToProps = ({ common, medicine }) => {
  const { loading } = common;
  const {
    medicineCategory,
    medicineSubCategory,
    medicineSubCategoryContent,
    medicineContent,
  } = medicine;
  return {
    loading,
    medicineCategory,
    medicineSubCategory,
    medicineSubCategoryContent,
    medicineContent,
  };
};

export default connect(mapStateToProps, {
  getMedicineCategory,
  getMedicineSubCategory,
  getMedicineSubCategoryContent,
  getMedicineContent,
})(HomeScreen);
