import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { COLORS } from '../../styles/index';

const Bar = ({ progress }) => {
  // const amountSpent = useSelector(selectAmountSpent) ||100
  // const weeklyLimit = useSelector(selectSpendingLimit) || 200
  // const percentage = Math.floor(amountSpent * 100 / weeklyLimit)

  return (
   
    <View style={[styles.container, { height: 15, width: "100%" }]}>
    <View style={[styles.filler, { backgroundColor: COLORS.primaryGreen, width: `${80}%` }]} />
  </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.secondaryGreen,
    borderRadius: 5,
    overflow: 'hidden'
  },
  filler: {
    height: '100%',
    borderRadius: 5,
  }
});
export default Bar;
