import React from "react";
import { View, Text, Image } from "react-native";
import { styles } from "../css/ManagerHomeCSS";
import Header from "./Header";

export default function SupervisorHome() {
  return (
    <View style={styles.container}>
      <Header />
      <Text style={styles.headerText}>All Categories</Text>
      <Text style={styles.headerPara}>Choose the operation you want to do</Text>
      <View style={styles.marginContainer}>
        <View style={styles.rectangle}>
          <Image
            source={require("../assets/plantationMenu.png")}
            style={styles.image}
          />
          <View style={styles.separator}></View>
          <Text style={styles.text}>Plantation</Text>
        </View>
        <View style={styles.rectangle}>
          <Image source={require("../assets/maintenanceMenu.png")} style={styles.image} />
          <View style={styles.separator}></View>
          <Text style={styles.text}>Maintenance</Text>
        </View>
      </View>
    </View>
  );
}
