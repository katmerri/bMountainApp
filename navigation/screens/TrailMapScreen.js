import React, { useRef } from "react";
import {
  View,
  Text,
  Image,
  Animated,
  PanResponder,
  Dimensions,
  ScrollView,
  StyleSheet,
} from "react-native";
import DraggableMap from "./utils/map";

export default function TrailMapScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <ScrollView>
        <Image source={require("./images/BMTrailsMap.jpg")} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  trailmap: {
    width: "100%",
    height: "100%",
  },
});
