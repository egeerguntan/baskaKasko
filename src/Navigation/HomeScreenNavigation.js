import React from "react";
import { Text } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../Screens/HomeScreen.js";

const HomeStack = createStackNavigator();

const HomeNavigator = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <HomeStack.Screen name="Photo" component={() => <Text> Photo </Text>} />
    </HomeStack.Navigator>
  );
};

export default HomeNavigator;
