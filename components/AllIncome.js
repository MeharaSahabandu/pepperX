import React, { useState, useEffect } from "react";
import { styles } from "../css/AllIncomeStyles";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import HarvestIncome from "./HarvestIncome";
import DryingPepperIncome from "./DryingPepperIncome";

export default function AllIncome() {
  const [selectedIncome, setSelectedIncome] = useState("Harvesting");

  const handleIncomeSelection = (incomeType) => {
    setSelectedIncome(incomeType);
  };

  return (
    <View style={styles.container}>
      <View style={styles.marginContainer}>
        <ScrollView
          horizontal
          contentContainerStyle={styles.rectanglesContainer}
        >
          <TouchableOpacity
            style={[
              styles.rectangleHorizontal,
              selectedIncome === "Harvesting" && styles.selected,
            ]}
            onPress={() => handleIncomeSelection("Harvesting")}
          >
            <Text
              style={[
                styles.incomeText,
                selectedIncome === "Harvesting" && styles.selectedText,
              ]}
            >
              Harvesting
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.rectangleHorizontal,
              selectedIncome === "Drying Pepper" && styles.selected,
            ]}
            onPress={() => handleIncomeSelection("Drying Pepper")}
          >
            <Text
              style={[
                styles.incomeText,
                selectedIncome === "Drying Pepper" && styles.selectedText,
              ]}
            >
              Drying Pepper
            </Text>
          </TouchableOpacity>
        </ScrollView>
        {selectedIncome === "Harvesting" ? (
          <HarvestIncome />
        ) : (
          <DryingPepperIncome />
        )}
      </View>
    </View>
  );
}
