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
import Card from "./Card";
import ListItem from "./SlidingPaneList";
import Bar from "./Bar";
import { useSelector } from "react-redux";
import {
  selectAmountSpent,
  selectSpendingLimit,
  selectDenomination,
} from "../../redux/selectors/userSelectors";

const { width, height } = Dimensions.get("screen");

const CARD_WIDTH = width - 48; //Ensures that the currency notation and the card's left end align just like the mock up
const CARD_HEIGHT = 0.6 * CARD_WIDTH; // Aspect Ratio of the card is 0.6 [h/w]
let amountSpent = null,
  spendingLimit = null,
  denomination;

const panelMenu = [
  {
    id: 1,
    type: "MENU",
    image: icons.insight,
    title: "Top-up-account",
    meta: "Deposit money to your account to use with card",
    isToggleMenu: false,
    toggle: false,
  },
  {
    id: 2,
    type: "WEEK",
    image: icons.transfer,
    title: "Weekly spending limit",
    meta: "you haven't set any spending limit on card",
    isToggleMenu: true,
    toggle: true,
  },
  {
    id: 3,
    type: "MENU",
    image: icons.freeze,
    type: "FREEZE_TOGGLE",
    title: "Freeze card",
    meta: "Your Debit card is currently active",
    isToggleMenu: true,
    toggle: null,
  },
  {
    id: 4,
    type: "MENU",
    image: icons.newCard,
    title: "Get a new card ",
    meta: "This activates your current debit card",
    isToggleMenu: false,
    toggle: false,
  },
  {
    id: 5,
    type: "MENU",
    image: icons.deactivate,
    title: "Deactivated cards",
    meta: "This deactivates your current debit card",
    isToggleMenu: false,
    toggle: false,
  },
];

const flatListHeaderComponent = () => (
  <>
    <View style={styles.flatListHeaderComponentTopItemStyle}>
      <View
        style={styles.flatListHeaderItemTransparentView}
      >
        {/* A view that stays transparent */}
      </View>
      <Card />
    </View>
    
      {spendingLimit?<View style={styles.spendingLimitContetnWrapper}>
        <View style={styles.spendingLimitWrapper}>
          
        
              <Text style={styles.spendingLimitTextStyle}>Debit card spending limit</Text>
              <Text style={styles.limitText}>
                <Text
                  style={styles.amountSpentText}
                >
                  {`${denomination} `}
                  {amountSpent
                    ?.toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}{" "}
                </Text>
                | {`${denomination} `}
                {spendingLimit
                  ?.toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
              </Text>
            
          
        </View>
        <Bar/>
      </View>: <View style={styles.flatListHeadrbottomStyle}/>}
  
  </>
);


const SlidingUpPanel = () => {
  amountSpent = useSelector(selectAmountSpent);
  spendingLimit = useSelector(selectSpendingLimit);
  denomination = useSelector(selectDenomination);
  let isSpendingLimitSet = true;


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
            style={[styles.flatListFooterStyle, { height: extraPaddingNeeded }]}
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
  flatListFooterStyle: {
    backgroundColor: COLORS.white,
    marginTop: -1,
  },
  flatListHeaderComponentTopItemStyle:{ alignItems: "center"},
  flatListHeaderItemTransparentView:{
    backgroundColor: "transparent",
    flex: 1,
    height: height * 0.35,
  },
  spendingLimitContetnWrapper:{ padding: SIZES.padding +10, backgroundColor: COLORS.white,  },
  spendingLimitTextStyle:{ fontSize: 14 },
  limitText:{ color: COLORS.gray, fontSize: 14 },
  amountSpentText:{ color: COLORS.primaryGreen, fontWeight: "bold" },
  flatListHeadrbottomStyle:{height:10, backgroundColor:"white"}
});
