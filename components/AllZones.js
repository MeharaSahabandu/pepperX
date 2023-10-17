import React from "react";
import { View, Text } from "react-native";
import { styles } from "../css/AllZonesStyles";

export default function AllZones() {
  return (
    <View style={styles.container}>
      <View style={styles.marginContainer}>
        <View style={styles.outterRec}>
          <View style={styles.row}>
            <View style={styles.zoneRectangle}>
              <Text style={styles.zoneText}>Zone A</Text>
            </View>
            <View style={styles.zoneRectangle}>
              <Text style={styles.zoneText}>Zone B</Text>
            </View>
          </View>
          <View style={styles.row}>
            <View style={styles.zoneRectangle}>
              <Text style={styles.zoneText}>Zone C</Text>
            </View>
            <View style={styles.zoneRectangle}>
              <Text style={styles.zoneText}>Zone D</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}
