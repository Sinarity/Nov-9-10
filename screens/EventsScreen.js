import { ScrollView, View } from "react-native";
import React from "react";
import { Surface, Switch, Text } from "react-native-paper";
import { useAppStore } from "../store/UseAppStore";
import { useEffect } from "react";

export default function EventsScreen() {
  const events = useAppStore((state) => state.events);
  const fetchEvents = useAppStore((state) => state.fetchEvents);

  useEffect(() => {
    fetchEvents("student_secret_render_888");
  }, []);

  return (
    <Surface style={{ flex: 1, padding: 20, margin: 20 }}>
      <Text>Events Screen</Text>
      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={{
          padding: 10,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {events.map((item) => {
          return <Text key={item.id}>{item.title}</Text>;
        })}
      </ScrollView>
    </Surface>
  );
}
