import { StyleSheet, View, Text, Image } from "react-native";
import React, { useContext, useState } from "react";
import { LogoutButton } from "../Components/LogoutButton.js";
import { AuthenticationContext } from "../Authentication/Authentication.context";
import ImagePickerComponent from "../Components/ImagePickerComponent";
import callGoogleVisionAsync from "../Components/Vision";
export default function HomeScreen() {
  const { onLogout } = useContext(AuthenticationContext);

  return (
    <View style={styles.container}>
      <View style={styles.logout}>
        <LogoutButton size={60} onPress={() => onLogout()} />
      </View>
      <View style={styles.textBox}>
        <Text style={styles.text}>Kadranin fotoğrafını çekiniz</Text>
      </View>
      <View style={styles.button}>
        <ImagePickerComponent onSubmit={callGoogleVisionAsync} />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "green",
  },
  logout: {
    flex: 1,
    flexGrow: 0.15,
    alignItems: "flex-end",
    justifyContent: "center",
  },
  textBox: {
    flex: 1,
    flexGrow: 0.35,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "orange",
  },
  button: {
    flex: 1,
    flexGrow: 1,
    justifyContent: "center",
    backgroundColor: "blue",
    alignItems: "center",
  },
  text: {
    color: "white",
    fontSize: 30,
    background: "white",
    // fontFamily: "Raleway",
    fontWeight: "400",
    lineHeight: 40,
    marginTop: 40,
  },
});
