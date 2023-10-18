import React from "react";
import { View, Text } from "react-native";
import { styles } from "../css/BarScreenStyles";

export default function BarScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.marginContainer}>
        <View style={styles.rectangle}>
          <Text style={styles.text}>Rectangle 1</Text>
        </View>
        <View style={styles.rectangle}>
          <Text style={styles.text}>Rectangle 2</Text>
        </View>

        <View style={styles.rectangle}>
          <Text style={styles.text}>Rectangle 3</Text>
        </View>
        <View style={styles.rectangle}>
          <Text style={styles.text}>Rectangle 4</Text>
        </View>

        <View style={styles.rectangle}>
          <Text style={styles.text}>Rectangle 5</Text>
        </View>
        <View style={styles.rectangle}>
          <Text style={styles.text}>Rectangle 6</Text>
        </View>
      </View>
    </View>
  );
}
