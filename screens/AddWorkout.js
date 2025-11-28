import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase";

export default function AddWorkout({ navigation }) {

  const [workouts, setWorkouts] = useState([]);

  const [type, setType] = useState("");
  const [duration, setDuration] = useState("");
  const [calories, setCalories] = useState("");

  const saveWorkout = async () => {
    const newWorkout = {
      type,
      duration: Number(duration),
      calories: Number(calories),
      date: new Date().toISOString()
    };

    setWorkouts([...workouts, newWorkout]);  // spread operator

    await addDoc(collection(db, "users/user123/workouts"), newWorkout);

    navigation.navigate("Home");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Add Workout</Text>

      <TextInput
        style={styles.input}
        placeholder="Workout Type"
        placeholderTextColor="#aaa"
        value={type}
        onChangeText={setType}
      />

      <TextInput
        style={styles.input}
        placeholder="Duration (min)"
        placeholderTextColor="#aaa"
        keyboardType="numeric"
        value={duration}
        onChangeText={setDuration}
      />

      <TextInput
        style={styles.input}
        placeholder="Calories Burned"
        placeholderTextColor="#aaa"
        keyboardType="numeric"
        value={calories}
        onChangeText={setCalories}
      />

      <TouchableOpacity style={styles.button} onPress={saveWorkout}>
        <Text style={styles.buttonText}>Save Workout</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#16161A", padding: 20 },
  header: { fontSize: 26, color: "#fff", marginBottom: 25, fontWeight: "700" },
  input: {
    backgroundColor: "#242629",
    padding: 15,
    color: "#fff",
    borderRadius: 12,
    marginVertical: 10
  },
  button: {
    backgroundColor: "#7F5AF0",
    padding: 17,
    borderRadius: 14,
    marginTop: 20,
    alignItems: "center"
  },
  buttonText: { color: "#fff", fontSize: 17, fontWeight: "700" }
});
