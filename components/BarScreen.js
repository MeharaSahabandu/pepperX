import React from "react";
import { View, Text } from "react-native";
import { styles } from "../css/BarScreenStyles";

export default function BarScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.marginContainer}>
        <View style={styles.rectangle}>
          <Text style={[styles.text, { color: "#F2B02F" }]}>
            Plantation Expenditure
          </Text>
          <View style={styles.horizontalLine} />
          <Text style={styles.amount}>LKR 55,000</Text>
        </View>
        <View style={styles.rectangle}>
          <Text style={[styles.text, { color: "#05AF6D" }]}>
            Drying Pepper Income
          </Text>
          <View style={styles.horizontalLine} />
          <Text style={styles.amount}>LKR 55,000</Text>
        </View>
        <View style={styles.rectangle}>
          <Text style={[styles.text, { color: "#05AF6D" }]}>
            Harvesting Income
          </Text>
          <View style={styles.horizontalLine} />
          <Text style={styles.amount}>LKR 55,000</Text>
        </View>
        <View style={styles.rectangle}>
          <Text style={[styles.text, { color: "#F2B02F" }]}>
            Maintenance Expenditure
          </Text>
          <View style={styles.horizontalLine} />
          <Text style={styles.amount}>LKR 55,000</Text>
        </View>
        <View style={styles.rectangle}>
          <Text style={[styles.text, { color: "#F2B02F" }]}>
            Harvesting Expenditure
          </Text>
          <View style={styles.horizontalLine} />
          <Text style={styles.amount}>LKR 55,000</Text>
        </View>
        <View style={styles.rectangle}>
          <Text style={[styles.text, { color: "#F2B02F" }]}>
            Drying Pepper Expenditure
          </Text>
          <View style={styles.horizontalLine} />
          <Text style={styles.amount}>LKR 55,000</Text>
        </View>
      </View>
    </View>
  );
}
