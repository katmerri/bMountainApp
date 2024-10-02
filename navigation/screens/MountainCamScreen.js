import React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";

export default function MountainCamScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <ScrollView>
        <View>
          <Text>Mountain Cams</Text>
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
});
