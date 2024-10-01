import React from "react";
import { View, Text, ScrollView } from "react-native";

export default function FallScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <ScrollView>
        <Text>Fall</Text>
      </ScrollView>
    </View>
  );
}
