import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { COLORS } from '../../styles/index';
import { useSelector } from 'react-redux';
import { selectAmountSpent, selectSpendingLimit } from '../../redux/selectors/userSelectors';

const Bar = ({ progress }) => {
  const amountSpent = useSelector(selectAmountSpent) ||100
  const weeklyLimit = useSelector(selectSpendingLimit) || 200
  const percentage = Math.floor(amountSpent * 100 / weeklyLimit)

  return (
   
    <View style={styles.container}>
    <View style={[styles.filler, { backgroundColor: COLORS.primaryGreen, width: `${percentage}%` }]} />
  </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.secondaryGreen,
    borderRadius: 5,
    overflow: 'hidden',
    height: 15, width: "100%" 
  },
  filler: {
    height: '100%',
    borderRadius: 5,
  }
});
export default Bar;
