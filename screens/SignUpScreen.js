import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

export default function SignupScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signup = () => {
    if (!email || !password) {
      alert("Enter email and password");
      return;
    }

    createUserWithEmailAndPassword(auth, email.trim(), password)
      .then(() => {
        // Go to AddWorkout tab
        navigation.navigate("AppTabs", { startScreen: "Add Workout" });
      })
      .catch((err) => alert(err.message));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create Account 🚀</Text>
      <Text style={styles.subtitle}>Start your fitness journey</Text>

      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="#aaa"
        autoCapitalize="none"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />

      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="#aaa"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <TouchableOpacity style={styles.button} onPress={signup}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("Login")}>
        <Text style={styles.link}>Already have an account?</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#16161A", padding: 25 },
  title: { color: "#fff", fontSize: 30, fontWeight: "700", marginBottom: 10 },
  subtitle: { color: "#aaa", marginBottom: 30 },
  input: {
    backgroundColor: "#242629",
    color: "#fff",
    padding: 15,
    borderRadius: 12,
    marginBottom: 15
  },
  button: {
    backgroundColor: "#2CB67D",
    padding: 16,
    borderRadius: 14,
    alignItems: "center",
    marginTop: 10
  },
  buttonText: { color: "#fff", fontSize: 18, fontWeight: "700" },
  link: { color: "#7F5AF0", textAlign: "center", marginTop: 20 }
});
