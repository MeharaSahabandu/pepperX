import React, { useState, useEffect } from "react";
import { styles } from "../css/AllIncomeStyles";
import { View, Text } from "react-native";

export default function DryingPepperIncome() {
  return (
    <View style={styles.rectangle}>
      <Text style={styles.date}>
        <Text style={{ fontSize: 25 }}>12</Text>
        <br />
        June
      </Text>
      <View style={styles.separator}></View>
      <Text style={styles.text}>
        <Text style={{ color: "#888888", fontSize: 14 }}>Income Generated</Text>
        <br />
        <Text style={{ color: "#black", fontSize: 24 }}>LKR 20,000</Text>
      </Text>
      <View style={styles.columnContainer}>
        <View style={[styles.qtyRec, { marginTop: 50 }]}>
          <Text style={styles.qtyRecText}>QTY 30KG</Text>
        </View>
      </View>
    </View>
  );
}
