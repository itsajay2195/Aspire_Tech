import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  FlatList,
  TouchableOpacity,
  Image,
  Alert,
} from "react-native";
import { COLORS, icons, SIZES } from "../../styles";
// import { LinearProgress } from 'react-native-elements';
import { SafeAreaView } from "react-native-safe-area-context";
// import { useDispatch, useSelector, useStore } from 'react-redux';
// import MenuItems from './MenuItems';
import Card from "./Card";
import ListItem from "./SlidingPaneList";
import Bar from "./Bar";

// import { selectCardNumber, selectCurrencyUnits, selectWeeklySpendingLimit, selectWeeklySpendingLimitExhausted, setWeeklySpendingLimit, setWeeklySpendingLimitExhausted } from '../store/slices/debitCardSlice';
// import { selectAppColorSolid, setAppColorSolid, setIsLoadingIndicatorDisplayed, setLoadingIndicatorText} from '../store/slices/appVariablesSlice';
// import { selectUserId } from '../store/slices/userSlice';
// import debitCardDetailsAPI from '../api/debitCardDetailsAPI';

const { width, height } = Dimensions.get("screen");

const CARD_WIDTH = width - 48; //Ensures that the currency notation and the card's left end align just like the mock up
const CARD_HEIGHT = 0.6 * CARD_WIDTH; // Aspect Ratio of the card is 0.6 [h/w]

const POP_UP_HEIGHT = height >= 844 ? 0.73 * height : 0.66 * height;
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

const flatListHeaderComponent = ()=>(
    <>
    <View style={{ alignItems: "center" }}>
      <View
        style={{
          backgroundColor: "transparent",
          flex: 1,
          height: height * 0.35,
        }}
      >
        {/* A view that stays transparent */}
      </View>
      <Card />
    </View>
    <View
      style={{ padding: SIZES.padding, backgroundColor: COLORS.white }}
    >
      <View style={styles.spendingLimitWrapper}>
        <Text style={{ fontSize: 14 }}>Debit card spending limit</Text>
        <Text style={{ color: COLORS.gray, fontSize: 14 }}>
          <Text
            style={{ color: COLORS.primaryGreen, fontWeight: "bold" }}
          >
            $500
            {/* {amountSpent
              ?.toString()
              .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}{" "} */}
          </Text>
          | $200
          {/* {spendingLimit
            ?.toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, ",")} */}
        </Text>
      </View>
      <Bar />
    </View>
  </>
)

const createOneButtonAlert = (title, message) =>
  Alert.alert(title, message, [
    {
      text: "OK",
      onPress: () => {},
    },
  ]);

