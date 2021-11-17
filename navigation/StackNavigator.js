import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import ContentScreen from "../screens/ContentScreen";
import HomeScreen from "../screens/HomeScreen";
import LoginScreen from "../screens/LoginScreen";
import MedicineDetailScreen from "../screens/MedicineDetailScreen";
import MedicineGroupScreen from "../screens/MedicineGroupScreen";
import ProfileScreen from "../screens/ProfileScreen";
import { useSelector } from "react-redux";
// import api from "../api";
// import upload from "../api/upload";

const RootStack = createNativeStackNavigator();

const StackNavigator = () => {
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
  const user = useSelector((state) => state.user);

  // if (isLoggedIn) {
  //   api.defaults.headers.common = {
  //     Authorization: `Bearer ${isLoggedIn}`,
  //   };
  //   upload.defaults.headers.common = {
  //     Authorization: `Bearer ${isLoggedIn}`,
  //   };
  // }
  return (
    <RootStack.Navigator headerMode="none" initialRouteName="Login">
      {isLoggedIn && user && user?.data !== "" ? (
        <>
          <RootStack.Screen
            name="Home"
            component={HomeScreen}
            options={{ headerShown: false, headerLeft: () => null }}
          />
          <RootStack.Screen name="Profile" component={ProfileScreen} />
          <RootStack.Screen name="Content" component={ContentScreen} />
          <RootStack.Screen
            name="MedicineGroup"
            component={MedicineGroupScreen}
          />
          <RootStack.Screen
            name="MedicineDetail"
            component={MedicineDetailScreen}
          />
        </>
      ) : (
        <RootStack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
      )}
    </RootStack.Navigator>
  );
};

export default StackNavigator;
