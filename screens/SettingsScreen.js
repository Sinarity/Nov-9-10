import React from "react";
import { RadioButton, Surface, Switch, Text } from "react-native-paper";
import { useAppStore } from "../store/UseAppStore";

export default function SettingsScreen() {
  const isDarkTheme = useAppStore((state) => state.isDarkTheme);
  const fontSizeKey = useAppStore((state) => state.fontSizeKey);
  const isSoundEnabled = useAppStore((state) => state.isSoundEnabled);

  const toggleTheme = useAppStore((state) => state.toggleTheme);
  const toggleSound = useAppStore((state) => state.toggleSound);
  const setFontSize = useAppStore((state) => state.setFontSize);

  return (
    <Surface style={{ flex: 1, padding: 20, margin: 20 }}>
      <Surface
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          padding: 16,
          borderRadius: 12,
          marginBottom: 16,
        }}
      >
        <Text>Settings Screen</Text>
        <Text>Sound Enabled({isSoundEnabled ? "On" : "Off"})</Text>
        <Switch value={isSoundEnabled} onValueChange={toggleSound} />
      </Surface>

      <Surface
        style={{
          elevation: 2,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          padding: 16,
          borderRadius: 12,
          marginBottom: 16,
        }}
      >
        <Text>Settings Screen</Text>
        <Text>Dark Theme({isDarkTheme ? "On" : "Off"})</Text>
        <Switch value={isDarkTheme} onValueChange={toggleTheme} />
      </Surface>

      <Surface
        style={{
          elevation: 2,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          padding: 16,
          borderRadius: 12,
          marginBottom: 16,
        }}
      >
        <Text style={{ padding: 16, borderRadius: 12 }}>
          Font Size {fontSizeKey}
        </Text>
        <RadioButton.Group
          onValueChange={(fontSizeKey) => setFontSize(fontSizeKey)}
          value={fontSizeKey}
        >
          <RadioButton.Item value="small" label="Small" />
          <RadioButton.Item value="medium" label="Medium" />
          <RadioButton.Item value="large" label="Large" />
        </RadioButton.Group>
      </Surface>
    </Surface>
  );
}
