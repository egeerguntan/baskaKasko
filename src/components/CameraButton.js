import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";

export const CameraButton = ({ ...props }) => {
  return (
    <TouchableOpacity
      style={[styles(props.size).radius]}
      onPress={props.onPress}
    >
      <Feather name="camera" size={70} color="white" />
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
    marginBottom: 150,
  },
  text: { color: "white", fontSize: size / 3 },
});
