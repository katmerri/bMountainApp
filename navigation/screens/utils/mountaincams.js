import * as React from "react";
import { Image, View, StyleSheet } from "react-native";

export default class MountCam extends React.Component {
  render() {
    return (
      <View>
        <Image
          style={styles.camview}
          source={{
            uri: "https://www.bristolmountain.com/webcams/morningstarcurrent.jpg",
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  camview: {
    resizeMode: "contain",
    width: 300,
    height: 250,
    padding: 0,
  },
});
