import React from "react";
import { View, Text } from "react-native";
import LiftsListed from "./utils/liftslisted";

export default function LiftsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>
        <LiftsListed />
      </Text>
    </View>
  );
}
