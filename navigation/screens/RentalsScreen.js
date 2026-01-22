import React from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Linking,
} from "react-native";

const rentalsURL =
  "https://bristol-tmi.shop.bristolmountain.com/packageList/navItem/Rentals";

const RentalsURL = ({ url }) => {
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
      style={styles.rentalButton1}
    >
      <Text style={styles.rentalButtonText}>Purchase Rentals Here</Text>
    </TouchableOpacity>
  );
};

export default function RentalsPage({ navigation }) {
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.contentview}>
          <Text style={styles.text1}>RENTALS</Text>
          <RentalsURL url={rentalsURL} />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0,
    padding: 0,
  },
  contentview: {
    alignItems: "center",
  },
  text1: {
    color: "#264653",
    fontFamily: "Helvetica",
    fontSize: 42,
    fontWeight: "bold",
    paddingVertical: 15,
  },
  text2: {
    color: "#e76f51",
    fontSize: 28,
    fontWeight: "bold",
    fontFamily: "Helvetica",
  },
  buttontext: {
    color: "#ffffff",
    textAlign: "center",
    fontSize: 18,
  },
  button1: {
    backgroundColor: "#70503d",
    borderRadius: 5,
    marginVertical: 10,
    paddingVertical: 20,
    width: 225,
  },
  rentalButtonText: {
    color: "#ffffff",
    fontWeight: "bold",
    fontSize: 18,
    textAlign: "center",
  },
  rentalButton1: {
    backgroundColor: "#668f80",
    width: "100%",
    paddingVertical: 10,
  },
});
