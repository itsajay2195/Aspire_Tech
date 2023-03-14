import { StyleSheet, Text, View, Image } from "react-native";
import theme from "../../styles/theme";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { SvgLogo } from "../../assets/svgs";

const Header = ({ showBack }) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.iconWrapper}>
        {showBack && (
          <MaterialCommunityIcons
            onPress={() => navigation.navigate("Debit Card")}
            name="chevron-left"
            size={30}
            color= {theme.colors.white}
          />
        )}
      </View>

      <View style={styles.iconWrapper}>
        <SvgLogo color={theme.colors.primaryGreen} />
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: theme.fontSizes.padding / 2,
    flexDirection: "row",
    justifyContent: "space-between",
    height: 40,
    backgroundColor: theme.colors.primaryBlue,
  },
  iconWrapper: {
    justifyContent: "center",
    alignItems: "center",
  },
  iconStyle: {
    height: 20,
    width: 20,
  },
});
