import { navigate, navigation } from '@react-navigation/native';
import * as React from 'react';
import { View, StyleSheet, Linking, Alert, Text, TouchableOpacity } from 'react-native';

const seasonPassesURL = 'https://www.bristolmountain.com/season-products/';

const SeasonPassURL = ({ url }) => {
    const handlePress = React.useCallback(async () => {
        const supported = await Linking.canOpenURL(url);

        if (supported) {
            await Linking.openURL(url);
        } else {
            Alert.alert(`Unable to open url: ${url}`);
        }
    }, [url]);

    return <TouchableOpacity title='Season Passes' onPress={handlePress} style={styles.button1}>
        <Text style={styles.text3}>23-24 Season Pass Information</Text></TouchableOpacity>
};

export default function HomeScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.text1}>23-24 Season Pass - Summer rates until September 15th</Text>
            <Text style={styles.text2}>Save on your 2023-24 Season Pass when you purchase by September 15th. Also take advantage of the interest
            free payment plan for up to 6 months. </Text>
            <SeasonPassURL url={seasonPassesURL}/>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'top',
        alignItems: 'center',
        
    },
    text1: {
        backgroundColor: '#2a9d8f',
        alignSelf: 'stretch',
        textAlign: 'center',
        fontSize: 18,
        fontWeight: 'bold',
        color: '#ffffff',
    },
    text2: {
        backgroundColor: '#2a9d8f',
        alignSelf: 'stretch',
        textAlign: 'center',
        color: '#ffffff',
    },
    text3: {
        color: '#ffffff',
        fontWeight: 'bold',
        fontSize: 18,
    },
    button1: {
        backgroundColor: '#ff6900',
        borderRadius: 5,
        marginVertical: 2,
        paddingHorizontal: 10,
        paddingVertical: 10,
    },
});
