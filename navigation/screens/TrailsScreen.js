import React from "react";
import { View, Text, ScrollView } from "react-native";
import TrailsListed from "./utils/trailslisted";

export default function TrailsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <ScrollView>
        <Text>
          <TrailsListed />
        </Text>
      </ScrollView>
    </View>
  );
}
