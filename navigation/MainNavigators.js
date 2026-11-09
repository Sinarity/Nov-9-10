import { View, Text } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import EventsScreen from "../screens/EventsScreen";
import SettingsScreen from "../screens/SettingsScreen";
import MaterialIcons from "@react-native-vector-icons/material-icons";

const Tab = createBottomTabNavigator();

export default function MainNavigator() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        option={{
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="Home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Events"
        component={EventsScreen}
        option={{
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="Events" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        option={{
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="Settings" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
