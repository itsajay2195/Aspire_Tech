import { StyleSheet, Text, View, StatusBar, FlatList } from "react-native";
import React, { useEffect } from "react";
import { COLORS, PLATFORM, SIZES } from "../styles";
import Header from "../components/common/Header";
import { SvgAccount } from "../assets/svg/svg";
import { useDispatch,useSelector } from "react-redux";
import { selectUserInfo, selectUserPayments } from "../redux/selectors/userSelectors";
import { setUserPaymentInfoAction } from "../redux/actions/UserActions";

const DATA = [
  { type: "heading", value: "2023-03-17" },
  { type: "item", id: 1, amount: 100, description: "Taxi", transactedAt: "just now" , transactionType:"dr",color:"#FF0000"},
  { type: "item", id: 2, amount: 50, description: "Movie", transactedAt: "10:32 pm",transactionType:"cr", color:"#008000"  },
  { type: "heading", value: "2023-03-16" },
  { type: "item", id: 3, amount: 75, description: "Shopping", transactedAt: "5:08 pm",transactionType:"dr", color:"#FF0000"},
  { type: "item", id: 4, amount: 80, description: "Travel", transactedAt: "10:11 am" ,transactionType:"dr", color:"#FF0000" },
  { type: "heading", value: "2023-03-15" },
  { type: "item", id: 5, amount: 120, description: "Stationary", transactedAt: "12:39 pm", transactionType:"cr",color:"#008000"  },
  { type: "item", id: 6, amount: 60, description: "Groceries", transactedAt: "9:03 am",transactionType:"dr", color:"#FF0000" },
];

let denomination;
const renderItem = ({ item }) => {
  const{description,transactedAt, color, amount,transactionType} = item
  if (item.type === "item") {
    return (
      <View style={{marginVertical:10}}>
        <View
          style={{
            padding: 20,
            backgroundColor: COLORS.secondaryGreen,
            borderRadius: 20,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <View style={{ flex: 1 }}>
            <Text style={{ fontSize: 14, fontWeight: "bold" }}>{description}</Text>
            <Text style={{ fontWeight: "bold", color: COLORS.gray }}>
              {transactedAt}
            </Text>
          </View>

          <View>
            <Text  style={{fontWeight:"bold", color:color}}>{transactionType === 'dr' ? "-" : null} {amount} {denomination}</Text>
          </View>
        </View>
      </View>
    );
  }
};

const PaymentScreen = () => {
  const userInfo = useSelector(selectUserInfo);
  const { card_info: { card_holder },denomination:units } = userInfo;
  const payments = useSelector(selectUserPayments);
  const dispatch = useDispatch();
  console.warn(payments)

  denomination =units;

  // useEffect(()=>{
  //   dispatch(setUserPaymentInfoAction())
  // },[])
  return (
    <View style={styles.container}>
      <Header showBack={true} />
      <View style={styles.userInfoContainer}>
        <View style={styles.profileIconWrapper}>
          <SvgAccount color={COLORS.gray} />
        </View>

        <View>
          <Text numberOfLines={1} style={styles.userNameTextStyle}> Hello, {card_holder}{"\n"}</Text>
        </View>
      </View>

      <View
        style={{
          flex: 1,
          backgroundColor: COLORS.primaryGreen,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          padding: 20,
        }}
      >
        <View >
          <Text style={{padding:10,fontWeight:'bold', fontSize:SIZES.h2}}>Transactions</Text>
        </View>
        <FlatList
          data={DATA}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item,index) => `{${item.type} ${index}`}
          renderItem={renderItem}
        />
      </View>
    </View>
  );
};

export default PaymentScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primaryBlue,
    paddingTop: PLATFORM === "android" ? StatusBar.currentHeight : 0,
  },
  userInfoContainer: {
    flex: 0.2,
    padding: 10,
    flexDirection: "row-reverse",
  },
  profileIconWrapper: {
    height: 40,
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 5,
    borderColor: COLORS.white,
    borderRadius: 5,
  },
  userNameTextStyle: {
    padding: 5,
    height: 40,
    width:"100%",
    alignSelf: "center",
    flexWrap: "wrap",
    fontSize: SIZES.h2,
    color: COLORS.white,
    fontWeight: "600",
    textAlign: "center",
  },
});
