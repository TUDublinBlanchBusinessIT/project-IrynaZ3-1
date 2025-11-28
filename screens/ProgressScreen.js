import React from "react";
import { View, Text, Dimensions, StyleSheet } from "react-native";
import { LineChart } from "react-native-chart-kit";

export default function ProgressScreen() {

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Weekly Progress</Text>

      <LineChart
        data={{
          labels: ["Mon", "Tue", "Wed", "Thu", "Fri"],
          datasets: [{ data: [200, 450, 300, 500, 700] }]
        }}
        width={Dimensions.get("window").width - 40}
        height={220}
        yAxisSuffix=" cal"
        chartConfig={{
          backgroundGradientFrom: "#7F5AF0",
          backgroundGradientTo: "#6246EA",
          color: (o = 1) => `rgba(255,255,255,${o})`
        }}
        style={{ borderRadius: 16 }}
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#16161A", padding: 20 },
  header: { color: "#fff", fontSize: 24, marginBottom: 20 }
});
