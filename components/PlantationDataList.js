import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import { collection, query, getDocs } from "firebase/firestore";
import { styles } from "../css/PlantationDetailsCSS";
import { db } from "./config";

const getMonthName = (monthNumber) => {
  const monthNames = [
    "Jan", "Feb", "Mar", "April",
    "May", "June", "July", "Aug",
    "Sept", "Oct", "Nov", "Dec"
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
  }, []);

  return (
    <View>
      {plantationData.map((item, index) => (
        <View key={index} style={styles.rectangle}>
          <Text style={styles.date}>
            <Text style={{ fontSize: 25 }}>{item.date.split('/')[2]}</Text>
            <br />
            {getMonthName(parseInt(item.date.split('/')[1]))}
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
