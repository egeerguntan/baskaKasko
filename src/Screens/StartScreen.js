import React from "react";
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import { Button } from "react-native-paper";
import { useFonts, Orbitron_400Regular } from "@expo-google-fonts/orbitron";

const StartScreen = ({ navigation }) => {
  let [fontsLoaded] = useFonts({
    Orbitron_400Regular,
  });
  if (!fontsLoaded) {
    return null;
  }
  return (
    <ImageBackground
      source={require("../Assets/Images/vivid-blurred-colorful-wallpaper-background.jpg")}
      style={styles.container}
    >
      <View style={styles.brightness} />
      <View>
        <Text style={styles.title}>Başka Kasko</Text>
      </View>
      <View style={styles.buttonHolder}>
        <Button
          labelStyle={{ fontSize: 20 }}
          icon="lock-open-outline"
          mode="contained"
          color=""
          onPress={() => navigation.navigate("Login")}
          buttonColor="#254b8f"
        >
          Giriş Yap
        </Button>
        <View style={styles.space} />
        <Button
          labelStyle={{ fontSize: 20 }}
          icon="account"
          mode="contained"
          color=""
          onPress={() => navigation.navigate("Register")}
          buttonColor="#254b8f"
        >
          Kayıt Ol
        </Button>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    marginBottom: 380,
    fontSize: 38,
    fontFamily: "Orbitron_400Regular",
    color: "blue",
  },
  brightness: {
    position: "absolute",
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(255, 255, 255, 0.3)",
  },
  buttonHolder: {
    position: "absolute",
    backgroundColor: "rgba(255, 255, 255, 0.5)",
    padding: 40,
    marginTop: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  space: {
    height: 40,
  },
});

export default StartScreen;
