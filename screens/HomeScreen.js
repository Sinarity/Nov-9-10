import { View } from "react-native";
import React from "react";
import { Surface, Switch, Text } from "react-native-paper";
import { useAppStore } from "../store/UseAppStore";

export default function HomeScreen() {
  const { isDarkTheme, isSoundEnabled, fontSizeKey } = useAppStore();

  return (
    <Surface style={{ flex: 1, padding: 20, margin: 20 }}>
      <Text>
        HomeScreen {fontSizeKey} {isDarkTheme ? "Enabled" : "Disabled"}
      </Text>
    </Surface>
  );
}
