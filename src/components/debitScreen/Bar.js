import React, { useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { COLORS } from '../../constants'
import { useSelector } from 'react-redux';
import { selectAmountSpent,selectSpendingLimit } from '../../redux/userSlice'

const Bar = () => {
  
  const amountSpent = useSelector(selectAmountSpent)
  const weeklyLimit = useSelector(selectSpendingLimit)
  const percentage = Math.floor(amountSpent * 100 / weeklyLimit)


  return (
    <View >
      <View style={styles.triangleCornerLayer}></View>
      <View style={[styles.triangleCorner1,{width: `${percentage}%`,}]}></View>

    </View>
  );

}

export default Bar

const styles = StyleSheet.create({
  triangleCorner1: {


    left: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderRightWidth: 10,
    borderTopWidth: 20,
    borderRightColor: 'transparent',
    borderTopColor: COLORS.lightGreen,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10
  }, triangleCornerLayer: {
    position: 'absolute',
    left: 0,
    width: '100%',
    borderStyle: 'solid',
    borderRightWidth: 0,
    borderTopWidth: 20,
    borderRightColor: 'transparent',
    borderTopColor: COLORS.secondaryGreen,
    borderBottomRightRadius: 10,
    borderTopRightRadius: 10


  }
});
