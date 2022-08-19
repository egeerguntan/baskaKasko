import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { StatusBar, SafeAreaView, StyleSheet } from "react-native";
import firebase from "./config/firebase";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import { AuthenticationContextProvider } from "./src/Authentication/Authentication.context";
import { Navigation } from "./src/Navigation";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <SafeAreaView style={styles.safeArea}>
        <AuthenticationContextProvider>
          <Navigation />
        </AuthenticationContextProvider>
      </SafeAreaView>
      <ExpoStatusBar style="auto" />
    </>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    marginTop: StatusBar.currentHeight,
    flex: 1,
    backgroundColor: "red",
  },
});
