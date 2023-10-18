import React from "react";
import { View, StyleSheet, Dimensions, Text } from "react-native";
import { BarChart } from "react-native-chart-kit";

export default function ChartComponent() {
  // Dummy data for demonstration
  const totalIncome = 5000;
  const totalExpenditure = 3000;

  const data = {
    labels: ["Income", "Expenditure"],
    datasets: [
      {
        data: [totalIncome, totalExpenditure],
      },
    ],
  };

  const chartConfig = {
    backgroundGradientFrom: "#fff",
    backgroundGradientTo: "#fff",
    color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
    barPercentage: 0.5,
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Total Income and Expenditure</Text>
      <BarChart
        data={data}
        width={Dimensions.get("window").width - 20}
        height={220}
        yAxisLabel="$"
        chartConfig={chartConfig}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 20,
    margin: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
});
