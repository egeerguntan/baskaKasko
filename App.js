import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import {
  StatusBar,
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Button,
} from "react-native";
import React, { useState } from "react";
import HomeScreenNavigator from "./src/Navigation/HomeScreenNavigation";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

function LoginScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Button title="Log In" onPress={() => navigation.navigate("Home")} />
    </View>
  );
}

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Login">
            <Stack.Screen
              name="Home"
              component={HomeScreenNavigator}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Login"
              component={LoginScreen}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaView>
      <ExpoStatusBar style="auto" />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight,
    flex: 1,
    backgroundColor: "red",
  },
});
