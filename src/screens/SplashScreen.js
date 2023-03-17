import { Image, StyleSheet, View } from 'react-native'
import React,{useEffect} from 'react'
import { COLORS, icons } from '../styles'
import { MAIN_TABS } from '../constants/ScreenNames'

const SplashScreen = ({navigation}) => {
    useEffect(()=>{
        setTimeout(()=>{
            navigation.reset({
              index: 0,
              routes: [{ name: MAIN_TABS }],
            });
          },1500)
    },[])
  return (
    <View style={styles.container}>
          <Image style={{ height:80,width:80}}  resizeMode="cover" source={icons.splashScreenIcon}/>
    </View>
  )
}

export default SplashScreen

const styles = StyleSheet.create({
    container:{flex:1,backgroundColor:COLORS.primaryBlue,justifyContent:"center", alignItems:"center"}
})