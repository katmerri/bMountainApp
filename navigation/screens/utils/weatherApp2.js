import * as React from "react";
import { Text, View, StyleSheet } from "react-native";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { weatherCons } from "./weatherIcons";
import moment from "moment";

export default class WeatherApp extends React.Component {
  state = {
    jsonData: 0,
  };

  componentDidMount() {
    const startDate = moment(new Date()).add(-5, "m").toDate();
    const startString = startDate.toUTCString();
    const endDate = moment(startDate).add(5, "m").toDate();
    const endString = endDate.toUTCString();
    const url = `https://owc.enterprise.earthnetworks.com/Data/GetData.ashx?dt=dobs&pi=3&si=CNNDG&startdatetime=${encodeURIComponent(
      startString
    )}&enddatetime=${encodeURIComponent(endString)}&units=english`;
    console.log(url);
    fetch(url, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((json) => {
        console.log(json),
          this.setState({
            jsonData: Math.round(
              json.Result.HistoricalObservations[0].Observation.TemperatureC
                .Value
            ),
            weatherCondition:
              json.Result.HistoricalObservations[0].Observation.Light.Value,
            weatherWind:
              json.Result.HistoricalObservations[0].Observation.WindSpeedKph
                .Value,
            weatherRain:
              json.Result.HistoricalObservations[0].Observation
                .RainMillimetersRatePerHour.Value,
            weatherSnow:
              json.Result.HistoricalObservations[0].Observation
                .SnowMillimetersRatePerHour.Value,
          });
      })
      .catch((error) => {
        console.error(error);
      });
  }
  render() {
    const weatherCondition = this.state.weatherCondition;
    const weatherWind = this.state.weatherWind;
    const weatherRain = this.state.weatherRain;
    const weatherSnow = this.state.weatherSnow;
    let iconName;

    if (weatherCondition > 38) {
      iconName = <Ionicons name={"sunny-outline"} color={"#fff"} size={40} />;
    } else if (weatherCondition < 38) {
      iconName = <Ionicons name={"cloudy-outline"} color={"#fff"} size={40} />;
    } else if (weatherWind > 15) {
      iconName = (
        <MaterialCommunityIcons
          name={"weather-windy"}
          color={"#fff"}
          size={40}
        />
      );
    } else if (weatherRain > 0.5) {
      iconName = <Ionicons name={"rainy-outline"} color={"#fff"} size={40} />;
    } else if (weatherSnow > 1) {
      iconName = <Ionicons name={"snow"} color={"#fff"} size={40} />;
    }

    const day = moment().format("dddd");
    const date = moment().format("MMMM D");

    return (
      <View style={styles.weatherContainer}>
        <View style={styles.temp1}>
          <Text style={styles.text2}>{day}</Text>
          <Text style={styles.text3}>{date}</Text>
        </View>
        <View style={styles.temp2}>
          <Text style={styles.text1}>{this.state.jsonData}&deg;F</Text>
        </View>
        <View style={styles.temp3}>
          <Text style={styles.text1}>{iconName}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  weatherContainer: {
    backgroundColor: "#2a9d8f",
    flex: 0,
    flexDirection: "row",
    flexWrap: "wrap",
    width: "100%",
  },
  temp2: {
    width: "33.33%",
  },
  temp1: {
    width: "33.33%",
  },
  temp3: {
    width: "33.33%",
  },
  text1: {
    color: "#ffffff",
    textAlign: "center",
    fontSize: 30,
    padding: 8,
    fontWeight: "bold",
  },
  text2: {
    color: "#ffffff",
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold",
    paddingTop: 2,
  },
  text3: {
    color: "#ffffff",
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold",
  },
});
