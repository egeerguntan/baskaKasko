import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { StatusBar, SafeAreaView, StyleSheet, View, Text } from "react-native";
import React, { useState } from "react";
import CameraPage from "./src/components/CameraPage.js";

export default function App() {
  // const [visible, setVisible] = useState(null);
  return (
    <>
      <SafeAreaView style={styles.container}>
        <CameraPage />
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
