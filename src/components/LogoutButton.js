import React from "react";
import { TouchableOpacity, Text, StyleSheet, Image } from "react-native";
import { SimpleLineIcons } from "@expo/vector-icons";

export const LogoutButton = ({ ...props }) => {
  return (
    <TouchableOpacity
      style={[styles(props.size).radius]}
      onPress={props.onPress}
    >
      <SimpleLineIcons name="logout" size={40} color="white" />
    </TouchableOpacity>
  );
};

const styles = (size) => ({
  radius: {
    borderRadius: size / 3,
    width: size,
    height: size,
    alignItems: "center",
    justifyContent: "center",
    borderColor: "white",
    borderWidth: 2,
    marginRight: 10,
  },
  text: { color: "white", fontSize: size / 3 },
});