const SlidingUpPanel = (props) => {
  // const store = useStore();
  // const dispatchEvent = useDispatch();

  // let state = store.getState()

  let spendingLimit = 5000;
  let spendingLimitExhausted = 300;
  let cardNumber = "12345678912";
  let userId = 1;
  let currencyUnits = "USD";
  let isSpendingLimitSet = true;
  let appColorSolid = true;
  let scrollheight = isSpendingLimitSet ? 580 : 540;

  

  const manageLoadingIndicator = (displayFlag, message) => {
    dispatchEvent(
      setIsLoadingIndicatorDisplayed({
        isLoadingIndicatorDisplayed: displayFlag,
      })
    );
    dispatchEvent(
      setLoadingIndicatorText({
        loadingIndicatorText: message,
      })
    );
  };

  const removeSpendingLimitApi = async () => {
    const params = {
      userId: userId, //User ID for which Spending limit is being set
      cardNumber: cardNumber, //Card Number for which the Spending Limit is being set
    };

    //MARK: this line is used to contact one of the two mocked dumb APIs that return either success(90%) or failure(10%) in changing the limit
    let randomizedSucessfulApi =
      Math.floor(Math.random() * 100) < 10
        ? "/removeSpendingLimitf"
        : "/removeSpendingLimits";
    console.log("API CALL : " + randomizedSucessfulApi);
    console.log(params);

    const response = debitCardDetailsAPI
      .post(randomizedSucessfulApi, params)
      .then((response) => {
        manageLoadingIndicator(false, "");
        // Response is designed to be in the form of
        // For: setSpendingLimitf -> {success: "false", reason: "You are not allowed to remove spending limit. Contact your administrator", limitExhausted: -1}    //The setting/removal failed at backend due to a restriction by card manager
        // For: setSpendingLimits -> {success: "true", reason: "", limitExhausted: <numericalValue>} //Limit set successfully
        // setIndicatorDisplayed(false);
        if (response.status != 200) {
          return createOneButtonAlert(
            "Error",
            "Error Encountered in Removing Spending Limit"
          );
        } else {
          console.log(response.data);
          if (response.data.success != null) {
            if (response.data.success == "true") {
              dispatchEvent(
                setWeeklySpendingLimit({
                  weeklySpendingLimit: -1,
                })
              );
              dispatchEvent(
                setWeeklySpendingLimitExhausted({
                  weeklySpendingLimitExhausted: -1,
                })
              );
            } else if (
              response.data.success == "false" &&
              response.data.reason != null &&
              response.data.reason != ""
            ) {
              return createOneButtonAlert("Error", response.data.reason);
            }
          }
        }
      })
      .catch((error) => {
        console.log(response);
        console.log(error);
        manageLoadingIndicator(false, "");
        // setIndicatorDisplayed(false);
        return createOneButtonAlert(
          "Error",
          "Error Encountered in Removing Spending Limit"
        );
      });
  };


  const totalMenuItemHeight = isSpendingLimitSet
    ? CARD_HEIGHT + 32 - 90 + 65 + 63 * panelMenu.length + 243
    : CARD_HEIGHT + 63 * menuArr.length + 243;
  //CARD_HEIGHT - > height of Debit Card
  //32 -> Height of Show/Hide button
  //-90-> margin adjustment of the card
  //63 -> Height + Margin of each menu item
  //65 -> Height + Margin of bar item
  //243-> Top Transparent view

  //Calculating padding below menu items
  const extraPaddingNeeded =
    totalMenuItemHeight > height - 40 ? 60 : height - 40 - totalMenuItemHeight;
  return (
    <SafeAreaView style={{ top: 0, bottom: 0, ...styles.behind }}>
      <FlatList
        style={styles.flatListStyle}
        bounces={true}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={flatListHeaderComponent}
        ListFooterComponent={
          <View
            style={[styles.flatListFooterStyle,{height: extraPaddingNeeded,}]}
          />
          //Padding at bottom
        }
        data={panelMenu}
        renderItem={({ item }) => <ListItem item={item} />}
        scrollEnabled={true}
      ></FlatList>
    </SafeAreaView>
  );
};

export default SlidingUpPanel;

const styles = StyleSheet.create({
  behind: {
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    top: 0,
    bottom: 0,
    backgroundColor: "transparent",
    width: "100%",
    flex: 1,
  },
  menuItem: {
    flexDirection: "row",
    height: 41,
    marginTop: 22,
    alignContent: "center",
    alignItems: "center",
  },
  menuTitle: {
    height: 19,
    fontWeight: "400",
    fontSize: 14,
    alignContent: "flex-start",
    flex: 1,
    marginBottom: 2,
  },
  menuIcon: {
    width: 32,
    height: 32,
  },
  menuSubtitle: {
    height: 18,
    fontWeight: "300",
    fontSize: 12,
    color: "rgba(34,34,34,0.4)",
  },
  spendingLimitWrapper: {
    paddingTop: 10,
    paddingBottom: 5,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  flatListStyle: {
    position: "absolute",
    top: 0,
    bottom: 0,
    backgroundColor: "transparent",
    width: "100%",
    height: height - 40, //-40 for tab bar
    flex: 1,
  },
  flatListFooterStyle:{
    backgroundColor: "white",
    marginTop: -1,
  }
});
