import * as React from "react";
import {
  View,
  Image,
  Button,
  Alert,
  Linking,
  Platform,
  StyleSheet,
} from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Ionicons from "react-native-vector-icons/Ionicons";

import HomeScreen from "./screens/HomeScreen";
import MenuScreen from "./screens/MenuScreen";
import TrailMapScreen from "./screens/TrailMapScreen";
import LiftsScreen from "./screens/LiftsScreen";
import TrailsScreen from "./screens/TrailsScreen";

const homeName = "Home";
const trailMapName = "Trail Map";
const menuName = "Menu";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function Start() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          let rn = route.name;

          if (rn === homeName) {
            iconName = focused ? "home" : "home-outline";
          } else if (rn === menuName) {
            iconName = focused ? "list" : "list-outline";
          } else if (rn === trailMapName) {
            iconName = focused ? "map" : "map-outline";
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "#ff6900",
        tabBarInactiveTintColor: "#FFFFFF",
        tabBarLabelStyle: { paddingBottom: 10, fontSize: 10 },
        tabBarStyle: { padding: 10, height: 90, backgroundColor: "#264653" },
        headerStyle: { backgroundColor: "#264653", height: 125 },
        headerTintColor: "#FFFFFF",
      })}
    >
      <Tab.Screen name={homeName} component={HomeScreen} />
      <Tab.Screen name={trailMapName} component={TrailMapScreen} />
      <Tab.Screen name={menuName} component={MenuScreen} />
    </Tab.Navigator>
  );
}

export default function Secondary() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Start"
          component={Start}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Lift Screen"
          component={LiftsScreen}
          options={{ headerShown: true }}
        />
        <Stack.Screen
          name="Trails Screen"
          component={TrailsScreen}
          options={{ headerShown: true }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  iconContainer: {
    paddingLeft: 25,
  },
});
