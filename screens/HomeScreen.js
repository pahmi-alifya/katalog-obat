import {
  AspectRatio,
  Box,
  Center,
  Fab,
  FlatList,
  Heading,
  HStack,
  Icon,
  Image,
  ScrollView,
  Stack,
  Text,
  View,
  VStack,
} from "native-base";
import React, { useLayoutEffect, useState } from "react";
import { FontAwesome } from "@expo/vector-icons";
import { SafeAreaView, StyleSheet, TouchableOpacity } from "react-native";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import Header from "../components/Header";
import { Colors } from "../constants/style";

const HomeScreen = ({ navigation }) => {
  // useLayoutEffect(() => {
  //   navigation.setOptions({
  //     title: "HOME",
  //     headerStyle: { backgroundColor: Colors.primary },
  //     headerTitleStyle: { color: "white" },
  //     headerTitleAlign: "center",
  //     headerTintColor: "white",
  //   });
  // }, [navigation]);
  const data = [
    "narkotika",
    "narkotika1",
    "narkotika2",
    "narkotika3",
    "narkotika4",
  ];
  const [active, setActive] = useState("narkotika");
  return (
    <ScrollView>
      <SafeAreaView style={styles.container}>
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
              data={data}
              renderItem={({ item }) => (
                <TouchableOpacity
                  activeOpacity={0.5}
                  onPress={() => setActive(item)}
                >
                  <View style={{ padding: 10 }}>
                    {item === active ? (
                      <View
                        style={{
                          backgroundColor: Colors.primary,
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
                          {item}
                        </Heading>
                      </View>
                    ) : (
                      <View mt={1}>
                        <Heading size="sm" style={{ fontWeight: "300" }}>
                          {item}
                        </Heading>
                      </View>
                    )}
                  </View>
                </TouchableOpacity>
              )}
            />
            <VStack space={5}>
              <HStack space={4}>
                <TouchableOpacity
                  activeOpacity={0.5}
                  // onPress={() => setActive(item)}
                >
                  <Box
                    rounded="lg"
                    overflow="hidden"
                    shadow="1"
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
                      <AspectRatio w="100%" ratio={16 / 9}>
                        <Image
                          source={{
                            uri: "https://www.holidify.com/images/cmsuploads/compressed/Bangalore_citycover_20190613234056.jpg",
                          }}
                          alt="image"
                        />
                      </AspectRatio>
                      <Center
                        bg="orange.300"
                        _text={{
                          color: "warmGray.50",
                          fontWeight: "700",
                          fontSize: "xs",
                        }}
                        position="absolute"
                        bottom="0"
                        px="3"
                        py="1.5"
                      >
                        PHOTOS
                      </Center>
                    </Box>
                    <Stack p="4" space={3}>
                      <Stack space={2}>
                        <Heading size="sm" ml="-1.5">
                          The Garden City
                        </Heading>
                        <Text fontSize="xs" fontWeight="500" ml="-1" mt="-1">
                          The Silicon Valley of India.
                        </Text>
                      </Stack>
                    </Stack>
                  </Box>
                </TouchableOpacity>
                <TouchableOpacity
                  activeOpacity={0.5}
                  // onPress={() => setActive(item)}
                >
                  <Box
                    rounded="lg"
                    overflow="hidden"
                    shadow="1"
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
                      <AspectRatio w="100%" ratio={16 / 9}>
                        <Image
                          source={{
                            uri: "https://www.holidify.com/images/cmsuploads/compressed/Bangalore_citycover_20190613234056.jpg",
                          }}
                          alt="image"
                        />
                      </AspectRatio>
                      <Center
                        bg="orange.300"
                        _text={{
                          color: "warmGray.50",
                          fontWeight: "700",
                          fontSize: "xs",
                        }}
                        position="absolute"
                        bottom="0"
                        px="3"
                        py="1.5"
                      >
                        PHOTOS
                      </Center>
                    </Box>
                    <Stack p="4" space={3}>
                      <Stack space={2}>
                        <Heading size="sm" ml="-1.5">
                          The Garden City
                        </Heading>
                        <Text fontSize="xs" fontWeight="500" ml="-1" mt="-1">
                          The Silicon Valley of India.
                        </Text>
                      </Stack>
                    </Stack>
                  </Box>
                </TouchableOpacity>
              </HStack>
              <HStack space={4}>
                <TouchableOpacity
                  activeOpacity={0.5}
                  onPress={() => navigation.navigate("MedicineDetail")}
                >
                  <Box
                    rounded="lg"
                    overflow="hidden"
                    shadow="1"
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
                      <AspectRatio w="100%" ratio={16 / 9}>
                        <Image
                          source={{
                            uri: "https://www.holidify.com/images/cmsuploads/compressed/Bangalore_citycover_20190613234056.jpg",
                          }}
                          alt="image"
                        />
                      </AspectRatio>
                      <Center
                        bg="orange.300"
                        _text={{
                          color: "warmGray.50",
                          fontWeight: "700",
                          fontSize: "xs",
                        }}
                        position="absolute"
                        bottom="0"
                        px="3"
                        py="1.5"
                      >
                        PHOTOS
                      </Center>
                    </Box>
                    <Stack p="4" space={3}>
                      <Stack space={2}>
                        <Heading size="sm" ml="-1.5">
                          The Garden City
                        </Heading>
                        <Text fontSize="xs" fontWeight="500" ml="-1" mt="-1">
                          The Silicon Valley of India.
                        </Text>
                      </Stack>
                    </Stack>
                  </Box>
                </TouchableOpacity>
                <TouchableOpacity
                  activeOpacity={0.5}
                  // onPress={() => setActive(item)}
                >
                  <Box
                    rounded="lg"
                    overflow="hidden"
                    shadow="1"
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
                      <AspectRatio w="100%" ratio={16 / 9}>
                        <Image
                          source={{
                            uri: "https://www.holidify.com/images/cmsuploads/compressed/Bangalore_citycover_20190613234056.jpg",
                          }}
                          alt="image"
                        />
                      </AspectRatio>
                      <Center
                        bg="orange.300"
                        _text={{
                          color: "warmGray.50",
                          fontWeight: "700",
                          fontSize: "xs",
                        }}
                        position="absolute"
                        bottom="0"
                        px="3"
                        py="1.5"
                      >
                        PHOTOS
                      </Center>
                    </Box>
                    <Stack p="4" space={3}>
                      <Stack space={2}>
                        <Heading size="sm" ml="-1.5">
                          The Garden City
                        </Heading>
                        <Text fontSize="xs" fontWeight="500" ml="-1" mt="-1">
                          The Silicon Valley of India.
                        </Text>
                      </Stack>
                    </Stack>
                  </Box>
                </TouchableOpacity>
              </HStack>
              <HStack space={4}>
                <TouchableOpacity
                  activeOpacity={0.5}
                  // onPress={() => setActive(item)}
                >
                  <Box
                    rounded="lg"
                    overflow="hidden"
                    shadow="1"
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
                      <AspectRatio w="100%" ratio={16 / 9}>
                        <Image
                          source={{
                            uri: "https://www.holidify.com/images/cmsuploads/compressed/Bangalore_citycover_20190613234056.jpg",
                          }}
                          alt="image"
                        />
                      </AspectRatio>
                      <Center
                        bg="orange.300"
                        _text={{
                          color: "warmGray.50",
                          fontWeight: "700",
                          fontSize: "xs",
                        }}
                        position="absolute"
                        bottom="0"
                        px="3"
                        py="1.5"
                      >
                        PHOTOS
                      </Center>
                    </Box>
                    <Stack p="4" space={3}>
                      <Stack space={2}>
                        <Heading size="sm" ml="-1.5">
                          The Garden City
                        </Heading>
                        <Text fontSize="xs" fontWeight="500" ml="-1" mt="-1">
                          The Silicon Valley of India.
                        </Text>
                      </Stack>
                    </Stack>
                  </Box>
                </TouchableOpacity>
                <TouchableOpacity
                  activeOpacity={0.5}
                  // onPress={() => setActive(item)}
                >
                  <Box
                    rounded="lg"
                    overflow="hidden"
                    shadow="1"
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
                      <AspectRatio w="100%" ratio={16 / 9}>
                        <Image
                          source={{
                            uri: "https://www.holidify.com/images/cmsuploads/compressed/Bangalore_citycover_20190613234056.jpg",
                          }}
                          alt="image"
                        />
                      </AspectRatio>
                      <Center
                        bg="orange.300"
                        _text={{
                          color: "warmGray.50",
                          fontWeight: "700",
                          fontSize: "xs",
                        }}
                        position="absolute"
                        bottom="0"
                        px="3"
                        py="1.5"
                      >
                        PHOTOS
                      </Center>
                    </Box>
                    <Stack p="4" space={3}>
                      <Stack space={2}>
                        <Heading size="sm" ml="-1.5">
                          The Garden City
                        </Heading>
                        <Text fontSize="xs" fontWeight="500" ml="-1" mt="-1">
                          The Silicon Valley of India.
                        </Text>
                      </Stack>
                    </Stack>
                  </Box>
                </TouchableOpacity>
              </HStack>
            </VStack>
          </VStack>
        </VStack>
        <Box position="relative" h={50} w="100%">
          <Fab
            position="absolute"
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
      </SafeAreaView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: hp("3%"),
    marginTop: hp("5%"),
    // justifyContent: "center",
  },
});

export default HomeScreen;
