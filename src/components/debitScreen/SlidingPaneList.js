import { StyleSheet, Text, View, Image, Switch, Alert } from "react-native";
import React, { useCallback, useState, useEffect } from "react";
import { icons, COLORS, SIZES } from "../../styles/index";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import {
  selectLoading,
  selectUserInfo,
} from "../../redux/selectors/userSelectors";
import { selectWeeklyLimitToggled } from "../../redux/selectors/userSelectors";



const ListItem = ({ item }) => {
  const { image, title, meta, toggle, isToggleMenu } = item;
  const [toggleEnabled, setToggleEnabled] = useState(false);
  const loading = useSelector(selectLoading);
  const userInfo = useSelector(selectUserInfo);
  const isweeklyLimitEnabled = userInfo?.weeklyLimitEnabled;

  const toggleValueSelector =  isweeklyLimitEnabled && item.type==="WEEK"
  
 
  // const navigation = useNavigation();
  // const isToggled = useSelector(selectWeeklyLimitToggled);

  // useEffect(() => {
  //   if (toggle !== null) {
  //     setToggleEnabled(true);
  //   }
  // }, [toggle]);

  // const updateToggleInfo = useCallback(() => {
  //   const url = "/api/user/1/weklylimittoggle";

  //   fetch(url, {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({ weeklyLimitEnabled: true }),
  //   })
  //     .then((res) => {
  //       if (res.status !== 200) throw new Error(res.status);
  //       dispatch(setSpendingLimit(null));
  //       dispatch(setAmountSpent(0));
  //       dispatch(setWeeklyLimitToggled(!isToggled));
  //     })
  //     .catch((error) => {
  //       Alert.alert(String(error + " Something went wrong"));
  //     });
  // }, [dispatch, isToggled]);

  // const handleToggleSwitch = useCallback(() => {
  //   if (!toggleEnabled) return;

  //   if (title === "Weekly spending limit") {
  //     if (item.isToggled) {
  //       Alert.alert(
  //         "Weekly Limit",
  //         "Are you sure that you want to turn me off? you might lose control of your cash flow",
  //         [
  //           { text: "Cancel" },
  //           {
  //             text: "Proceed",
  //             onPress: () => {
  //               updateToggleInfo();
  //             },
  //           },
  //         ],
  //         { cancelable: false }
  //       );
  //     } else {
  //       navigation.navigate("Limit", {
  //         id: item.id,
  //         toggledValue: item.isToggled,
  //       });
  //     }
  //   }
  // }, [item, navigation, toggleEnabled, updateToggleInfo]);
  const navigation = useNavigation()
  return (
    <View style={styles.container}>
      <View style={styles.contentWrapper}>
        <Image source={image} style={{ height: 30, width: 30 }} />

        <View style={styles.menuInfoWrapper}>
          <Text style={styles.titlestyle}>{title}</Text>
          <Text style={styles.metaTextStyle} numberOfLines={2}>
            {meta}
          </Text>
        </View>
      </View>

      {isToggleMenu && (
        <Switch
          style={{ transform: [{ scaleX: 0.6 }, { scaleY: 0.6 }] }}
          trackColor={{
            false: COLORS.toggleFalseTrackColor,
            true: COLORS.toggleTrueTrackColor,
          }}
          thumbColor={toggle ? COLORS.white : COLORS.white}
          ios_backgroundColor={COLORS.toggleFalseTrackColor}
          onValueChange={()=> navigation.navigate("Limit")}
          value={toggleValueSelector}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: SIZES.padding,
    paddingVertical: SIZES.padding / 2,
    backgroundColor: COLORS.white,
  },
  menuInfoWrapper: {
    width: "80%",
  },
  contentWrapper: { flexDirection: "row", justifyContent: "space-between" },
  titlestyle: { fontWeight: "400" },
  metaTextStyle: { color: "#b9b9b9", fontSize: 14 },
});

export default ListItem;
