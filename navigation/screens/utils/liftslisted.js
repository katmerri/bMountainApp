import React from "react";
import { Text, View, StyleSheet, TouchableWithoutFeedback } from "react-native";
import { parse } from "node-html-parser";
import { FontAwesome } from "@expo/vector-icons";

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
        for (let i = 2; i <= 8; i++) {
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
          let iconName2;
          if (lift.status === "OPEN") {
            iconName2 = (
              <FontAwesome name="check" color={"#008000"} size={25} />
            );
          } else if (lift.status === "CLOSED") {
            iconName2 = (
              <FontAwesome name="times" color={"#ff0000"} size={25} />
            );
          }
          return (
            <View key={lift.name} style={styles.liftAndTrail}>
              <View style={styles.conditionsBox}>
                <Text style={styles.conditionText}>{lift.name}</Text>
              </View>
              <View style={styles.trailBox}>
                <Text style={styles.statusbox}>{iconName2}</Text>
              </View>
            </View>
          );
        })}
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
    borderBottomWidth: "1px",
    borderBottomColor: "#d3d3d3",
  },
  conditionsBox: {
    width: "75%",
  },
  conditionText: {
    color: "#264653",
    fontSize: 20,
    textAlign: "left",
    fontWeight: "bold",
  },
  trailBox: {
    width: "25%",
  },
  statusbox: {
    textAlign: "right",
    fontSize: 20,
  },
});
