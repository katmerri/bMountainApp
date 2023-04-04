import * as React from 'react';
import { View, Text, Button, Linking, Alert } from 'react-native';

const seasonPasses = 'https://www.bristolmountain.com/season-products/';

const OpenUrlButton = ({url, children}) => {
    const handlePress = React.useCallback(async () =>{
        const supported = await Linking.canOpenURL(url);

        if (supported) {
            await Linking.openURL(url);
        } else {
            Alert.alert('Do not know how to open URL: ${url}');
        }
    }, [url]);

    return <Button title={children} onPress={handlePress}/>;
};

export default function HomeScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'top' }}>
            <OpenUrlButton url={seasonPasses}>2023-24 Season Products</OpenUrlButton>
        </View>

    );
}