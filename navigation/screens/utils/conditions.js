import React from "react";
import { Text, View, StyleSheet, TouchableWithoutFeedback } from "react-native";
import { parse } from "node-html-parser";
import LiftsScreen from "../LiftsScreen";

export default class Conditions extends React.Component {
  state = {
    array: [],
    trailArray: [],
  };

  componentDidMount() {
    fetch("https://www.bristolmountain.com/conditions/", {
      method: "GET",
    })
      .then((response) => response.text())
      .then((text) => {
        const root = parse(text);
        const array2 = [];
        for (let i = 2; i <= 7; i++) {
          array2.push({
            name: root.querySelector(
              `.avia-table-1 > tbody:nth-child(1) > tr:nth-child(${i}) > td:nth-child(1)`
            ).childNodes[0].rawText,
            status: root.querySelector(
              `.avia-table-1 > tbody:nth-child(1) > tr:nth-child(${i}) > td:nth-child(2)`
            ).childNodes[0].rawText,
          });
        }

        const array3 = [];
        for (let i = 2; i <= 13; i++) {
          array3.push({
            name: root.querySelector(
              `.avia-table-2 > tbody:nth-child(1) > tr:nth-child(${i}) > td:nth-child(1)`
            ).childNodes[0].rawText,
            status: root.querySelector(
              `.avia-table-2 > tbody:nth-child(1) > tr:nth-child(${i}) > td:nth-child(2)`
            ).childNodes[0].rawText,
          });
        }
        for (let i = 2; i <= 23; i++) {
          array3.push({
            name: root.querySelector(
              `.avia-table-3 > tbody:nth-child(1) > tr:nth-child(${i}) > td:nth-child(1)`
            ).childNodes[0].rawText,
            status: root.querySelector(
              `.avia-table-3 > tbody:nth-child(1) > tr:nth-child(${i}) > td:nth-child(2)`
            ).childNodes[0].rawText,
          });
        }
        for (let i = 2; i <= 5; i++) {
          array3.push({
            name: root.querySelector(
              `.avia-table-4 > tbody:nth-child(1) > tr:nth-child(${i}) > td:nth-child(1)`
            ).childNodes[0].rawText,
            status: root.querySelector(
              `.avia-table-4 > tbody:nth-child(1) > tr:nth-child(${i}) > td:nth-child(2)`
            ).childNodes[0].rawText,
          });
        }
        array3.push({
          name: root.querySelector(
            ".avia-table-5 > tbody:nth-child(1) > tr:nth-child(2) > td:nth-child(1)"
          ).childNodes[0].rawText,
          status: root.querySelector(
            ".avia-table-5 > tbody:nth-child(1) > tr:nth-child(2) > td:nth-child(2)"
          ).childNodes[0].rawText,
        });
        this.setState({
          array: array2,
          trailArray: array3,
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }
  render() {
    return (
      <View style={styles.liftAndTrail}>
        <View style={styles.conditionsBox}>
          <Text
            style={styles.conditionText}
            onPress={() => navigation.navigate("LiftsScreen")}
          >
            LIFTS
          </Text>
          <Text style={styles.conditionText}>
            {this.state.array.filter((lift) => lift.status === "OPEN").length}/
            {this.state.array.length}
          </Text>
        </View>
        <View style={styles.trailBox}>
          <Text style={styles.conditionText}>TRAILS</Text>
          <Text style={styles.conditionText}>
            {
              this.state.trailArray.filter((trail) => trail.status === "OPEN")
                .length
            }
            /{this.state.trailArray.length}
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  liftAndTrail: {
    flex: 0,
    flexDirection: "row",
    flexWrap: "wrap",
    width: "100%",
    padding: 5,
  },
  conditionsBox: {
    width: "50%",
  },
  conditionText: {
    color: "#264653",
    fontSize: 20,
    textAlign: "center",
    fontWeight: "bold",
  },
  trailBox: {
    width: "50%",
  },
});
