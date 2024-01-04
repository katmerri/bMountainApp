import React from "react";
import { View, Text, ScrollView } from "react-native";
import LiftsListed from "./utils/liftslisted";

export default function LiftsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <ScrollView>
        <Text>
          <LiftsListed />
        </Text>
      </ScrollView>
    </View>
  );
}
