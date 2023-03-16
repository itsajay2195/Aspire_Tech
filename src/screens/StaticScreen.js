import { StyleSheet, Text, View } from "react-native";
import React, { useCallback } from "react";
import { SIZES } from "../styles";
import PrimaryButton from "../components/common/PrimaryButton";
import { DEBIT_CARD_SCREEN } from "../constants/ScreenNames";

const StaticScreen = ({ navigation }) => {
  const onBtnClick = useCallback(() => {
    navigation.navigate(DEBIT_CARD_SCREEN);
  }, [navigation]);
  return (
    <View style={styles.container}>
      <Text style={styles.comingSoon}>Coming Soon</Text>

      <View style={styles.buttonStyle}>
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
  comingSoon:{ fontSize: SIZES.largeTitle },
  buttonStyle:{ width:"100%",paddingVertical: 20 }
});
