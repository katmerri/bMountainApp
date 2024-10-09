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

const fallFest = "https://www.bristolmountain.com/fall-festival/";

const FallFestURL = ({ url2 }) => {
  const handlePress = React.useCallback(async () => {
    const supported = await Linking.canOpenURL(url2);

    if (supported) {
      await Linking.openURL(url2);
    } else {
      Alert.alert(`Unable to open url: ${url2}`);
    }
  }, [url2]);

  return (
    <TouchableOpacity
      title="Fall Festival 2024"
      onPress={handlePress}
      style={styles.button1}
    >
      <Text style={styles.text1}>FALL FESTIVAL INFO</Text>
    </TouchableOpacity>
  );
};

const hikingTrails =
  "https://www.bristolmountain.com/wp-content/uploads/2021/08/Bristol-Mountain-Summit-Hikes-Walks-Print-Out.pdf";

const HikingTrailURL = ({ url3 }) => {
  const handlePress = React.useCallback(async () => {
    const supported = await Linking.canOpenURL(url3);

    if (supported) {
      await Linking.openURL(url3);
    } else {
      Alert.alert(`Unable to open url: ${url3}`);
    }
  }, [url3]);

  return (
    <TouchableOpacity
      title="Hiking Trail Map"
      onPress={handlePress}
      style={styles.button1}
    >
      <Text style={styles.text1}>HIKING TRAILS</Text>
    </TouchableOpacity>
  );
};

export default function FallScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.logo}>
          <Image
            source={require("./images/Fall-Sky-Ride-Logo-2024.png")}
            style={styles.fallLogo}
          />
        </View>
        <View style={styles.buttonview}>
          <FallSkyRideURL url={fallSkyRide} />
        </View>
        <View style={styles.info}>
          <Text style={styles.text2}>Hours of Operation:</Text>
          <Text style={styles.text3}>Saturdays & Sundays</Text>
          <Text style={styles.text4}>Starting September 7th</Text>
          <Text style={styles.text4}>Ending the last weekend in October</Text>
          <Text style={styles.text5}>
            (plus Columbus Day, Monday, October 14th)
          </Text>
          <Text style={styles.text4}>12PM to 4PM</Text>
        </View>
        <View style={styles.info}>
          <Text style={styles.text2}>Pricing:</Text>
          <Text style={styles.text3}>Admission (Ages 3+)</Text>
          <Text style={styles.text4}>
            $15 per person <Text style={styles.text5}>(3+ days prior)</Text>
          </Text>
          <Text style={styles.text4}>
            $20 per person{" "}
            <Text style={styles.text5}>(less than 3 days prior)</Text>
          </Text>
          <Text style={styles.text3}>Admission (Ages 2 & younger)</Text>
          <Text style={styles.text4}>
            FREE{" "}
            <Text style={styles.text5}>
              (Ticket can obtained at Guest Services)
            </Text>
          </Text>
        </View>
        <View style={styles.info}>
          <Text></Text>
          <Text></Text>
          <Text style={styles.text3}>ATTENTION:</Text>
          <Text style={styles.text4}>
            Admissions are limited. We cannot guarantee availability during your
            desired time slot. Please, reserve early to avoid disappointment
            during our peak times. Once tickets are sold out online, they are
            sold out everywhere. There is no walk-up ticket availability for
            sold out time slots.
          </Text>
          <Text></Text>
          <Text style={styles.text3}>Executive Season Pass Holders:</Text>
          <Text style={styles.text4}>
            Bristol Mountain Executive Season Passholders must call (585)
            374-6000 to reserve their complimentary Fall Sky Ride experience.
          </Text>
        </View>
        <View style={styles.info}>
          <Text style={styles.text2}>Upcoming Events:</Text>
          <Text style={styles.text3}>Live Music at the Summit</Text>
          <Text style={styles.text4}>Sunday, October 20th - Benny Juice</Text>
          <Text></Text>
          <Text style={styles.text3}>Fall Festival 2024</Text>
          <Text style={styles.text4}>October 12th and 13th</Text>
        </View>
        <View style={styles.buttonview2}>
          <FallFestURL url2={fallFest} />
        </View>
        <View style={styles.info}>
          <Text style={styles.text2}>Summit Hikes & More:</Text>
          <Text style={styles.text3}>Trail Map</Text>
          <Text style={styles.text4}>
            Check out our Summit Hikes at the link below to the map.
          </Text>
        </View>
        <View style={styles.buttonview2}>
          <HikingTrailURL url3={hikingTrails} />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0,
  },
  logo: {
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
  buttonview2: {
    alignItems: "center",
    paddingTop: 20,
    paddingBottom: 5,
  },
  text2: {
    fontSize: 30,
    color: "#cf6f47",
    fontWeight: "bold",
    paddingTop: 20,
    fontFamily: "georgia",
  },
  text3: {
    fontSize: 25,
    fontFamily: "helvetica",
    fontWeight: "bold",
    color: "#deaa6b",
  },
  text4: {
    color: "#3a3b3c",
    fontSize: 16,
    fontFamily: "helvetica",
    fontWeight: "bold",
  },
  text5: {
    color: "#3a3b3c",
    fontSize: 12,
    fontWeight: "normal",
  },
  info: {
    paddingLeft: 10,
    paddingRight: 10,
  },
});
