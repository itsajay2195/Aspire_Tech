import React, { useRef } from 'react';
import { StyleSheet, View, Text, PanResponder, Animated } from 'react-native';

const Panel = () => {
  const height = useRef(new Animated.Value(200)).current;
  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: (evt, gestureState) => true,
      onPanResponderMove: (evt, gestureState) => {
        const { dy } = gestureState;
        if (dy < 0) {
          height.setValue(200 - dy);
        } else if (dy > 0 && height._value > 200 && height._value < 400) {
          height.setValue(200 - dy);
        }
      },
      onPanResponderRelease: (evt, gestureState) => {
        const { dy } = gestureState;
        if (dy < -100 && height._value !== 400) {
          Animated.timing(height, {
            toValue: 400,
            duration: 300,
            useNativeDriver: false,
          }).start();
        } else {
          Animated.timing(height, {
            toValue: 200,
            duration: 300,
            useNativeDriver: false,
          }).start();
        }
      },
    })
  ).current;

  return (
    <Animated.View style={[styles.panel, { height }]} {...panResponder.panHandlers}>
      {/* <View style={styles.panelHeader} >
        <Text>Slide up to increase height</Text>
      </View> */}
      <View style={styles.panelContent}>
        <Text>Panel Content</Text>
      </View>
    </Animated.View>
  );
};

const App = () => {
  return (
    <View style={styles.container}>
      <Panel />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
  },
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
  panelHeader: {
    padding: 20,
    alignItems: 'center',
  },
  panelContent: {
    padding: 20,
    backgroundColor: '#f4f4f4',
  },
});

export default App;
