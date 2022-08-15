import React from "react";
import { TouchableOpacity, Text, StyleSheet, Image } from "react-native";
import { SimpleLineIcons } from "@expo/vector-icons";

export const LoginScreen = () => {
  return (
    <View>
      <Button title="Log In" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight,
    flex: 1,
    backgroundColor: "red",
  },
  button: {
    color: "blue",
  },
});
