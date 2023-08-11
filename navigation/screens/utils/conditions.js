import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { parse } from "node-html-parser";

export default class Conditions extends React.Component {
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

        this.setState({
          array: array,
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }
  render() {
    return (
      <View>
        <View>
          <Text>
            {this.state.array.filter((lift) => lift.status === "OPEN").length}/
            {this.state.array.length}
          </Text>
        </View>
      </View>
    );
  }
}
