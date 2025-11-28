import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function AchievementBadge({ title, desc }) {
  return (
    <View style={styles.badge}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.desc}>{desc}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  badge: {
    backgroundColor: "#2CB67D",
    padding: 18,
    borderRadius: 15,
    marginVertical: 10
  },
  title: { fontSize: 20, color: "#fff", fontWeight: "700" },
  desc: { color: "#fff", marginTop: 5 }
});
