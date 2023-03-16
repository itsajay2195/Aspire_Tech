import { StyleSheet, Text, View, SafeAreaView, StatusBar, Image, TextInput, Alert, ScrollView } from 'react-native'
import React, { useState } from 'react'
import Header from '../components/common/Header'
import CurrencyCard from '../components/common/CurrencyCard'
import Tags from '../components/weeklyLimitScreen/Tags'
import { useSelector, useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native'
import { selectUserInfo } from '../redux/selectors/userSelectors'
import { COLORS, PLATFORM, SIZES, icons} from '../styles'
import PrimaryButton from '../components/common/PrimaryButton'
import { setWeeklySpendingLimitAction } from '../redux/actions/UserActions'


const WeeklyLimit = ({navigation}) => {
  const [limitFieldValue, onLimitFieldValueChange] = useState("")//selectSpendingLimit)?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","
  const userInfo = useSelector(selectUserInfo);
  const dispatch = useDispatch();
  const saveSpendingLimit = () => {

    let num = parseFloat(limitFieldValue.replace(',', ''))//  this is basically done to check if the user inputted number is less than 0 or not
    if (num < 0) {
      Alert.alert('Amount cannot be less than Zero')
      return
    }

    if (typeof (num) !== 'number' || null) {
      Alert.alert('Invalid input')
      return
    }

    let decimalStrippedValue = limitFieldValue.includes(".") ? parseFloat(limitFieldValue.split(".")[0].replace(',', '')) : num // this will strip the contents after the decimal point

    if (userInfo?.card_info?.available_balance < decimalStrippedValue) {
      Alert.alert('Insufficeint balance')
      return
    }
 
    let postRequestData={limitValue:num,weeklyLimitEnabled:true}
    dispatch(setWeeklySpendingLimitAction(postRequestData))
   
    // navigation.navigate('Debit Card')
  }

  return (
    <View style={styles.container}>

      <SafeAreaView >
        <Header showBack={true}></Header>
      </SafeAreaView>

      <View style={styles.headingWrapper}>
        <Text style={styles.headingText} > Spending Limit</Text>
      </View>
      <View style={styles.panel}>

        <View style={styles.panelHeader}>
          <Image source={icons.limit} style={styles.panelHeaderImageStyle} />
          <Text style={{ left: 10 }}>Set a weekly debit card spending limit</Text>
        </View>

        <View style={styles.currenyLimitContainer}>
          <CurrencyCard />
          <TextInput style={{ paddingHorizontal: SIZES.padding, fontWeight: 'bold', width: '100%' }} value={limitFieldValue} onChangeText={(text) => onLimitFieldValueChange(text)} />
        </View>

        <View style={styles.line} />

        <View>
          <Text style={{ color: COLORS.gray, fontSize: 12 }} numberOfLines={2}>Here weekly means the last 7 days- not the calendar week</Text>
        </View>

        <View style={styles.tagsContainer}>
          <Tags setLimitFieldValue={onLimitFieldValueChange} />
        </View>

      </View>

      <SafeAreaView style={styles.saveButtonContainer}>

        <PrimaryButton isDisabled={!limitFieldValue} height={60} width="80%" onPress={saveSpendingLimit} btnText={"Save"} />

      </SafeAreaView>
    </View>

  )
}

export default WeeklyLimit

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primaryBlue,
    paddingTop: PLATFORM === "android" ? StatusBar.currentHeight : 0
  },
  panel: {
    flex: 4,
    backgroundColor: COLORS.white,
    borderTopStartRadius: 20,
    borderTopEndRadius: 20,
    padding: SIZES.padding
  },

  headingWrapper: {
    padding: SIZES.padding
  },
  headingText: {
    fontSize: SIZES.h2,
    fontWeight: 'bold',
    color: COLORS.white,
  },
  panelHeader: {
    flexDirection: 'row'
  },
  line: {
    borderBottomWidth: PLATFORM === 'ios' ? 0.3 : 0.5,
    borderBottomColor: 'gray',
    marginBottom: 10
  },
  currenyLimitContainer: {
    flexDirection: 'row',
    paddingVertical: 15,
  },
  tagsContainer: {
    paddingVertical: SIZES.padding,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  saveButtonContainer: {
    backgroundColor: 'white',
    justifyContent: 'flex-end',
    paddingBottom: PLATFORM === "android" ? StatusBar.currentHeight : 0
  },

  saveText: { color: COLORS.white, fontSize: SIZES.h3, fontWeight: 'bold' },
  panelHeaderImageStyle:{ height: 15, width: 15 }

})