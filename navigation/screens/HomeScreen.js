import * as React from "react";
import {
  View,
  StyleSheet,
  Linking,
  Alert,
  Text,
  TouchableOpacity,
  ImageBackground,
  Image,
} from "react-native";
import WeatherApp from "./utils/weatherApp2";
import BMFall from "./images/BMFall.jpg";
import BMCam from "./images/mountaincam.jpg";
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
      <Text style={styles.text3}>24-25 Season Pass Information</Text>
    </TouchableOpacity>
  );
};

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text1}>
        24-25 Season Pass - Winter Rates Now Available
      </Text>
      <Text style={styles.text2}>Take advantage of our Season Card Packs!</Text>
      <Text style={styles.text2}>Purchase before December 31, 2024!</Text>
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
        title="fall page"
        onPress={() => navigation.navigate("Fall")}
        type="clear"
      >
        <View style={styles.fallBox}>
          <ImageBackground source={BMFall} style={styles.fallPicture}>
            <Text style={styles.fallText}>FALL</Text>
          </ImageBackground>
        </View>
      </TouchableOpacity>
      <View style={styles.fallBox}>
        <ImageBackground source={BMCam} style={styles.camPicture}>
          <Text style={styles.camText}>MOUNTAIN CAM</Text>
        </ImageBackground>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "top",
    alignItems: "center",
  },
  text1: {
    backgroundColor: "#2a9d8f",
    alignSelf: "stretch",
    textAlign: "center",
    fontSize: 18,
    fontWeight: "bold",
    color: "#ffffff",
  },
  text2: {
    backgroundColor: "#2a9d8f",
    alignSelf: "stretch",
    textAlign: "center",
    color: "#ffffff",
  },
  text3: {
    color: "#ffffff",
    fontWeight: "bold",
    fontSize: 18,
  },
  button1: {
    backgroundColor: "#ff6900",
    borderRadius: 5,
    marginVertical: 2,
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  weather: {
    backgroundColor: "#2a9d8f",
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
  },
});
