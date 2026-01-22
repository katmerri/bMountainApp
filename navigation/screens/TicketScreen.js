import React from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Linking,
} from "react-native";

const reloadURL = "https://bristolmountain.com/?keyword=wtp";

const ReloadsURL = ({ url }) => {
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
      style={styles.ticketButton1}
    >
      <Text style={styles.ticketButtonText}>RELOAD HERE</Text>
    </TouchableOpacity>
  );
};

const ticketsURL = "https://bristolmountain.com/";

const TicketURL = ({ url }) => {
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
      style={styles.ticketButton1}
    >
      <Text style={styles.ticketButtonText}>PURCHASE TICKETS HERE</Text>
    </TouchableOpacity>
  );
};

export default function TicketsPage({ navigation }) {
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.contentview}>
          <Text style={styles.text1}>TICKETS</Text>
          <Text style={styles.text2}>Do you already have a Gateway Card?</Text>
          <ReloadsURL url={reloadURL} />
          <Text style={styles.text2}>Don't have a Gateway Card?</Text>
          <TicketURL url={ticketsURL} />
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
    fontSize: 20,
    fontWeight: "bold",
    fontFamily: "Helvetica",
    paddingTop: 15,
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
  ticketButtonText: {
    color: "#ffffff",
    fontWeight: "bold",
    fontSize: 18,
    textAlign: "center",
  },
  ticketButton1: {
    backgroundColor: "#668f80",
    width: "100%",
    paddingVertical: 10,
  },
});
