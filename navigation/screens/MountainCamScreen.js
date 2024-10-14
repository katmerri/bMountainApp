import React from "react";
import { View, Text, ScrollView, StyleSheet, Image } from "react-native";

export default function MountainCamScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.contentview}>
          <Text style={styles.text1}>MOUNTAIN CAMS {"\n"}</Text>
          <Text style={styles.text2}>MORNING STAR</Text>
          <Image
            style={styles.camview}
            source={{
              uri: "https://www.bristolmountain.com/webcams/morningstarcurrent.jpg",
            }}
          />
          <Text style={styles.text2}>LAUNCHING PAD</Text>
          <Image
            style={styles.camview}
            source={{
              uri: "https://www.bristolmountain.com/webcams/roselandcurrent.jpg",
            }}
          />
          <Text style={styles.text2}>ROCKET</Text>
          <Image
            style={styles.camview}
            source={{
              uri: "https://www.bristolmountain.com/webcams/rocketcamstill.jpg",
            }}
          />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0,
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
});
