import { Image, StyleSheet, View } from 'react-native'
import React,{useEffect} from 'react'
import { COLORS, icons } from '../styles'

import { DEBIT_CARD_SCREEN } from '../constants/ScreenNames'

const SplashScreen = ({navigation}) => {
    useEffect(()=>{
        setTimeout(()=>{
            navigation.reset({
              index: 0,
              routes: [{ name: DEBIT_CARD_SCREEN }],
            });
          },3000)
    },[])
  return (
    <View style={styles.container}>
          <Image style={{ height:80,width:80}}  resizeMode="cover" source={require('../assets/icons/HomeLarge.png')}/>
    </View>
  )
}

export default SplashScreen

const styles = StyleSheet.create({
    container:{flex:1,backgroundColor:COLORS.primaryBlue,justifyContent:"center", alignItems:"center"}
})