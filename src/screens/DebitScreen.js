import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Animated,
  TouchableOpacity,
  StatusBar,
} from "react-native";
import { COLORS, PLATFORM, icons, SIZES } from "../constants";
import React, { useState } from "react";
import SlidingUpPanel from "rn-sliding-up-panel";
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
} from "../redux/userSlice";
import Bar from "../components/debitScreen/Bar";
import { SvgShow, SvgRemove } from "../assets/svgs";

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

  const renderSlidingPanelContent = React.useCallback(
    () => (
      <View style={styles.slidingUpPanelStyle}>
        <View style={styles.slideupContent}>
          {spendingLimit && (
            <>
              <View style={styles.spendingLimitWrapper}>
                <Text style={{ fontSize: 12 }}>Debit card spending limit</Text>
                <Text style={{ color: COLORS.gray, fontSize: 12 }}>
                  <Text
                    style={{ color: COLORS.primaryGreen, fontWeight: "bold" }}
                  >
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
                <Bar amountSpent={amountSpent} weeklyLimit={spendingLimit} />
              </View>
            </>
          )}
          <SlidingPaneListItem spendingLimit={spendingLimit} />
        </View>
      </View>
    ),
    [amountSpent, spendingLimit]
  );

  const renderHeader = React.useCallback(
    () => (
      <>
        <Header showBack={false} />
      </>
    ),
    []
  );

  return (
    <View style={styles.container}>
      <SafeAreaView>{renderHeader()}</SafeAreaView>
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
      {/* <SlidingUpPanel
        showBackdrop={false}
        height={SIZES.height}
        animatedValue={new Animated.Value(SIZES.height / 1.5)}
        backdropOpacity={0}
        draggableRange={draggableRange}
        friction={0.9}
      ></SlidingUpPanel> */}
    </View>
  );
};

export default DebitScreen;
