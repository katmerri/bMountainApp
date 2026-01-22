import * as React from "react";
import {
  View,
  StyleSheet,
  Linking,
  Alert,
  Text,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
} from "react-native";
import WeatherApp from "./utils/weatherApp2";
import BMCam from "./images/mountaincam.jpg";
import BMGateway from "./images/BMGateway.jpg";
import BMRentals from "./images/BMRentals.jpg";
import Lifts from "./utils/lifts";
import Trails from "./utils/trails";
import { Button } from "@rneui/base";

const seasonPassesURL = "https://www.bristolmountain.com/season-products/";

const SeasonPassURL = ({ url }) => {
  const handlePress = React.useCallback(async () => {
    const supported = await Linking.canOpenURL(url);

    if (supported) {
      await Linking.openURL(url);
    } else {
      Alert.alert(`Unable to open url: ${url}`);
    }
  }, [url]);

  return (
    <TouchableOpacity
      title="Season Passes"
      onPress={handlePress}
      style={styles.button1}
    >
      <Text style={styles.text3}>25-26 Season Pass Information</Text>
    </TouchableOpacity>
  );
};

export default function HomeScreen({ navigation }) {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.text1}>HOURS OF OPERATION:</Text>
        <Text style={styles.text2}>Lifts: Monday - Friday 9AM - 9PM</Text>
        <Text style={styles.text2}>Saturday - Sunday 8:30AM - 9PM</Text>
        <Text style={styles.text2}>
          Twilight skiing from 3:30PM - 9PM (Daily)
        </Text>
        <SeasonPassURL url={seasonPassesURL} />
        <View style={styles.weather}>
          <View style={styles.weatherHeader}>
            <Text style={styles.weatherText}>Bristol Mountain Summit</Text>
          </View>
          <View>
            <WeatherApp />
          </View>
        </View>
        <View>
          <View style={styles.liftAndTrail}>
            <View style={styles.conditionsBox}>
              <Button
                onPress={() => navigation.navigate("Lifts")}
                title="LIFTS"
                type="clear"
                titleStyle={{
                  color: "#264653",
                  fontWeight: "bold",
                  fontSize: 20,
                }}
              />
              <Lifts />
            </View>
            <View style={styles.trailBox}>
              <Button
                onPress={() => navigation.navigate("Trails")}
                title="TRAILS"
                type="clear"
                titleStyle={{
                  color: "#264653",
                  fontWeight: "bold",
                  fontSize: 20,
                }}
              />
              <Trails />
            </View>
          </View>
        </View>
        <TouchableOpacity
          title="Lift Tickets"
          onPress={() => navigation.navigate("Tickets")}
          type="clear"
        >
          <View style={styles.fallBox}>
            <ImageBackground source={BMGateway} style={styles.ticketPicture}>
              <Text style={styles.ticketText}>LIFT TICKETS</Text>
            </ImageBackground>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          title="Rentals"
          onPress={() => navigation.navigate("Rentals")}
          type="clear"
        >
          <View style={styles.fallBox}>
            <ImageBackground source={BMRentals} style={styles.rentalsPicture}>
              <Text style={styles.rentalText}>RENTALS</Text>
            </ImageBackground>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          title="Mountain Cameras"
          onPress={() => navigation.navigate("MountainCam")}
          type="clear"
        >
          <View style={styles.fallBox}>
            <ImageBackground source={BMCam} style={styles.camPicture}>
              <Text style={styles.camText}>MOUNTAIN CAMS</Text>
            </ImageBackground>
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "top",
    alignItems: "center",
  },
  text1: {
    backgroundColor: "#668f80",
    alignSelf: "stretch",
    textAlign: "center",
    fontSize: 18,
    fontWeight: "bold",
    color: "#ffffff",
  },
  text2: {
    backgroundColor: "#668f80",
    alignSelf: "stretch",
    textAlign: "center",
    color: "#ffffff",
  },
  text3: {
    color: "#ffffff",
    fontWeight: "bold",
    fontSize: 18,
    textAlign: "center",
  },
  button1: {
    backgroundColor: "#70503d",

    marginVertical: 2,
    paddingHorizontal: 10,
    paddingVertical: 10,
    width: "100%",
  },
  weather: {
    backgroundColor: "#668f80",
    flex: 0,
    flexDirection: "row",
    flexWrap: "wrap",
  },
  weatherText: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
    color: "#ffffff",
  },
  weatherHeader: {
    width: "100%",
  },
  fallBox: {
    width: "100%",
    height: 125,
    overflow: "hidden",
  },
  fallText: {
    color: "white",
    fontSize: 42,
    lineHeight: 125,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#808080C0",
    top: 65,
  },
  fallPicture: {
    width: "100%",
    height: undefined,
    aspectRatio: 1,
    top: -65,
  },
  camPicture: {
    width: "100%",
    height: undefined,
    aspectRatio: 1,
    top: -140,
  },
  camText: {
    color: "white",
    fontSize: 42,
    lineHeight: 125,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#808080C0",
    top: 140,
  },
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
    paddingBottom: 10,
  },
  ticketPicture: {
    width: "100%",
    height: undefined,
    aspectRatio: 1,
    top: -160,
  },
  ticketText: {
    color: "white",
    fontSize: 42,
    lineHeight: 125,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#808080C0",
    top: 160,
  },
  rentalsPicture: {
    width: "100%",
    height: undefined,
    aspectRatio: 1,
    top: -1,
  },
  rentalText: {
    color: "white",
    fontSize: 42,
    lineHeight: 125,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#808080C0",
    top: 1,
  },
});
