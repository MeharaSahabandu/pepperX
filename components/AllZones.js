import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "../css/AllZonesStyles";

export default function AllZones() {
  const [selectedZone, setSelectedZone] = useState("A"); // Set "Zone A" as the default selected zone

  const handleZoneSelection = (zone) => {
    setSelectedZone(zone);
  };

  const getZoneStyle = (zone) => {
    return selectedZone === zone
      ? { backgroundColor: "#05AF6D", color: "white" }
      : { backgroundColor: "#B1B1B1", color: "black" };
  };

  return (
    <View style={styles.container}>
      <View style={styles.marginContainer}>
        <View style={styles.outterRec}>
          <View style={styles.row}>
            <TouchableOpacity
              style={[styles.zoneRectangle, getZoneStyle("A")]}
              onPress={() => handleZoneSelection("A")}
            >
              <Text style={styles.zoneText}>Zone A</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.zoneRectangle, getZoneStyle("B")]}
              onPress={() => handleZoneSelection("B")}
            >
              <Text style={styles.zoneText}>Zone B</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.row}>
            <TouchableOpacity
              style={[styles.zoneRectangle, getZoneStyle("C")]}
              onPress={() => handleZoneSelection("C")}
            >
              <Text style={styles.zoneText}>Zone C</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.zoneRectangle, getZoneStyle("D")]}
              onPress={() => handleZoneSelection("D")}
            >
              <Text style={styles.zoneText}>Zone D</Text>
            </TouchableOpacity>
          </View>
        </View>
        <Text style={styles.headingText}>
          Zone A {"\n"} Total Income and Expenditure
        </Text>
        <View style={styles.bottomRectangle}>
          <View style={styles.revenueContainer}>
            <View style={styles.revTag}>
              <Text style={styles.revText}>REVENUE</Text>
            </View>
            <Text style={styles.revenueValue}>LKR 55,000</Text>
          </View>
          <TouchableOpacity style={styles.detailsButton}>
            <Text style={styles.detailsButtonText}>Details</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.bottomRectangle}>
          <View style={styles.expenseContainer}>
            <View style={styles.exTag}>
              <Text style={styles.exText}>EXPENDITURE</Text>
            </View>
            <Text style={styles.exValue}>LKR 45,000</Text>
          </View>
          <TouchableOpacity style={styles.detailsButton}>
            <Text style={styles.detailsButtonText}>Details</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
