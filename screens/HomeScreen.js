import React, { useEffect, useState } from "react";
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from "react-native";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import WorkoutCard from "../components/WorkoutCard";

export default function HomeScreen({ navigation }) {

  const [workouts, setWorkouts] = useState([]);

  const loadWorkouts = async () => {
    const snapshot = await getDocs(collection(db, "users/user123/workouts"));
    const list = [];
    snapshot.forEach(doc => list.push(doc.data()));
    setWorkouts(list);
  };

  useEffect(() => {
    loadWorkouts();
  }, []);

  return (
    <ScrollView style={styles.container}>

      <Text style={styles.header}>Welcome Back 👋</Text>
      <Text style={styles.subtext}>Your recent workouts</Text>

      {workouts.map((w, index) => (
        <WorkoutCard key={index} workout={w} />
      ))}

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Add Workout")}>
        <Text style={styles.buttonText}>+ Add Workout</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button2} onPress={() => navigation.navigate("Steps")}>
        <Text style={styles.buttonText}>Track Steps</Text>
      </TouchableOpacity>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#16161A", padding: 20 },
  header: { fontSize: 28, fontWeight: "700", color: "#fff", marginBottom: 10 },
  subtext: { color: "#bbb", marginBottom: 20 },
  button: {
    backgroundColor: "#7F5AF0",
    padding: 16,
    borderRadius: 14,
    marginTop: 20,
    alignItems: "center"
  },
  button2: {
    backgroundColor: "#2CB67D",
    padding: 16,
    borderRadius: 14,
    marginTop: 10,
    alignItems: "center"
  },
  buttonText: { color: "#fff", fontSize: 18, fontWeight: "600" }
});
<TouchableOpacity
  style={{
    backgroundColor: "#D9534F",
    padding: 15,
    borderRadius: 14,
    marginTop: 20,
    alignItems: "center"
  }}
  onPress={() => auth.signOut()}
>
  <Text style={{ color: "#fff", fontSize: 18, fontWeight: "700" }}>Logout</Text>
</TouchableOpacity>

