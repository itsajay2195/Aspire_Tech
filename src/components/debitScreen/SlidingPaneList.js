import { StyleSheet, Text, View, Image, Switch, Alert } from "react-native";
import React, { useCallback, useState, useEffect } from "react";
import { icons, COLORS, SIZES } from "../../styles/index";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import {
  setAmountSpent,
  setSpendingLimit,
  setWeeklyLimitToggled,
} from "../../redux/actions/UserActions";
import { selectWeeklyLimitToggled } from "../../redux/selectors/userSelectors";

const SlidingPaneList = ({ spendingLimit }) => {
  const panelMenu = [
    {
      id: 1,
      image: icons.insight,
      title: "Top-up-account",
      meta: "Deposit money to your account to use with card",
      toggle: false,
    },
    {
      id: 2,
      image: icons.transfer,
      title: "Weekly spending limit",
      meta: "you haven't set any spending limit on card",
      toggle: true,
    },
    {
      id: 3,
      image: icons.freeze,
      title: "Freeze card",
      meta: "Your Debit card is currently active",
      toggle: null,
    },
    {
      id: 4,
      image: icons.newCard,
      title: "Get a new card ",
      meta: "This activates your current debit card",
      toggle: false,
    },
    {
      id: 5,
      image: icons.deactivate,
      title: "Deactivated cards",
      meta: "This deactivates your current debit card",
      toggle: false,
    },
  ];

  return (
    <>
      {panelMenu.map((item) => (
        <ListItem
          key={item.id}
          image={item.image}
          title={item.title}
          meta={
            item.title === "Weekly spending limit" && spendingLimit
              ? `Your weekly spending limit is S$${spendingLimit}`
              : item.meta
          }
          toggle={item.toggle}
        />
      ))}
    </>
  );
};

export default SlidingPaneList;

const ListItem = ({ image,title,meta,toggle,item }) => {
  const [toggleEnabled, setToggleEnabled] = useState(false);
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const isToggled = useSelector(selectWeeklyLimitToggled);

  useEffect(() => {
    if (toggle !== null) {
      setToggleEnabled(true);
    }
  }, [toggle]);

  const updateToggleInfo = useCallback(() => {
    const url = "/api/user/1/weklylimittoggle";

    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ weeklyLimitEnabled: true }),
    })
      .then((res) => {
        if (res.status !== 200) throw new Error(res.status);
        dispatch(setSpendingLimit(null));
        dispatch(setAmountSpent(0));
        dispatch(setWeeklyLimitToggled(!isToggled));
      })
      .catch((error) => {
        Alert.alert(String(error + " Something went wrong"));
      });
  }, [dispatch, isToggled]);

  const handleToggleSwitch = useCallback(() => {
    if (!toggleEnabled) return;

    if (title === "Weekly spending limit") {
      if (item.isToggled) {
        Alert.alert(
          "Weekly Limit",
          "Are you sure that you want to turn me off? you might lose control of your cash flow",
          [
            { text: "Cancel" },
            {
              text: "Proceed",
              onPress: () => {
                updateToggleInfo();
              },
            },
          ],
          { cancelable: false }
        );
      } else {
        navigation.navigate("Limit", {
          id: item.id,
          toggledValue: item.isToggled,
        });
      }
    }
  }, [item, navigation, toggleEnabled, updateToggleInfo]);

  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Image source={image} style={{ height: 30, width: 30 }} />

        <View style={styles.menuInfoWrapper}>
          <Text style={{ fontWeight: "400" }}>{title}</Text>
          <Text style={{ color: "#b9b9b9", fontSize: 14 }} numberOfLines={2}>
            {meta}
          </Text>
        </View>
      </View>

      {toggleEnabled && (
        <Switch
          style={{ transform: [{ scaleX: 0.6 }, { scaleY: 0.6 }] }}
          trackColor={{
            false: COLORS.toggleFalseTrackColor,
            true: COLORS.toggleTrueTrackColor,
          }}
          thumbColor={isToggled ? COLORS.white : COLORS.white}
          ios_backgroundColor={COLORS.toggleFalseTrackColor}
          onValueChange={handleToggleSwitch}
          value={isToggled}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: SIZES.padding / 2,
  },
  menuInfoWrapper: {
    width: "80%",
  },
});
