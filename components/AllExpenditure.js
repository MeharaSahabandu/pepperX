import React, { useState, useEffect } from "react";
import { styles } from "../css/AllExpenditureStyles";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import HarvestExpenditure from "./HarvestExpenditure";
import PlantationDataList from "./PlantationDataList";
import MaintenanceDataList from "./MaintenanceDataList";

export default function AllExpenditure() {
  const [selectedExpenditure, setSelectedExpenditure] = useState("Plantation");

  const handleExpenSelection = (expenseType) => {
    setSelectedExpenditure(expenseType);
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
              selectedExpenditure === "Plantation" && styles.selected,
            ]}
            onPress={() => handleExpenSelection("Plantation")}
          >
            <Text
              style={[
                styles.incomeText,
                selectedExpenditure === "Plantation" && styles.selectedText,
              ]}
            >
              Plantation
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.rectangleHorizontal,
              selectedExpenditure === "Maintenance" && styles.selected,
            ]}
            onPress={() => handleExpenSelection("Maintenance")}
          >
            <Text
              style={[
                styles.incomeText,
                selectedExpenditure === "Maintenance" && styles.selectedText,
              ]}
            >
              Maintenance
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.rectangleHorizontal,
              selectedExpenditure === "Harvest" && styles.selected,
            ]}
            onPress={() => handleExpenSelection("Harvest")}
          >
            <Text
              style={[
                styles.incomeText,
                selectedExpenditure === "Harvest" && styles.selectedText,
              ]}
            >
              Harvest
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.rectangleHorizontal,
              selectedExpenditure === "DryingPepper" && styles.selected,
            ]}
            onPress={() => handleExpenSelection("DryingPepper")}
          >
            <Text
              style={[
                styles.incomeText,
                selectedExpenditure === "DryingPepper" && styles.selectedText,
              ]}
            >
              Drying Pepper
            </Text>
          </TouchableOpacity>
        </ScrollView>
        {selectedExpenditure === "Plantation" ? (
          <PlantationDataList />
        ) : (
          <HarvestExpenditure />
        )}
      </View>
    </View>
  );
}
