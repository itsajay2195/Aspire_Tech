import { StyleSheet, Text, View } from "react-native";
import React, { useCallback } from "react";
import { SIZES } from "../styles";
import PrimaryButton from "../components/common/PrimaryButton";

const StaticScreen = ({ navigation }) => {
  const onBtnClick = useCallback(() => {
    navigation.navigate("Debit Card");
  }, [navigation]);
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: SIZES.largeTitle }}>Coming Soon</Text>

      <View style={{ width:"100%",paddingVertical: 20 }}>
        <PrimaryButton btnText={"Go to Debit Card"} onPress={onBtnClick} />
      </View>
    </View>
  );
};

export default StaticScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
