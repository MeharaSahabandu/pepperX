import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import { collection, query, getDocs } from "firebase/firestore";
import { styles } from "../css/PlantationDetailsCSS";
import { db } from "./config";

export default function MaintenanceDataList() {
  const [maintenanceData, setMaintenanceData] = useState([]);

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
    const fetchMaintenanceData = async () => {
      try {
        const q = query(collection(db, "maintainEx"));
        const querySnapshot = await getDocs(q);

        const data = [];
        querySnapshot.forEach((doc) => {
          data.push(doc.data());
        });

        setMaintenanceData(data);
      } catch (error) {
        console.error("Error fetching maintenance data: ", error);
      }
    };

    fetchMaintenanceData();
  }, []);

  return (
    <View>
      {maintenanceData.map((item, index) => (
        <View key={index} style={styles.rectangle}>
          <Text style={styles.date}>
            <Text style={{ fontSize: 25 }}>12</Text>
            {"\n"}
            June
          </Text>
          <View style={styles.separator} />
          <Text style={styles.text}>
            <Text style={{ color: "#888888", fontSize: 12 }}>Wages Paid</Text>
            <br />
            {`LKR ${item.wages}`}
            <br />
            <br />
            <Text style={{ color: "#888888", fontSize: 12 }}>
              Other Expenditure
            </Text>
            <br />
            {`LKR ${item.other}`}
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
