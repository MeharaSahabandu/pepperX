import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { styles } from "../css/PlantationDetailsCSS";
import calendaricon from "../assets/calendarIcon.png";
import MaintenanceDataList from "./MaintenanceDataList";

export default function MaintenanceDetails() {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>
        <b>Maintenance</b>
        <br />
      </Text>
        <TouchableOpacity
          style={styles.last30DaysButton}
          onPress={() => {
            // Handle "Last 30 days" button click action here
          }}
        >
          <Text style={styles.last30DaysButtonText}> Last 30 days </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.addButton}
          onPress={() => {
            // Handle button click action here
          }}
        >
          <Text style={styles.addButtonText}>+</Text>
        </TouchableOpacity>
        <MaintenanceDataList/>
    </View>
  );
}
