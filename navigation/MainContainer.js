import * as React from 'react';
import { View, Image, Button, Alert, Linking } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import HomeScreen from './screens/HomeScreen';
import MenuScreen from './screens/MenuScreen';
import TrailMapScreen from './screens/TrailMapScreen';

function HeaderLogo() {
    return (
        <View style={{alignItems: 'center'}}>
            <Image
            style={{width: 140, height: 70}}
            source={require('./screens/images/BMLogo.png')}/>
        </View>
    );
}

const skiPatrol = () =>
Alert.alert('Ski Patrol', 'Hours: 9AM - 4PM', [
    {
        text: 'Call 585-374-1115',
        onPress: () => {Linking.openURL('tel:15853741115');} 
    }
])

const homeName = 'Home';
const trailMapName = 'Trail Map';
const menuName = 'Menu';

const Tab = createBottomTabNavigator();

export default function MainContainer() {
    return(
        <NavigationContainer>
            <Tab.Navigator
            initialRouteName='homeName'
            screenOptions={({route}) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
                    let rn = route.name;

                    if (rn === homeName) {
                        iconName = focused ? 'home' : 'home-outline';
                    } else if (rn === menuName){
                        iconName = focused ? 'list' : 'list-outline';
                    } else if (rn === trailMapName) {
                        iconName = focused ? 'map' : 'map-outline';
                    }

                    return <Ionicons name={iconName} size={size} color={color}/>
                },
                tabBarActiveTintColor: '#ff6900',
                tabBarInactiveTintColor: '#FFFFFF',
                tabBarLabelStyle: { paddingBottom: 10, fontSize: 10 },
                tabBarStyle: { padding: 10, height: 90, backgroundColor: '#264653'},
                headerStyle: { backgroundColor: '#264653', height: 120 },
                headerTintColor: '#FFFFFF',
                headerTitle: () => <HeaderLogo />,
                headerLeft: () => <Button
                onPress={skiPatrol}
                title='Ski Patrol'
                color={'red'} />
                   
            })}
            >

                <Tab.Screen name={homeName} component={HomeScreen}/>
                <Tab.Screen name={trailMapName} component={TrailMapScreen}/>
                <Tab.Screen name={menuName} component={MenuScreen}/>

            </Tab.Navigator>
        </NavigationContainer>

    );
}