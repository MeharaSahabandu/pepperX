import React, { useState } from "react";
import { styles } from "../css/AllIncomeStyles";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";

export default function AllIncome() {
  const [selectedIncome, setSelectedIncome] = useState("Harvesting");
  const [incomeList, setIncomeList] = useState([]);

  const handleIncomeSelection = (incomeType) => {
    if (incomeType === "Harvesting") {
      setIncomeList(["$100", "$150", "$200"]);
    } else if (incomeType === "Drying Pepper") {
      setIncomeList(["$50", "$75", "$100"]);
    }

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
              styles.rectangle,
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
              styles.rectangle,
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

        <View style={styles.incomeList}>
          {incomeList.map((income, index) => (
            <View key={index} style={styles.listItem}>
              <Text style={styles.listItemText}>{income}</Text>
            </View>
          ))}
        </View>
      </View>
    </View>
  );
}
