import { StyleSheet,  View } from "react-native";
import { COLORS, PLATFORM, SIZES } from "../../styles/index";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import {SvgLogo} from "../../assets/svg/svg";
import { DEBIT_CARD_SCREEN } from "../../constants/ScreenNames";

const Header = ({ showBack }) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.iconWrapper}>
        {showBack && (
          <MaterialCommunityIcons
            onPress={() => navigation.navigate(DEBIT_CARD_SCREEN)}
            name="chevron-left"
            size={30}
            color= {COLORS.white}
          />
        )}
      </View>

      <View style={styles.iconWrapper}>
        <SvgLogo color={COLORS.primaryGreen} />
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
      paddingHorizontal: SIZES.padding / 2,
      flexDirection: 'row',
      justifyContent: 'space-between',
      height: 40,
      backgroundColor: COLORS.primaryBlue
  },
  iconWrapper: {
      justifyContent: 'center',
      alignItems: 'center'
  },
  iconStyle: {
      height: 20,
      width: 20
  }
})