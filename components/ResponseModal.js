import React from "react";
import { Button, Modal, NativeBaseProvider, Text, VStack } from "native-base";
import { Colors } from "../constants/style";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/core";

export const ResponseModal = (props) => {
  const navigation = useNavigation();
  return (
    <>
      <Modal
        isOpen={props.showModal}
        onClose={() => props.setShowModal(false)}
        size="lg"
      >
        <Modal.Content>
          <Modal.Body>
            <VStack space="3" padding={5} alignItems="center" mb={5}>
              {/* <Text
                bold
                fontSize="md"
                color={
                  props.status === true ? Colors.primaryDark : Colors.danger
                }
                mb={5}
                letterSpacing={1}
                textAlign="center"
              >
                {props.message}
              </Text> */}
              <AntDesign
                name={props.status === true ? "checkcircle" : "closecircle"}
                size={60}
                style={{ marginBottom: 20 }}
                color={props.status === true ? Colors.primary : Colors.danger}
              />
              {props.status === false && props.data.length > 0
                ? props.data.map((value, index) => (
                    <Text
                      fontSize="md"
                      textAlign="center"
                      color={Colors.danger}
                      my={2}
                      key={index}
                    >
                      {value}
                    </Text>
                  ))
                : props.status === false && (
                    <Text
                      fontSize="md"
                      textAlign="center"
                      color={Colors.danger}
                      my={2}
                    >
                      {props.message}
                    </Text>
                  )}
              <Text fontSize="lg" color={Colors.primary} mt={5} bold>
                {props.status === true && props.message !== "Validation Error"
                  ? props.message
                  : ""}
              </Text>
              <Button
                bgColor={Colors.secondary}
                px={10}
                borderRadius={50}
                onPress={() =>
                  props.status === true
                    ? props.linkTo
                      ? navigation.replace(props?.linkTo)
                      : props.setShowModal(false)
                    : props.setShowModal(false)
                }
              >
                <Text color={Colors.white} bold letterSpacing={1}>
                  Oke
                </Text>
              </Button>
            </VStack>
          </Modal.Body>
        </Modal.Content>
      </Modal>
    </>
  );
};

export default () => {
  return (
    <NativeBaseProvider>
      <ResponseModal />
    </NativeBaseProvider>
  );
};
