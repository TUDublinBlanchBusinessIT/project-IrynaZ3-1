import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function WorkoutCard({ workout }) {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{workout.type}</Text>
      <Text style={styles.detail}>Duration: {workout.duration} min</Text>
      <Text style={styles.detail}>Calories: {workout.calories}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#242629",
    padding: 20,
    borderRadius: 14,
    marginVertical: 10
  },
  title: { color: "#fff", fontSize: 20, fontWeight: "700" },
  detail: { color: "#ccc", marginTop: 5 }
});
