import React from "react";
import { View, Text, Image } from "react-native";
import { styles } from "../css/HeaderStyle";

export default function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.headerLeftText}>Hello! Kaveen</Text>
      <Image
        source={require("../assets/signout.png")}
        style={styles.headerRightImage}
      />
    </View>
  );
}
