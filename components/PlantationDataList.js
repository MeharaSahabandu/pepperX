import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { styles } from "../css/PlantationDetailsCSS";

export default function PlantationDataList() {
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
          <Text style={{ color: "#888888", fontSize: 12 }}>Wages Paid</Text>{" "}
          <br />
          LKR 55,000
          <br />
          <br />
          <Text style={{ color: "#888888", fontSize: 12 }}>
            Other Expenditure
          </Text>
          <br />
          LKR 20,000
        </Text>
        <View style={styles.columnContainer}>
          <View style={styles.zoneRec}>
            <Text style={styles.zoneRecText}>Zone A</Text>
          </View>
          
        </View>
      </View>
    </View>
  );
}
