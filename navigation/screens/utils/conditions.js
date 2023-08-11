import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { parse } from "node-html-parser";

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
        const array = [
          {
            name: root.querySelector(
              ".avia-table-1 > tbody:nth-child(1) > tr:nth-child(2) > td:nth-child(1)"
            ).childNodes[0].rawText,
            status: root.querySelector(
              ".avia-table-1 > tbody:nth-child(1) > tr:nth-child(2) > td:nth-child(2)"
            ).childNodes[0].rawText,
          },
          {
            name: root.querySelector(
              ".avia-table-1 > tbody:nth-child(1) > tr:nth-child(3) > td:nth-child(1)"
            ).childNodes[0].rawText,
            status: root.querySelector(
              ".avia-table-1 > tbody:nth-child(1) > tr:nth-child(3) > td:nth-child(2)"
            ).childNodes[0].rawText,
          },
          {
            name: root.querySelector(
              ".avia-table-1 > tbody:nth-child(1) > tr:nth-child(4) > td:nth-child(1)"
            ).childNodes[0].rawText,
            status: root.querySelector(
              ".avia-table-1 > tbody:nth-child(1) > tr:nth-child(4) > td:nth-child(2)"
            ).childNodes[0].rawText,
          },
          {
            name: root.querySelector(
              ".avia-table-1 > tbody:nth-child(1) > tr:nth-child(5) > td:nth-child(1)"
            ).childNodes[0].rawText,
            status: root.querySelector(
              ".avia-table-1 > tbody:nth-child(1) > tr:nth-child(5) > td:nth-child(2)"
            ).childNodes[0].rawText,
          },
          {
            name: root.querySelector(
              ".avia-table-1 > tbody:nth-child(1) > tr:nth-child(6) > td:nth-child(1)"
            ).childNodes[0].rawText,
            status: root.querySelector(
              ".avia-table-1 > tbody:nth-child(1) > tr:nth-child(6) > td:nth-child(2)"
            ).childNodes[0].rawText,
          },
          {
            name: root.querySelector(
              ".avia-table-1 > tbody:nth-child(1) > tr:nth-child(7) > td:nth-child(1)"
            ).childNodes[0].rawText,
            status: root.querySelector(
              ".avia-table-1 > tbody:nth-child(1) > tr:nth-child(7) > td:nth-child(2)"
            ).childNodes[0].rawText,
          },
        ];

        const trailArray = [
          {
            name: root.querySelector(
              ".avia-table-2 > tbody:nth-child(1) > tr:nth-child(2) > td:nth-child(1)"
            ).childNodes[0].rawText,
            status: root.querySelector(
              ".avia-table-2 > tbody:nth-child(1) > tr:nth-child(2) > td:nth-child(2)"
            ).childNodes[0].rawText,
          },
          {
            name: root.querySelector(
              ".avia-table-2 > tbody:nth-child(1) > tr:nth-child(3) > td:nth-child(1)"
            ).childNodes[0].rawText,
            status: root.querySelector(
              ".avia-table-2 > tbody:nth-child(1) > tr:nth-child(3) > td:nth-child(2)"
            ).childNodes[0].rawText,
          },
          {
            name: root.querySelector(
              ".avia-table-2 > tbody:nth-child(1) > tr:nth-child(4) > td:nth-child(1)"
            ).childNodes[0].rawText,
            status: root.querySelector(
              ".avia-table-2 > tbody:nth-child(1) > tr:nth-child(4) > td:nth-child(2)"
            ).childNodes[0].rawText,
          },
          {
            name: root.querySelector(
              ".avia-table-2 > tbody:nth-child(1) > tr:nth-child(5) > td:nth-child(1)"
            ).childNodes[0].rawText,
            status: root.querySelector(
              ".avia-table-2 > tbody:nth-child(1) > tr:nth-child(5) > td:nth-child(2)"
            ).childNodes[0].rawText,
          },
          {
            name: root.querySelector(
              ".avia-table-2 > tbody:nth-child(1) > tr:nth-child(6) > td:nth-child(1)"
            ).childNodes[0].rawText,
            status: root.querySelector(
              ".avia-table-2 > tbody:nth-child(1) > tr:nth-child(6) > td:nth-child(2)"
            ).childNodes[0].rawText,
          },
          {
            name: root.querySelector(
              ".avia-table-2 > tbody:nth-child(1) > tr:nth-child(7) > td:nth-child(1)"
            ).childNodes[0].rawText,
            status: root.querySelector(
              ".avia-table-2 > tbody:nth-child(1) > tr:nth-child(7) > td:nth-child(2)"
            ).childNodes[0].rawText,
          },
          {
            name: root.querySelector(
              ".avia-table-2 > tbody:nth-child(1) > tr:nth-child(8) > td:nth-child(1)"
            ).childNodes[0].rawText,
            status: root.querySelector(
              ".avia-table-2 > tbody:nth-child(1) > tr:nth-child(8) > td:nth-child(2)"
            ).childNodes[0].rawText,
          },
          {
            name: root.querySelector(
              ".avia-table-2 > tbody:nth-child(1) > tr:nth-child(9) > td:nth-child(1)"
            ).childNodes[0].rawText,
            status: root.querySelector(
              ".avia-table-2 > tbody:nth-child(1) > tr:nth-child(9) > td:nth-child(2)"
            ).childNodes[0].rawText,
          },
          {
            name: root.querySelector(
              ".avia-table-2 > tbody:nth-child(1) > tr:nth-child(10) > td:nth-child(1)"
            ).childNodes[0].rawText,
            status: root.querySelector(
              ".avia-table-2 > tbody:nth-child(1) > tr:nth-child(10) > td:nth-child(2)"
            ).childNodes[0].rawText,
          },
          {
            name: root.querySelector(
              ".avia-table-2 > tbody:nth-child(1) > tr:nth-child(11) > td:nth-child(1)"
            ).childNodes[0].rawText,
            status: root.querySelector(
              ".avia-table-2 > tbody:nth-child(1) > tr:nth-child(11) > td:nth-child(2)"
            ).childNodes[0].rawText,
          },
          {
            name: root.querySelector(
              ".avia-table-2 > tbody:nth-child(1) > tr:nth-child(12) > td:nth-child(1)"
            ).childNodes[0].rawText,
            status: root.querySelector(
              ".avia-table-2 > tbody:nth-child(1) > tr:nth-child(12) > td:nth-child(2)"
            ).childNodes[0].rawText,
          },
          {
            name: root.querySelector(
              ".avia-table-2 > tbody:nth-child(1) > tr:nth-child(13) > td:nth-child(1)"
            ).childNodes[0].rawText,
            status: root.querySelector(
              ".avia-table-2 > tbody:nth-child(1) > tr:nth-child(13) > td:nth-child(2)"
            ).childNodes[0].rawText,
          },
          {
            name: root.querySelector(
              ".avia-table-3 > tbody:nth-child(1) > tr:nth-child(2) > td:nth-child(1)"
            ).childNodes[0].rawText,
            status: root.querySelector(
              ".avia-table-3 > tbody:nth-child(1) > tr:nth-child(2) > td:nth-child(2)"
            ).childNodes[0].rawText,
          },
          {
            name: root.querySelector(
              ".avia-table-3 > tbody:nth-child(1) > tr:nth-child(3) > td:nth-child(1)"
            ).childNodes[0].rawText,
            status: root.querySelector(
              ".avia-table-3 > tbody:nth-child(1) > tr:nth-child(3) > td:nth-child(2)"
            ).childNodes[0].rawText,
          },
          {
            name: root.querySelector(
              ".avia-table-3 > tbody:nth-child(1) > tr:nth-child(4) > td:nth-child(1)"
            ).childNodes[0].rawText,
            status: root.querySelector(
              ".avia-table-3 > tbody:nth-child(1) > tr:nth-child(4) > td:nth-child(2)"
            ).childNodes[0].rawText,
          },
          {
            name: root.querySelector(
              ".avia-table-3 > tbody:nth-child(1) > tr:nth-child(5) > td:nth-child(1)"
            ).childNodes[0].rawText,
            status: root.querySelector(
              ".avia-table-3 > tbody:nth-child(1) > tr:nth-child(5) > td:nth-child(2)"
            ).childNodes[0].rawText,
          },
          {
            name: root.querySelector(
              ".avia-table-3 > tbody:nth-child(1) > tr:nth-child(6) > td:nth-child(1)"
            ).childNodes[0].rawText,
            status: root.querySelector(
              ".avia-table-3 > tbody:nth-child(1) > tr:nth-child(6) > td:nth-child(2)"
            ).childNodes[0].rawText,
          },
          {
            name: root.querySelector(
              ".avia-table-3 > tbody:nth-child(1) > tr:nth-child(7) > td:nth-child(1)"
            ).childNodes[0].rawText,
            status: root.querySelector(
              ".avia-table-3 > tbody:nth-child(1) > tr:nth-child(7) > td:nth-child(2)"
            ).childNodes[0].rawText,
          },
          {
            name: root.querySelector(
              ".avia-table-3 > tbody:nth-child(1) > tr:nth-child(8) > td:nth-child(1)"
            ).childNodes[0].rawText,
            status: root.querySelector(
              ".avia-table-3 > tbody:nth-child(1) > tr:nth-child(8) > td:nth-child(2)"
            ).childNodes[0].rawText,
          },
          {
            name: root.querySelector(
              ".avia-table-3 > tbody:nth-child(1) > tr:nth-child(9) > td:nth-child(1)"
            ).childNodes[0].rawText,
            status: root.querySelector(
              ".avia-table-3 > tbody:nth-child(1) > tr:nth-child(9) > td:nth-child(2)"
            ).childNodes[0].rawText,
          },
          {
            name: root.querySelector(
              ".avia-table-3 > tbody:nth-child(1) > tr:nth-child(10) > td:nth-child(1)"
            ).childNodes[0].rawText,
            status: root.querySelector(
              ".avia-table-3 > tbody:nth-child(1) > tr:nth-child(10) > td:nth-child(2)"
            ).childNodes[0].rawText,
          },
          {
            name: root.querySelector(
              ".avia-table-3 > tbody:nth-child(1) > tr:nth-child(11) > td:nth-child(1)"
            ).childNodes[0].rawText,
            status: root.querySelector(
              ".avia-table-3 > tbody:nth-child(1) > tr:nth-child(11) > td:nth-child(2)"
            ).childNodes[0].rawText,
          },
          {
            name: root.querySelector(
              ".avia-table-3 > tbody:nth-child(1) > tr:nth-child(12) > td:nth-child(1)"
            ).childNodes[0].rawText,
            status: root.querySelector(
              ".avia-table-3 > tbody:nth-child(1) > tr:nth-child(12) > td:nth-child(2)"
            ).childNodes[0].rawText,
          },
          {
            name: root.querySelector(
              ".avia-table-3 > tbody:nth-child(1) > tr:nth-child(13) > td:nth-child(1)"
            ).childNodes[0].rawText,
            status: root.querySelector(
              ".avia-table-3 > tbody:nth-child(1) > tr:nth-child(13) > td:nth-child(2)"
            ).childNodes[0].rawText,
          },
          {
            name: root.querySelector(
              ".avia-table-3 > tbody:nth-child(1) > tr:nth-child(14) > td:nth-child(1)"
            ).childNodes[0].rawText,
            status: root.querySelector(
              ".avia-table-3 > tbody:nth-child(1) > tr:nth-child(14) > td:nth-child(2)"
            ).childNodes[0].rawText,
          },
          {
            name: root.querySelector(
              ".avia-table-3 > tbody:nth-child(1) > tr:nth-child(15) > td:nth-child(1)"
            ).childNodes[0].rawText,
            status: root.querySelector(
              ".avia-table-3 > tbody:nth-child(1) > tr:nth-child(15) > td:nth-child(2)"
            ).childNodes[0].rawText,
          },
          {
            name: root.querySelector(
              ".avia-table-3 > tbody:nth-child(1) > tr:nth-child(16) > td:nth-child(1)"
            ).childNodes[0].rawText,
            status: root.querySelector(
              ".avia-table-3 > tbody:nth-child(1) > tr:nth-child(16) > td:nth-child(2)"
            ).childNodes[0].rawText,
          },
          {
            name: root.querySelector(
              ".avia-table-3 > tbody:nth-child(1) > tr:nth-child(17) > td:nth-child(1)"
            ).childNodes[0].rawText,
            status: root.querySelector(
              ".avia-table-3 > tbody:nth-child(1) > tr:nth-child(17) > td:nth-child(2)"
            ).childNodes[0].rawText,
          },
          {
            name: root.querySelector(
              ".avia-table-3 > tbody:nth-child(1) > tr:nth-child(18) > td:nth-child(1)"
            ).childNodes[0].rawText,
            status: root.querySelector(
              ".avia-table-3 > tbody:nth-child(1) > tr:nth-child(18) > td:nth-child(2)"
            ).childNodes[0].rawText,
          },
          {
            name: root.querySelector(
              ".avia-table-3 > tbody:nth-child(1) > tr:nth-child(19) > td:nth-child(1)"
            ).childNodes[0].rawText,
            status: root.querySelector(
              ".avia-table-3 > tbody:nth-child(1) > tr:nth-child(19) > td:nth-child(2)"
            ).childNodes[0].rawText,
          },
          {
            name: root.querySelector(
              ".avia-table-3 > tbody:nth-child(1) > tr:nth-child(20) > td:nth-child(1)"
            ).childNodes[0].rawText,
            status: root.querySelector(
              ".avia-table-3 > tbody:nth-child(1) > tr:nth-child(20) > td:nth-child(2)"
            ).childNodes[0].rawText,
          },
          {
            name: root.querySelector(
              ".avia-table-3 > tbody:nth-child(1) > tr:nth-child(21) > td:nth-child(1)"
            ).childNodes[0].rawText,
            status: root.querySelector(
              ".avia-table-3 > tbody:nth-child(1) > tr:nth-child(21) > td:nth-child(2)"
            ).childNodes[0].rawText,
          },
          {
            name: root.querySelector(
              ".avia-table-3 > tbody:nth-child(1) > tr:nth-child(22) > td:nth-child(1)"
            ).childNodes[0].rawText,
            status: root.querySelector(
              ".avia-table-3 > tbody:nth-child(1) > tr:nth-child(22) > td:nth-child(2)"
            ).childNodes[0].rawText,
          },
          {
            name: root.querySelector(
              ".avia-table-3 > tbody:nth-child(1) > tr:nth-child(23) > td:nth-child(1)"
            ).childNodes[0].rawText,
            status: root.querySelector(
              ".avia-table-3 > tbody:nth-child(1) > tr:nth-child(23) > td:nth-child(2)"
            ).childNodes[0].rawText,
          },
          {
            name: root.querySelector(
              ".avia-table-4 > tbody:nth-child(1) > tr:nth-child(2) > td:nth-child(1)"
            ).childNodes[0].rawText,
            status: root.querySelector(
              ".avia-table-4 > tbody:nth-child(1) > tr:nth-child(2) > td:nth-child(2)"
            ).childNodes[0].rawText,
          },
          {
            name: root.querySelector(
              ".avia-table-4 > tbody:nth-child(1) > tr:nth-child(3) > td:nth-child(1)"
            ).childNodes[0].rawText,
            status: root.querySelector(
              ".avia-table-4 > tbody:nth-child(1) > tr:nth-child(3) > td:nth-child(2)"
            ).childNodes[0].rawText,
          },
          {
            name: root.querySelector(
              ".avia-table-4 > tbody:nth-child(1) > tr:nth-child(4) > td:nth-child(1)"
            ).childNodes[0].rawText,
            status: root.querySelector(
              ".avia-table-4 > tbody:nth-child(1) > tr:nth-child(4) > td:nth-child(2)"
            ).childNodes[0].rawText,
          },
          {
            name: root.querySelector(
              ".avia-table-4 > tbody:nth-child(1) > tr:nth-child(5) > td:nth-child(1)"
            ).childNodes[0].rawText,
            status: root.querySelector(
              ".avia-table-4 > tbody:nth-child(1) > tr:nth-child(5) > td:nth-child(2)"
            ).childNodes[0].rawText,
          },
          {
            name: root.querySelector(
              ".avia-table-5 > tbody:nth-child(1) > tr:nth-child(2) > td:nth-child(1)"
            ).childNodes[0].rawText,
            status: root.querySelector(
              ".avia-table-5 > tbody:nth-child(1) > tr:nth-child(2) > td:nth-child(2)"
            ).childNodes[0].rawText,
          },
        ];

        this.setState({
          array: array,
          trailArray: trailArray,
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
          <Text style={styles.conditionText}>LIFTS</Text>
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
