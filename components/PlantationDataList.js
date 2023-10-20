import React, { useState, useEffect } from "react";
import { View, Text, Picker, TouchableOpacity } from "react-native";
import { collection, query, getDocs } from "firebase/firestore";
import { styles } from "../css/PlantationDetailsCSS";
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

export default function PlantationDataList() {
  const [plantationData, setPlantationData] = useState([]);

  const getZoneBackgroundColor = (zone) => {
    switch (zone) {
      case "A":
        return styles.zoneRecA;
      case "B":
        return styles.zoneRecB;
      case "C":
        return styles.zoneRecC;
      case "D":
        return styles.zoneRecD;
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

  useEffect(() => {
    const fetchPlantationData = async () => {
      const q = query(collection(db, "plantationEx"));
      try {
        const querySnapshot = await getDocs(q);

        const data = [];
        querySnapshot.forEach((doc) => {
          const { wages, otherEx, zone, date } = doc.data();
          data.push({ wages, otherEx, zone, date });
        });

        setPlantationData(data);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchPlantationData();
  }, [selectedRange]);

  return (
    <View>
      <View>
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
      {plantationData.map((item, index) => (
        <View key={index} style={styles.rectangle}>
          <Text style={styles.date}>
            <Text style={{ fontSize: 25 }}>{item.date.split("/")[2]}</Text>
            <br />
            {getMonthName(parseInt(item.date.split("/")[1]))}
          </Text>
          <View style={styles.separator} />
          <Text style={styles.text}>
            <Text style={{ color: "#888888", fontSize: 12 }}>Wages Paid</Text>
            <br />
            LKR {item.wages}
            <br />
            <br />
            <Text style={{ color: "#888888", fontSize: 12 }}>
              Other Expenditure
            </Text>
            <br />
            LKR {item.otherEx}
          </Text>
          <View style={styles.columnContainer}>
            <View style={[styles.zoneRec, getZoneBackgroundColor(item.zone)]}>
              <Text style={styles.zoneRecText}>Zone {item.zone}</Text>
            </View>
          </View>
        </View>
      ))}
    </View>
  );
}
