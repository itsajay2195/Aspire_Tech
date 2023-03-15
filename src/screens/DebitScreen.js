import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Animated,
  TouchableOpacity,
  Button,
  StatusBar,
} from "react-native";
import { COLORS, PLATFORM, SIZES } from "../styles/index";
import React, { useState, useCallback } from "react";
// import SlidingUpPanel from "rn-sliding-up-panel";
import Header from "../components/common/Header";
import Card from "../components/debitScreen/Card";
import SlidingPaneListItem from "../components/debitScreen/SlidingPaneList";
import CurrencyCard from "../components/common/CurrencyCard";
import { useSelector } from "react-redux";
import {
  selectLoading,
  selectSpendingLimit,
  selectUserInfo,
  selectAmountSpent,
} from "../redux/selectors/userSelectors";
import Bar from "../components/debitScreen/Bar";
import SlidingUpPanel from "../components/debitScreen/SlidingUpPanel";
import { SvgShow, SvgRemove } from "../assets/svg/svg";

const RenderSlidingPanelContent = ({amountSpent, showCard, spendingLimit}) => (
  <>
    <View style={styles.debitCardComponent}>
      <Card showCard={showCard} />
    </View>
    <View style={styles.slidingUpPanelStyle}>
      <View style={styles.slideupContent}>
        {spendingLimit && (
          <>
            <View style={styles.spendingLimitWrapper}>
              <Text style={styles.debitCardSpendingLimitText}>
                Debit card spending limit
              </Text>
              <Text style={styles.debitCardSpendingLimitValue}>
                <Text style={styles.debitCardSpendingLimitCurrentValue}>
                  $
                  {amountSpent
                    ?.toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}{" "}
                </Text>
                | $
                {spendingLimit
                  ?.toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
              </Text>
            </View>
            <View style={{ padding: 5 }}>
              <Bar/>
            </View>
          </>
        )}
        <SlidingPaneListItem spendingLimit={spendingLimit} />
      </View>
    </View>
  </>
);

const DebitScreen = () => {
  const [showCard, setShowCard] = useState(true);
  const loading = useSelector(selectLoading);
  const spendingLimit = useSelector(selectSpendingLimit);
  const userInfo = useSelector(selectUserInfo);
  const amountSpent = useSelector(selectAmountSpent);

  const draggableRange = React.useMemo(
    () => ({
      top: PLATFORM === "ios" ? SIZES.height - 30 : SIZES.height - 50,
      bottom: SIZES.height / 1.5,
    }),
    []
  );

  const [viewHeight, setViewHeight] = useState(0);
  const handleLayout = (event) => {
    const { height } = event.nativeEvent.layout;
    setViewHeight(height);
  };
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <Header showBack={false} />
      </SafeAreaView>
      <View style={styles.debitCardTextWrapper}>
        <Text style={styles.debitCardText}>Debit Card</Text>
      </View>
      <View style={styles.debitSectionStyle}>
        <Text style={{ color: COLORS.white }}>Available balance</Text>
        <View style={styles.currenyInfoWrapper}>
          <CurrencyCard />
          <View>
            <Text style={styles.currencyTotalText}>
              {loading
                ? ""
                : ` ${
                    !userInfo
                      ? "- - - -"
                      : userInfo?.card_info?.available_balance
                          .toString()
                          .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                  }`}
            </Text>
          </View>
        </View>
      </View>

      <View
        style={{ flex: 1, justifyContent: "flex-end" }}
        onLayout={handleLayout}
      >
        {viewHeight > 0 && (
          <SlidingUpPanel viewHeight={viewHeight}>
            <RenderSlidingPanelContent showCard={showCard} amountSpent={100} spendingLimit={200}/>
          </SlidingUpPanel>
        )}
      </View>
    </View>
  );
};

export default DebitScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primaryBlue,
    paddingTop: PLATFORM === "android" ? StatusBar.currentHeight : 0,
  },
  debitCardTextWrapper: {
    padding: SIZES.padding,
  },
  debitCardText: {
    fontWeight: "700",
    color: COLORS.white,
    fontSize: SIZES.h2,
  },
  debitSectionStyle: {
    flex: 0.2,
    padding: SIZES.padding,
    backgroundColor: COLORS.primaryBlue,
  },
  currenyInfoWrapper: {
    flexDirection: "row",
    paddingTop: 10,
  },
  currencySymbol: {
    paddingHorizontal: 8,
    borderRadius: 5,
    backgroundColor: "#01D167",
    justifyContent: "center",
  },
  currencySymbolText: {
    color: COLORS.white,
    fontSize: SIZES.font,
    fontWeight: "bold",
  },
  currencyTotalText: {
    color: COLORS.white,
    fontSize: SIZES.h2,
    fontWeight: "700",
  },
  debitCardComponent: {
    marginHorizontal: "5%",
    position: "absolute",
    borderRadius: 5,
    width: "90%",
    height: 200,
    zIndex: 1,
  },
  showCardButtonWrapper: {
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  showCardButton: {
    height: 30,
    paddingHorizontal: 5,
    backgroundColor: COLORS.white,
    borderRadius: 5,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  showCardNumberText: {
    paddingHorizontal: 5,
    fontSize: 12,
    fontWeight: "bold",
    color: COLORS.primaryGreen,
  },
  slidingUpPanelStyle: {
    flex: 1,
    padding: SIZES.padding,
    marginTop: 50,
    backgroundColor: COLORS.white,
    borderTopLeftRadius: SIZES.radius,
    borderTopRightRadius: SIZES.radius,
  },
  slideupContent: {
    marginTop: 150,
  },
  spendingLimitWrapper: {
    paddingHorizontal: 5,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  bottomTabSectionStyle: {
    justifyContent: "flex-end",
  },
});
