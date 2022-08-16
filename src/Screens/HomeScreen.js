import { StyleSheet, View, Text } from "react-native";
import { CameraButton } from "../Components/CameraButton.js";
import React, { useContext, useState } from "react";
import { LogoutButton } from "../Components/LogoutButton.js";
import { AuthenticationContext } from "../Authentication/Authentication.context";

export default function HomeScreen({ navigation }) {
  const { onLogout } = useContext(AuthenticationContext);
  const [visible, setVisible] = useState(null);
  return (
    <View style={styles.container}>
      <View style={styles.logout}>
        <LogoutButton size={60} onPress={() => onLogout()} />
      </View>
      <View style={styles.textBox}>
        <Text style={styles.text}>Kadranin fotoğrafini çekiniz</Text>
      </View>
      <View style={styles.button}>
        <CameraButton
          title="+"
          size={150}
          onPress={() => navigation.navigate("Photo")}
        />
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
