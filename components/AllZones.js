import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "../css/AllZonesStyles";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "./config"; // Import your Firestore config

export default function AllZones() {
  const [selectedZone, setSelectedZone] = useState("A");
  const [totalIncome, setTotalIncome] = useState(0);
  const [totalExpenditure, setTotalExpenditure] = useState(0);

  const handleZoneSelection = async (zone) => {
    setSelectedZone(zone);
    await loadIncomeForZone(zone);
    await loadExpenditureForZone(zone);
  };

  const getZoneStyle = (zone) => {
    return selectedZone === zone
      ? { backgroundColor: "#05AF6D", color: "white" }
      : { backgroundColor: "#B1B1B1", color: "black" };
  };

  //get the total income for the selected zone
  const loadIncomeForZone = async (zone) => {
    const incomeQuery = query(
      collection(db, "harvestIncome"),
      where("zone", "==", zone)
    );
    let totalIncome = 0;

    try {
      const querySnapshot = await getDocs(incomeQuery);
      querySnapshot.forEach((doc) => {
        const { income } = doc.data();
        totalIncome += income;
      });

      setTotalIncome(totalIncome);
    } catch (error) {
      console.error("Error fetching income data: ", error);
    }
  };

  //get the total expenditure for the selected zone
  const loadExpenditureForZone = async (zone) => {
    const expenditureQueries = [
      query(collection(db, "harvestEx"), where("zone", "==", zone)),
      query(collection(db, "maintainEx"), where("zone", "==", zone)),
      query(collection(db, "plantationEx"), where("zone", "==", zone)),
    ];

    let totalExpenditure = 0;

    for (const expenditureQuery of expenditureQueries) {
      try {
        const querySnapshot = await getDocs(expenditureQuery);
        querySnapshot.forEach((doc) => {
          const { expense, wages, other, otherEx } = doc.data();
          totalExpenditure += expense + wages + other + otherEx;
        });
      } catch (error) {
        console.error("Error fetching expenditure data: ", error);
      }
    }

    setTotalExpenditure(totalExpenditure);
  };

  useEffect(() => {
    loadIncomeForZone(selectedZone);
    loadExpenditureForZone(selectedZone);
  }, [selectedZone]);

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
          Zone {selectedZone} {"\n"} Total Income and Expenditure
        </Text>
        <View style={styles.bottomRectangle}>
          <View style={styles.revenueContainer}>
            <View style={styles.revTag}>
              <Text style={styles.revText}>REVENUE</Text>
            </View>
            <Text style={styles.revenueValue}>{`LKR ${totalIncome}`}</Text>
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
            <Text style={styles.exValue}>{`LKR ${totalExpenditure}`}</Text>
          </View>
          <TouchableOpacity style={styles.detailsButton}>
            <Text style={styles.detailsButtonText}>Details</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
