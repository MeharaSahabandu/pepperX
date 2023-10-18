import React, { useState, useEffect } from "react";
import { View, Text, ScrollView } from "react-native";
import { collection, query, getDocs } from "firebase/firestore";
import { styles } from "../css/AllIncomeStyles";
import { db } from "./config";

export default function HarvestIncome() {
  const [incomeData, setIncomeData] = useState([]);

  const getZoneBackgroundColor = (zone) => {
    switch (zone) {
      case "A":
        return styles.zoneRecA; // Define the style for Zone A background color
      case "B":
        return styles.zoneRecB; // Define the style for Zone B background color
      case "C":
        return styles.zoneRecC; // Define the style for Zone C background color
      case "D":
        return styles.zoneRecD; // Define the style for Zone D background color
      default:
        return {};
    }
  };

  useEffect(() => {
    // Fetch data from the 'harvestIncome' collection
    const fetchIncomeData = async () => {
      const q = query(collection(db, "harvestIncome"));
      try {
        const querySnapshot = await getDocs(q);

        const data = [];
        querySnapshot.forEach((doc) => {
          const { income, zone, qty } = doc.data();
          data.push({ income, zone, qty });
        });

        setIncomeData(data);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchIncomeData();
  }, []);

  return (
    <ScrollView>
      {incomeData.map((item, index) => (
        <View key={index} style={styles.rectangle}>
          <Text style={styles.date}>
            <Text style={{ fontSize: 25 }}>12</Text>
            <br />
            June
          </Text>
          <View style={styles.separator} />
          <Text style={styles.text}>
            <Text style={{ color: "#888888", fontSize: 14 }}>
              Income Generated
            </Text>
            <br />
            <Text style={{ color: "black", fontSize: 24 }}>
              LKR, {item.income}
            </Text>
          </Text>
          <View style={styles.columnContainer}>
            <View style={[styles.zoneRec, getZoneBackgroundColor(item.zone)]}>
              <Text style={styles.zoneRecText}>{`Zone ${item.zone}`}</Text>
            </View>
            <View style={styles.qtyRec}>
              <Text style={styles.qtyRecText}>{`QTY ${item.qty}`}</Text>
            </View>
          </View>
        </View>
      ))}
    </ScrollView>
  );
}
