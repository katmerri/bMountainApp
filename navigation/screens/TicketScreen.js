import React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";

export default function TicketsPage({ navigation }) {
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.contentview}>
          <Text style={styles.text1}>TICKETS</Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0,
    padding: 0,
  },
  contentview: {
    alignItems: "center",
  },
  text1: {
    color: "#264653",
    fontFamily: "Helvetica",
    fontSize: 42,
    fontWeight: "bold",
  },
  text2: {
    color: "#e76f51",
    fontSize: 28,
    fontWeight: "bold",
    fontFamily: "Helvetica",
  },
  buttontext: {
    color: "#ffffff",
    textAlign: "center",
    fontSize: 18,
  },
  button1: {
    backgroundColor: "#70503d",
    borderRadius: 5,
    marginVertical: 10,
    paddingVertical: 20,
    width: 225,
  },
});
