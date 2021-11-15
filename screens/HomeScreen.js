import { Box, Heading, ScrollView, VStack } from "native-base";
import React, { useLayoutEffect } from "react";
import { SafeAreaView, StyleSheet, TouchableOpacity } from "react-native";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import Header from "../components/Header";
import { Colors } from "../constants/style";

const HomeScreen = ({ navigation }) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      title: "HOME",
      headerStyle: { backgroundColor: Colors.primary },
      headerTitleStyle: { color: "white" },
      headerTitleAlign: "center",
      headerTintColor: "white",
    });
  }, [navigation]);
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
          <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => navigation.navigate("Content")}
          >
            <Box
              bg="lightBlue.200"
              my={2}
              p="3"
              rounded="xl"
              shadow="1"
              _text={{
                fontSize: "md",
                fontWeight: "medium",
                color: "dark.200",
                textAlign: "center",
              }}
            >
              Narkotika
            </Box>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => navigation.navigate("Content")}
          >
            <Box
              bg="lightBlue.200"
              my={2}
              p="3"
              rounded="xl"
              shadow="1"
              _text={{
                fontSize: "md",
                fontWeight: "medium",
                color: "dark.200",
                textAlign: "center",
              }}
            >
              Narkotika
            </Box>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => navigation.navigate("Content")}
          >
            <Box
              bg="lightBlue.200"
              my={2}
              p="3"
              rounded="xl"
              shadow="1"
              _text={{
                fontSize: "md",
                fontWeight: "medium",
                color: "dark.200",
                textAlign: "center",
              }}
            >
              Narkotika
            </Box>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => navigation.navigate("Content")}
          >
            <Box
              bg="lightBlue.200"
              my={2}
              p="3"
              rounded="xl"
              shadow="1"
              _text={{
                fontSize: "md",
                fontWeight: "medium",
                color: "dark.200",
                textAlign: "center",
              }}
            >
              Narkotika
            </Box>
          </TouchableOpacity>
        </VStack>
      </SafeAreaView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: hp("3%"),
    marginBottom: hp("2%"),
    justifyContent: "center",
  },
});

export default HomeScreen;
