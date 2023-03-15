import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { COLORS } from '../../styles/index';

const Bar = ({ progress }) => {
  // const amountSpent = useSelector(selectAmountSpent) ||100
  // const weeklyLimit = useSelector(selectSpendingLimit) || 200
  // const percentage = Math.floor(amountSpent * 100 / weeklyLimit)

  return (
    <View>
          <View style={styles.topBar}>
    </View>
       <View style={[styles.innerBar,{width: `${80}%`,}]}></View>
    </View>

  );
};

const styles = StyleSheet.create({
  topBar:{width:"100%", borderWidth:10,borderRadius:10,borderColor:COLORS.secondaryGreen},
  innerBar:{position:'absolute', borderWidth:10, borderBottomRightRadius:19, borderTopRightRadius:0,borderBottomLeftRadius:10,borderTopLeftRadius:10,borderColor:COLORS.lightGreen}
});

export default Bar;
