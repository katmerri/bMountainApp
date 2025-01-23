import React from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Image,
  TouchableOpacity,
  Linking,
} from "react-native";

const rocketLive = "https://live6.brownrice.com/embed/bristolmountain1";

const RocketLiveURL = ({ url }) => {
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
      title="Rocket Live"
      onPress={handlePress}
      style={styles.button1}
    >
      <Text style={styles.buttontext}>ROCKET LIVE</Text>
    </TouchableOpacity>
  );
};

const launchpadlive = "https://live6.brownrice.com/embed/bristolmountain2";

const LaunchPadLiveURL = ({ url2 }) => {
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
      title="Launch Pad"
      onPress={handlePress}
      style={styles.button1}
    >
      <Text style={styles.buttontext}>LAUNCH PAD LIVE</Text>
    </TouchableOpacity>
  );
};

export default function MountainCamScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.contentview}>
          <Text style={styles.text1}>
            {"\n"}MOUNTAIN CAMS{"\n"}
          </Text>
          <Text style={styles.text2}>MORNING STAR</Text>
          <Image
            style={styles.camview}
            source={{
              uri: "https://www.bristolmountain.com/webcams/morningstarcurrent.jpg",
            }}
          />
          <Text style={styles.text2}>LAUNCHING PAD{"\n"}</Text>
          <Image
            style={styles.camview}
            source={{
              uri: "https://www.bristolmountain.com/webcams/roselandcurrent.jpg",
            }}
          />
          <LaunchPadLiveURL url2={launchpadlive} />

          <Text style={styles.text2}>{"\n"}ROCKET</Text>
          <Image
            style={styles.camview}
            source={{
              uri: "https://www.bristolmountain.com/webcams/rocketcamstill.jpg",
            }}
          />
          <RocketLiveURL url={rocketLive} />
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
  camview: {
    resizeMode: "contain",
    width: 300,
    height: 250,
  },
  text1: {
    color: "#264653",
    fontFamily: "Helvetica",
    fontSize: 42,
    fontWeight: "bold",
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
    backgroundColor: "#2a9d90",
    borderRadius: 5,
    marginVertical: 10,
    paddingVertical: 20,
    width: 225,
  },
});
