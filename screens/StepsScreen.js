import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase";

export default function StepsScreen() {

  const [goal, setGoal] = useState("");
  const [steps, setSteps] = useState("");

  const saveSteps = async () => {
    await addDoc(collection(db, "users/user123/steps"), {
      goal: Number(goal),
      steps: Number(steps),
      date: new Date().toISOString()
    });
    alert("Steps saved!");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Daily Steps</Text>

      <TextInput
        style={styles.input}
        placeholder="Step Goal"
        placeholderTextColor="#aaa"
        keyboardType="numeric"
        value={goal}
        onChangeText={setGoal}
      />

      <TextInput
        style={styles.input}
        placeholder="Steps Today"
        placeholderTextColor="#aaa"
        keyboardType="numeric"
        value={steps}
        onChangeText={setSteps}
      />

      <TouchableOpacity style={styles.button} onPress={saveSteps}>
        <Text style={styles.buttonText}>Save Steps</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#16161A", padding: 20 },
  header: { fontSize: 26, color: "#fff", marginBottom: 25, fontWeight: "700" },
  input: {
    backgroundColor: "#242629",
    color: "#fff",
    padding: 15,
    borderRadius: 12,
    marginVertical: 10
  },
  button: {
    backgroundColor: "#2CB67D",
    padding: 16,
    borderRadius: 14,
    marginTop: 20,
    alignItems: "center"
  },
  buttonText: { color: "#fff", fontSize: 17, fontWeight: "700" }
});
