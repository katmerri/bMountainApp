import React from "react";
import { Text, View, StyleSheet, TouchableWithoutFeedback } from "react-native";
import { parse } from "node-html-parser";

export default class Trails extends React.Component {
  state = {
    trailArray: [],
  };

  componentDidMount() {
    fetch("https://www.bristolmountain.com/conditions/", {
      method: "GET",
    })
      .then((response) => response.text())
      .then((text) => {
        const root = parse(text);

        const array3 = [];
        for (let i = 2; i <= 13; i++) {
          console.log(
            root.querySelector(
              `.avia-table-2 > tbody:nth-child(1) > tr:nth-child(${i}) > td:nth-child(1)`
            )
          );
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
        <Text style={styles.conditionText}>
          {
            this.state.trailArray.filter((trail) => trail.status === "OPEN")
              .length
          }
          /{this.state.trailArray.length}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  conditionText: {
    color: "#264653",
    fontSize: 20,
    textAlign: "center",
    fontWeight: "bold",
  },
});
