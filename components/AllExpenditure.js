import React, { useState, useEffect } from "react";
import { styles } from "../css/AllExpenditureStyles";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";

export default function AllExpenditure() {
  const [selectedExpenditure, setSelectedExpenditure] = useState("Plantation");

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
            onPress={() => handleIncomeSelection("Plantation")}
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
            onPress={() => handleIncomeSelection("Maintenance")}
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
            onPress={() => handleIncomeSelection("Harvest")}
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
            onPress={() => handleIncomeSelection("DryingPepper")}
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
      </View>
    </View>
  );
}
