import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = () => {
    if (!email || !password) {
      alert("Please enter email and password");
      return;
    }

    signInWithEmailAndPassword(auth, email.trim(), password)
      .then(() => {
        // Go to Steps tab
        navigation.navigate("AppTabs", { startScreen: "Steps" });
      })
      .catch((err) => alert(err.message));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome Back 👋</Text>
      <Text style={styles.subtitle}>Login to continue</Text>

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

      <TouchableOpacity style={styles.button} onPress={login}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("Signup")}>
        <Text style={styles.link}>Create an account</Text>
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
    backgroundColor: "#7F5AF0",
    padding: 16,
    borderRadius: 14,
    alignItems: "center",
    marginTop: 10
  },
  buttonText: { color: "#fff", fontSize: 18, fontWeight: "700" },
  link: { color: "#7F5AF0", textAlign: "center", marginTop: 20 }
});
