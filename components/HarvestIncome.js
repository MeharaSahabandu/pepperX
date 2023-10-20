import React, { useState, useEffect } from "react";
import { View, Text, ScrollView } from "react-native";
import { collection, query, getDocs } from "firebase/firestore";
import { styles } from "../css/AllIncomeStyles";
import { db } from "./config";

const getMonthName = (monthNumber) => {
  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "April",
    "May",
    "June",
    "July",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ];
  return monthNames[monthNumber - 1] || "";
};

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

  const filterDataByRange = (data, range) => {
    const currentDate = new Date();
    switch (range) {
      case "last7":
        // Filter data for the last 7 days
        const last7Days = new Date(
          currentDate.getFullYear(),
          currentDate.getMonth(),
          currentDate.getDate() - 7
        );
        return data.filter((item) => new Date(item.date) >= last7Days);
      case "last30":
        // Filter data for the last 30 days
        const last30Days = new Date(
          currentDate.getFullYear(),
          currentDate.getMonth(),
          currentDate.getDate() - 30
        );
        return data.filter((item) => new Date(item.date) >= last30Days);
      case "lastyear":
        // Filter data for the last year
        const lastYear = new Date(
          currentDate.getFullYear() - 1,
          currentDate.getMonth(),
          currentDate.getDate()
        );
        return data.filter((item) => new Date(item.date) >= lastYear);
      case "all":
        // No filtering, return all data
        return data;
      default:
        return data;
    }
  };
  
  const [selectedRange, setSelectedRange] = useState("last30");

  const fetchHarvestIncome = async () => {
    const q = query(collection(db, "harvestIncome"));
    try {
      const querySnapshot = await getDocs(q);
      const data = [];
      querySnapshot.forEach((doc) => {
        const { income, wages, date } = doc.data();
        data.push({ income, wages, date });
      });

      const filteredData = filterDataByRange(data, selectedRange);
      setIncomeData(filteredData);
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };

  useEffect(() => {
    // Fetch data from the 'harvestIncome' collection
    fetchHarvestIncome(); // Fetch data initially

    // ... other code ...
  }, [selectedRange]);

  return (
    <ScrollView>
      <View style={styles.rowContainer}>
        <Picker
          selectedValue={selectedRange}
          onValueChange={(itemValue, itemIndex) => setSelectedRange(itemValue)}
          style={styles.picker2}
        >
          <Picker.Item label="Last 7 Days" value="last7" />
          <Picker.Item label="Last 30 Days" value="last30" />
          <Picker.Item label="Last Year" value="lastyear" />
          <Picker.Item label="All" value="all" />
        </Picker>
        <TouchableOpacity
          style={styles.last30DaysButtonP}
          onPress={() => {
            // Handle the selected range here
            switch (selectedRange) {
              case "last7":
                // Handle "Last 7 Days" logic
                break;
              case "last30":
                // Handle "Last 30 Days" logic
                break;
              case "lastyear":
                // Handle "Last Year" logic
                break;
              case "all":
                // Handle "All" logic
                break;
              default:
                break;
            }
          }}
        ></TouchableOpacity>
      </View>
      {incomeData.map((item, index) => (
        <View key={index} style={styles.rectangle}>
          <Text style={styles.date}>
            <Text style={{ fontSize: 25 }}>{item.date.split("/")[2]}</Text>
            <br />
            {getMonthName(parseInt(item.date.split("/")[1]))}
            <br />
            <Text style={{ fontSize: 11 }}>{item.date.split("/")[0]}</Text>
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