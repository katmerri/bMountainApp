import { useRef } from "react";
import React from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Animated,
  Image,
  PanResponder,
} from "react-native";

export default function DraggableMap() {
  const pan = useRef(new Animated.ValueXY()).current;
  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: Animated.event(
      [
        null,
        {
          dx: pan.x,
          dy: pan.y,
        },
      ],
      { useNativeDriver: false }
    ),
    onPanResponderRelease: () => {
      pan.extractOffset();
    },
  });
  return (
    <View style={styles.container}>
      <Animated.Image
        {...panResponder.panHandlers}
        style={{ transform: [{ translateX: pan.x }, { translateY: pan.y }] }}
        source={require("../images/BMTrailsMap.jpg")}
      ></Animated.Image>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
  },
});
