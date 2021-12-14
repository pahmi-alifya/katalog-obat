import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "../screens/HomeScreen";

const RootStack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <RootStack.Navigator headerMode="none" initialRouteName="Home">
      <RootStack.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false, headerLeft: () => null }}
      />
    </RootStack.Navigator>
  );
};

export default StackNavigator;
