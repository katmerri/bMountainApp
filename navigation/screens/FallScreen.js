import React from "react";
import { View, Text, Image, ScrollView, StyleSheet } from "react-native";
import FallLogo from "./images/Fall-Sky-Ride-Logo-2024.png";

export default function FallScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <ScrollView>
        <View>
          <Image
            source={require("./images/Fall-Sky-Ride-Logo-2024.png")}
            style={styles.fallLogo}
          />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0,
    justifyContent: "top",
    alignItems: "center",
  },
  fallLogo: {
    resizeMode: "contain",
    width: 300,
  },
});
