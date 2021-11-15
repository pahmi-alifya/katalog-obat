import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { NativeBaseProvider } from "native-base";
import StackNavigator from "./navigation/StackNavigator";

export default function App() {
  // useEffect(() => {
  //   store.dispatch({ type: commonActionTypes.HIEDE_LOADING });
  // }, []);
  return (
    <NavigationContainer>
      <NativeBaseProvider>
        <StackNavigator />
      </NativeBaseProvider>
    </NavigationContainer>
  );
}
