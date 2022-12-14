import React, { useState, useContext } from "react";
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import {
  TextInput,
  Button,
  ActivityIndicator,
  Colors,
} from "react-native-paper";

import { AuthenticationContext } from "../Authentication/Authentication.context";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { isLoading, onLogin, error } = useContext(AuthenticationContext);
  return (
    <ImageBackground
      source={require("../Assets/Images/vivid-blurred-colorful-wallpaper-background.jpg")}
      style={styles.container}
    >
      <View style={styles.brightness} />
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          label="E-posta"
          value={email}
          keyboardType="email-address"
          autoCapitalize="none"
          onChangeText={(email) => setEmail(email)}
        />
        <View style={styles.space} />
        <TextInput
          style={styles.input}
          label="Şifre"
          value={password}
          secureTextEntry
          keyboardType="password"
          autoCapitalize="none"
          onChangeText={(password) => setPassword(password)}
        />
        {error && (
          <View style={styles.errorContainer}>
            <Text variant="error">{error}</Text>
          </View>
        )}
        <View style={styles.space} />
        {!isLoading ? (
          <Button
            title="login"
            icon="lock-open-outline"
            mode="contained"
            onPress={() => onLogin(email, password)}
            buttonColor="#254b8f"
          >
            Giriş yap
          </Button>
        ) : (
          <ActivityIndicator animating={true} color="blue" />
        )}
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
  inputContainer: {
    backgroundColor: "rgba(255, 255, 255, 0.5)",
    padding: 10,
    marginBottom: 240,
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    width: 300,
  },
  brightness: {
    position: "absolute",
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(255, 255, 255, 0.1)",
  },
  space: {
    height: 40,
  },
  errorContainer: {
    alignItems: "center",
    justifyContent: "center",
    maxWidth: 300,
  },
});

export default LoginScreen;
