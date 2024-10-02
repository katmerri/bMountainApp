import React from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Linking,
} from "react-native";

const fallSkyRide =
  "https://store.bristolmountain.com/E-Commerce/CalendarView.aspx?node_id=4131467";

const FallSkyRideURL = ({ url }) => {
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
      title="Fall Sky Ride Tickets"
      onPress={handlePress}
      style={styles.button1}
    >
      <Text style={styles.text1}>PURCHASE TICKETS</Text>
    </TouchableOpacity>
  );
};

export default function FallScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <ScrollView>
        <Image
          source={require("./images/Fall-Sky-Ride-Logo-2024.png")}
          style={styles.fallLogo}
        />
        <View style={styles.buttonview}>
          <FallSkyRideURL url={fallSkyRide} />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "top",
    alignItems: "center",
  },
  fallLogo: {
    resizeMode: "contain",
    width: 300,
    height: 250,
    padding: 10,
  },
  button1: {
    backgroundColor: "#c4c8ab",
    borderRadius: 5,
    marginVertical: 10,
    paddingVertical: 20,
    width: 225,
  },
  text1: {
    fontFamily: "sans-serif",
    textAlign: "center",
    fontSize: 18,
    color: "#ffffff",
  },
  buttonview: {
    alignItems: "center",
  },
});
