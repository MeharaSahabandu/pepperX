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
    barPercentage: 1.0,
    decimalPlaces: 0, // Set decimalPlaces to 0 to display integers on the Y-axis
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cash Flow - Net Profit</Text>
      <BarChart
        data={data}
        width={Dimensions.get("window").width - 20}
        height={220}
        yAxisLabel="LKR "
        chartConfig={chartConfig}
        fromYAxis={0} // Set the starting Y-axis value to 0
        yLabels={["0", "10k", "20k", "30k", "40k"]} // Define custom Y-axis labels
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 20,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
});
