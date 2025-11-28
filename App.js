import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { Ionicons } from "@expo/vector-icons";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";

import LoginScreen from "./screens/LoginScreen";
import SignupScreen from "./screens/SignUpScreen";

import HomeScreen from "./screens/HomeScreen";
import AddWorkout from "./screens/AddWorkout";
import StepsScreen from "./screens/StepsScreen";
import ProgressScreen from "./screens/ProgressScreen";
import AchievementsScreen from "./screens/AchievementsScreen";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function AppTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: "#7F5AF0",
        tabBarInactiveTintColor: "#bbb",
        tabBarStyle: { backgroundColor: "#16161A", height: 60 },
        tabBarIcon: ({ color, size }) => {
          const icons = {
            Home: "home",
            "Add Workout": "add-circle",
            Steps: "walk",
            Progress: "analytics",
            Achievements: "trophy"
          };
          return <Ionicons name={icons[route.name]} size={size} color={color} />;
        }
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Add Workout" component={AddWorkout} />
      <Tab.Screen name="Steps" component={StepsScreen} />
      <Tab.Screen name="Progress" component={ProgressScreen} />
      <Tab.Screen name="Achievements" component={AchievementsScreen} />
    </Tab.Navigator>
  );
}

export default function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {user ? (
          <Stack.Screen name="AppTabs" component={AppTabs} />
        ) : (
          <>
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Signup" component={SignupScreen} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
