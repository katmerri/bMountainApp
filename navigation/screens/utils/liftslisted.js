import React from "react";
import { Text, View, StyleSheet, TouchableWithoutFeedback } from "react-native";
import { parse } from "node-html-parser";

export default class LiftsListed extends React.Component {
  state = {
    array: [],
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

        this.setState({
          array: array2,
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }
  render() {
    return (
      <View>
        {this.state.array.map((lift) => {
          return (
            <Text key={lift.name} style={styles.conditionText}>
              {lift.name}: {lift.status}
            </Text>
          );
        })}
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
