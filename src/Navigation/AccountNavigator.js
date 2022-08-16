import React from "react";
import { Text, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

import StartScreen from "../Screens/StartScreen.js";
import LoginScreen from "../Screens/LoginScreen.js";
import RegisterScreen from "../Screens/RegisterScreen.js";

const Stack = createStackNavigator();

const AccountNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Start"
      component={StartScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="Login"
      component={LoginScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="Register"
      component={RegisterScreen}
      options={{ headerShown: false }}
    />
  </Stack.Navigator>
);

export default AccountNavigator;
