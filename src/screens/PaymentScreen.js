import { StyleSheet, Text, View, StatusBar, FlatList, ActivityIndicator } from "react-native";
import React, { useEffect } from "react";
import { COLORS, PLATFORM, SIZES } from "../styles";
import Header from "../components/common/Header";
import { SvgAccount } from "../assets/svg/svg";
import { useDispatch,useSelector } from "react-redux";
import { selectUserInfo, selectUserPayments } from "../redux/selectors/userSelectors";
import { setUserPaymentInfoRequest } from "../redux/actions/UserActions";

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
  
        <View
          style={styles.listItemWrapper}
        >
          <View>
            <Text style={styles.listItemDescriptionStyle}>{description}</Text>
            <Text style={styles.listitemTransactionTextStyle}>
              {transactedAt}
            </Text>
          </View>

          <View>
            <Text  style={[styles.listItemDenominationStyle,{color}]}>{transactionType === 'dr' ? "-" : null} {amount} {denomination}</Text>
          </View>
        </View>

    );
  }
  if(item.type === "heading"){
    let date = item.value;
    let today = new Date().toISOString().slice(0, 10);
    return(<Text style={styles.flatListHeadingText}>{date ===today ? "Today" : date}</Text>
    )
  }
};

const PaymentScreen = () => {
  const userInfo = useSelector(selectUserInfo);
  const { card_info: { card_holder },denomination:units } = userInfo;
  const payments = useSelector(selectUserPayments);
  const dispatch = useDispatch();
  denomination =units;

  useEffect(()=>{
    setTimeout(()=>{
      dispatch(setUserPaymentInfoRequest())
    },2000)
  },[dispatch])
  return (
    <View style={styles.container}>
      <Header showBack={true} />
      <View style={styles.userInfoContainer}>
        <View style={styles.profileIconWrapper}>
          <SvgAccount color={COLORS.gray} />
        </View>

        <View>
          <Text numberOfLines={1} style={styles.userNameTextStyle}> Hello, {card_holder? card_holder: ""}{"\n"}</Text>
        </View>
      </View>

      <View
        style={styles.contentContainer}
      >
        <View >
          <Text style={styles.transactions}>Transactions</Text>
        </View>
        {payments?<FlatList
          data={DATA}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item,index) => `{${item.type} ${index}`}
          renderItem={renderItem}
        />:<View style={styles.activityIndicatorContainerStyle}><ActivityIndicator color={COLORS.primaryBlue} size={"large"}/></View>}
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
  activityIndicatorContainerStyle:{flex:1, justifyContent:'center',alignItems:'center'},
  transactions:{padding:8,fontWeight:'bold', fontSize:SIZES.h2},
  contentContainer:{
    flex: 1,
    backgroundColor: COLORS.primaryGreen,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
  },
  listItemWrapper:{
    marginVertical:10,
    padding: 20,
    backgroundColor: COLORS.secondaryGreen,
    borderRadius: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  listItemDescriptionStyle:{ fontSize: 14, fontWeight: "bold" },
  listitemTransactionTextStyle:{ fontWeight: "bold", color: COLORS.gray },
  listItemDenominationStyle:{fontWeight:"bold"},
  flatListHeadingText:{padding:10,fontWeight:'bold',fontSize:SIZES.h3,color:COLORS.gray}
});
