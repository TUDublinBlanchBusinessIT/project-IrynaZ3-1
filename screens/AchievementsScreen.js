import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import AchievementBadge from "../components/AchievementBadge";

export default function AchievementsScreen() {

  const [achievements, setAchievements] = useState([]);

  const loadAchievements = async () => {
    const snaps = await getDocs(collection(db, "users/user123/workouts"));
    let totalCal = 0;
    let count = 0;

    snaps.forEach(doc => {
      const w = doc.data();
      totalCal += w.calories;
      count++;
    });

    const earned = [];

    if (count >= 5) earned.push({ title: "🏋️ Fitness Rookie", desc: "5 workouts!" });
    if (totalCal >= 1000) earned.push({ title: "🔥 Calorie Burner", desc: "1000 Calories burned" });

    setAchievements(earned);
  };

  useEffect(() => { loadAchievements(); }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Achievements</Text>

      {achievements.map((a, i) => (
        <AchievementBadge key={i} title={a.title} desc={a.desc} />
      ))}

      {achievements.length === 0 && (
        <Text style={{ color: "#aaa" }}>No achievements yet. Keep going! 💪</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#16161A", padding: 20 },
  header: { color: "#fff", fontSize: 26, marginBottom: 20 }
});
