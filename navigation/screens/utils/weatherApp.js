import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import { weatherCons } from './weatherIcons';


export default class WeatherApp extends React.Component {
  state = {
    jsonData: 0,
    weatherCondition: null,
  };

  componentDidMount() {
    fetch('https://api.openweathermap.org/data/2.5/weather?lat=42.74&lon=-77.40&appid=204a33f526b3829fba1335e4c8478cf6&units=imperial', {
      method: 'GET',
    })
      .then(response => response.json())
      .then(json => {
        console.log(json),
        this.setState({
          jsonData: Math.round(json.main.temp),
          weatherCondition: json.weather[0].main,
        });
      })
      .catch(error => {
        console.error(error);
      });
  }
  render() {
    const weatherCondition = this.state.weatherCondition;
    let iconName;

    if (weatherCondition) {
        iconName = <MaterialCommunityIcons
        name={weatherCons[weatherCondition].icon}
        color={'#fff'}
        size={40} />
    }

    return (
      <View style={styles.weatherContainer}>
        <View style={styles.temp1}>
        <Text style={styles.text1}>{new Date().getMonth()+1}/{new Date().getDay()-1}</Text>
        </View>
        <View style={styles.temp2}>
        <Text style={styles.text1}>{this.state.jsonData}&deg;F</Text>
        </View>
        <View style={styles.temp3}>
           <Text style={styles.text1}>{iconName}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create ({
    weatherContainer: {
        backgroundColor: '#2a9d8f',
        flex: 0,
        flexDirection: 'row',
        flexWrap: 'wrap',
        width: '100%',
    },
    temp2: {
        width: '33.33%',
    },
    temp1:{
        width: '33.33%',
    },  
    temp3: {
        width: '33.33%',
    },
    text1: {
        color: '#ffffff',
        textAlign: 'center',
        fontSize: 30,
        padding: 8,
    },
});


