import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { StatusBar, SafeAreaView, StyleSheet } from "react-native";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { initializeApp } from "firebase/app";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import { AuthenticationContextProvider } from "./src/Authentication/Authentication.context";
import { Navigation } from "./src/Navigation";

const Stack = createNativeStackNavigator();

const firebaseConfig = {
  apiKey: "AIzaSyD00vU5F9tBhstPM7YAYtzHYCpuoVN_4yM",
  authDomain: "baskakasko.firebaseapp.com",
  projectId: "baskakasko",
  storageBucket: "baskakasko.appspot.com",
  messagingSenderId: "381166756355",
  appId: "1:381166756355:web:58b97e05d45401183fe436",
  measurementId: "G-LDZY1Y0XMH",
};

if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}

export default function App() {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <AuthenticationContextProvider>
          <Navigation />
        </AuthenticationContextProvider>
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
