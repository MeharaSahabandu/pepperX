import React, { useState, useEffect } from "react";
import { styles } from "../css/AllIncomeStyles";
import { View, Text } from "react-native";

export default function HarvestExpenditure() {
  return (
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
        <View style={styles.qtyRec}>
          <Text style={styles.qtyRecText}>QTY 30KG</Text>
        </View>
      </View>
    </View>
  );
}
