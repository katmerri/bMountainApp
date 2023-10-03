import { navigate, navigation } from "@react-navigation/native";
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
import Conditions from "./utils/conditions";
import BMFall from "./images/BMFall.jpg";

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
      <Text style={styles.text3}>23-24 Season Pass Information</Text>
    </TouchableOpacity>
  );
};

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text1}>
        23-24 Season Pass - Winter Rates Now Available
      </Text>
      <Text style={styles.text2}>
        Take advantage of our Season Card Packs - Available through December 31,
        2023.{" "}
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
      <View style={styles.conditionsBox}>
        <Conditions />
      </View>
      <View style={styles.fallBox}>
        <ImageBackground source={BMFall} style={styles.fallPicture}>
          <Text style={styles.fallText}>FALL</Text>
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
  conditionsBox: {
    width: "100%",
    backgroundColor: "#fff",
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
    backgroundColor: "#808080c0",
    top: 65,
  },
  fallPicture: {
    width: "100%",
    height: undefined,
    aspectRatio: 1,
    top: -65,
  },
});
