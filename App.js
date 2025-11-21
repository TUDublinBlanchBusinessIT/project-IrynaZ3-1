// App.js
import React from "react";
import { StatusBar, StyleSheet } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Import screens
import HomeScreen from "./screens/HomeScreen";
import AddWorkout from "./screens/AddWorkout";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        {/* Home screen */}
        <Stack.Screen name="Home" component={HomeScreen} />

        {/* AddWorkout screen */}
        <Stack.Screen name="AddWorkout" component={AddWorkout} />
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
