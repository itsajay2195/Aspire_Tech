import React, { useRef, useState } from "react";
import {
  View,
  StyleSheet,
  PanResponder,
  Animated,
  Dimensions,
} from "react-native";

const BottomSheet = ({ viewHeight, children }) => {
  const { height: componentHeight } = Dimensions.get("window");
  const MIN_HEIGHT = componentHeight / 1.6;
  const MAX_HEIGHT = viewHeight * 1.5;
  const [height, setHeight] = useState(componentHeight / 1.6);
  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderMove: (_, gestureState) => {
        const newHeight = height - gestureState.dy;
        if (newHeight >= MIN_HEIGHT && newHeight <= MAX_HEIGHT) {
          setHeight(newHeight);
        }
      },
    })
  ).current;

  return (
    <View style={styles.container}>
      <View style={styles.handle} />
      <Animated.View
        style={[styles.content, { height }]}
        {...panResponder.panHandlers}
      >
        {children}
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  handle: {
    width: 50,
    height: 5,
    borderRadius: 5,
    backgroundColor: "#ccc",
    marginBottom: 10,
  },
  content: {
    backgroundColor: "#fff",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    width: "100%",
    padding: 20,
  },
});

export default BottomSheet;
