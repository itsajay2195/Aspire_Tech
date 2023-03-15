import React, { useRef } from 'react';
import { StyleSheet, View, Text, PanResponder, Animated } from 'react-native';

const SlidingUpPanel = ({ viewHeight, children }) => {
  const height = useRef(new Animated.Value(viewHeight)).current;
  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: (evt, gestureState) => true,
      // onPanResponderMove: (evt, gestureState) => {
      //   const { dy } = gestureState;
      //   if (dy < 0) {
      //     height.setValue(viewHeight - dy);
      //   } else if (dy > 0 && height._value > viewHeight && height._value < viewHeight + 200) {
      //     height.setValue(viewHeight - dy);
      //   }
      // },
      onPanResponderMove: (evt, gestureState) => {
        const { dy } = gestureState;
        const newHeight = height._value - dy;
        if (newHeight >= viewHeight && newHeight <= viewHeight + 300) {
          height.setValue(newHeight);
        } else if (newHeight < viewHeight) {
          height.setValue(viewHeight);
        } else {
          height.setValue(viewHeight + 300);
        }
      },
      onPanResponderRelease: (evt, gestureState) => {
        const { dy } = gestureState;
        if (dy < -100 && height._value !== viewHeight + 100) {
          Animated.timing(height, {
            toValue: viewHeight + 200,
            duration: 100,
            useNativeDriver: false,
          }).start();
        } else {
          Animated.timing(height, {
            toValue: viewHeight,
            duration: 50,
            useNativeDriver: false,
          }).start();
        }
      },
    })
  ).current;

  return (
    <Animated.View style={[styles.panel, { height }]} {...panResponder.panHandlers}>
      {children}
    </Animated.View>
  );
};

export default SlidingUpPanel;

const styles = StyleSheet.create({
  panel: {
    backgroundColor: '#fff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: -3,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
});
