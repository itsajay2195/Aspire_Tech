import { StyleSheet, Text, View, Image, Switch, Alert } from 'react-native'
import React from 'react'
import { icons, COLORS, SIZES } from '../../constants'
import { useNavigation } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux';
import { setAmountSpent, setSpendingLimit, selectWeeklyLimitToggled, setWeeklyLimitToggled } from '../../redux/userSlice'


const SlidingPaneList = ({ spendingLimit }) => {
  const panelMenu = [
    { id: 1, image: icons.insight, title: 'Top-up-account', meta: 'Deposit money to your account to use with card', toggle: false },
    { id: 2, image: icons.transfer, title: 'Weekly spending limit', meta: "you haven't set any spending limit on card", toggle: true, isToggled: useSelector(selectWeeklyLimitToggled) },
    { id: 3, image: icons.freeze, title: 'Freeze card', meta: 'Your Debit card is currently active', toggle: null },
    { id: 4, image: icons.newCard, title: 'Get a new card ', meta: 'This activates your current debit card', toggle: false },
    { id: 5, image: icons.deactivate, title: 'Deactivated cards', meta: 'This deactivates your current debit card', toggle: false },
  ]
  return (
    <>
      {panelMenu.map(item => <ListItem item={item} spendingLimit={spendingLimit} />)}

    </>
  )
}


export default SlidingPaneList


const ListItem = ({ item, spendingLimit }) => {
  const dispatch = useDispatch();
  const navigation = useNavigation()
  const isToggled = useSelector(selectWeeklyLimitToggled)

  const updateToggleInfo = () => {
    const url = '/api/user/1/weklylimittoggle'
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ weeklyLimitEnabled: true })
    }).then(res => {
      try {
        if (res.status !== 200) throw new Error(res.status)
        dispatch(setSpendingLimit(null))
        dispatch(setAmountSpent(0))
        dispatch(setWeeklyLimitToggled(!isToggled))

      } catch (error) {

        Alert.alert(String(error + " Something went wrong"))
      }
    })


  }


  return (
    <View style={styles.container}>

      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <Image source={item.image} style={{ height: 30, width: 30 }} />

        <View style={styles.menuInfoWrapper} >
          <Text style={{ fontWeight: '400' }}>{item.title}</Text>
          <Text style={{ color: '#b9b9b9', fontSize: 14 }} numberOfLines={2}>{item.title === 'Weekly spending limit' && spendingLimit ? `Your weekly spending limit is S$${spendingLimit}` : item.meta}</Text>
        </View>

      </View>

      <View >
        {item.toggle === null || item.toggle ?
          <Switch
            style={{ transform: [{ scaleX: .6 }, { scaleY: .6 }] }}
            trackColor={{ false: COLORS.toggleFalseTrackColor, true: COLORS.toggleTrueTrackColor }}
            thumbColor={item?.isToggled ? COLORS.white : COLORS.white}
            ios_backgroundColor={COLORS.toggleFalseTrackColor}
            onValueChange={() => {
              if (item?.isToggled) {
                Alert.alert(
                  'Weekly Limit',
                  'Are you sure that you want to turn me off? you might lose control of your cash flow',
                  [
                    {
                      text: 'Proceed', onPress: () => {
                        updateToggleInfo()

                      }
                    },
                    { text: 'Cancel' },
                  ],
                  { cancelable: false }
                )

                return;
              }
              navigation.navigate('Limit', { id: item.id, toggledValue: item?.isToggled })

            }}
            disabled={item.toggle === null ? true : false}
            value={item?.isToggled}
          /> : null
        }

      </View>


    </View>
  )
}



const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: SIZES.padding / 2
  },
  menuInfoWrapper: {
    width: '80%'
  }


})