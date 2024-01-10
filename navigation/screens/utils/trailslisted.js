import React from "react";
import { Text, View, StyleSheet, TouchableWithoutFeedback } from "react-native";
import { parse } from "node-html-parser";
import { FontAwesome, MaterialCommunityIcons } from "@expo/vector-icons";

export default class TrailsListed extends React.Component {
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
          array3.push({
            name: root.querySelector(
              `.avia-table-2 > tbody:nth-child(1) > tr:nth-child(${i}) > td:nth-child(1)`
            ).childNodes[0].rawText,
            status: root.querySelector(
              `.avia-table-2 > tbody:nth-child(1) > tr:nth-child(${i}) > td:nth-child(2)`
            ).childNodes[0].rawText,
            difficulty: 1,
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
            difficulty: 2,
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
            difficulty: 3,
          });
        }
        array3.push({
          name: root.querySelector(
            ".avia-table-5 > tbody:nth-child(1) > tr:nth-child(2) > td:nth-child(1)"
          ).childNodes[0].rawText,
          status: root.querySelector(
            ".avia-table-5 > tbody:nth-child(1) > tr:nth-child(2) > td:nth-child(2)"
          ).childNodes[0].rawText,
          difficulty: 4,
        });
        this.setState({
          trailArray: array3.map((trail) => {
            return {
              ...trail,
              name: trail.name.replace("&#8217;", "'"),
            };
          }),
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }
  render() {
    return (
      <View>
        {this.state.trailArray.map((trail) => {
          let iconName;
          if (trail.difficulty === 1) {
            iconName = (
              <FontAwesome name={"circle"} color={"#008000"} size={25} />
            );
          } else if (trail.difficulty === 2) {
            iconName = (
              <FontAwesome name={"square"} color={"#0000FF"} size={25} />
            );
          } else if (trail.difficulty === 3) {
            iconName = (
              <MaterialCommunityIcons
                name={"cards-diamond"}
                color={"#000000"}
                size={25}
              />
            );
          } else if (trail.difficulty === 4) {
            iconName = (
              <MaterialCommunityIcons
                name={"cards-diamond"}
                color={"#000000"}
                size={25}
              />
            ) && (
              <MaterialCommunityIcons
                name={"cards-diamond"}
                color={"#000000"}
                size={25}
              />
            );
          }

          let iconName2;
          if (trail.status === "OPEN") {
            iconName2 = (
              <FontAwesome name="check" color={"#008000"} size={25} />
            );
          } else if (trail.status === "CLOSED") {
            iconName2 = (
              <FontAwesome name="times" color={"#ff0000"} size={25} />
            );
          }
          return (
            <View key={trail.name} style={styles.liftAndTrail}>
              <View style={styles.difficultybox}>
                <Text>{iconName}</Text>
              </View>
              <View style={styles.conditionsBox}>
                <Text style={styles.conditionText}>{trail.name}</Text>
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
    borderBottomColor: "#d3d3d3",
    borderBottomWidth: "1px",
  },
  conditionsBox: {
    width: "70%",
  },
  conditionText: {
    color: "#264653",
    fontSize: 20,
    textAlign: "left",
    fontWeight: "bold",
  },
  trailBox: {
    width: "20%",
  },
  statusbox: {
    textAlign: "right",
    fontSize: 20,
  },
  difficultybox: {
    width: "10%",
  },
});
