import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Svg, { Image } from "react-native-svg";
import icons from "../assets/icons";

const WeeklyLimitSceen = () => {
  return (
    <View>
      <Svg width={40} height={40}>
        <Image href={icons.credit} width={20} height={20} />
      </Svg>
    </View>
  );
};

export default WeeklyLimitSceen;

const styles = StyleSheet.create({});
