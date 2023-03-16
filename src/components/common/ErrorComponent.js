import { StyleSheet, View, Alert } from "react-native";
import React from "react";
import { COLORS } from "../../styles";

const ErrorComponent = () => {
  return (
    <View style={styles.container}>{Alert.alert("Something went wrong")}</View>
  );
};

export default ErrorComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primaryBlue,
    justifyContent: "center",
    alignItems: "center",
  },
});
