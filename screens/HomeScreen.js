// screens/HomeScreen.js
import React from "react";
import { View, Text, Button } from "react-native";

export default function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Home Screen Loaded!</Text>
      <Button
        title="Go to Add Workout"
        onPress={() => navigation.navigate("AddWorkout")}
      />
    </View>
  );
}
