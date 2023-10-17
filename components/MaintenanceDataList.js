import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { styles } from "../css/PlantationDetailsCSS";

export default function MaintenanceDataList() {
  return (
    <View>
      <View style={styles.rectangle}>
        <Text style={styles.date}>
          <Text style={{ fontSize: 25 }}>12</Text>
          <br />
          June
        </Text>
        <View style={styles.separator}></View>
        <Text style={styles.text}>
          <Text style={{ color: "#888888", fontSize: 12 }}>Watering</Text>{" "}
          <br />
          LKR 55,000
          <br />
          <br />
          <Text style={{ color: "#888888", fontSize: 12 }}>Trimming</Text>
          <br />
          LKR 20,000
        </Text>
        <View style={styles.zoneLabel}>
          <Text style={styles.zoneLabelTextA}> Zone A </Text>
        </View>
      </View>
    </View>
  );
}
