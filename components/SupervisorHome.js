import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { styles } from "../css/ManagerHomeCSS";
import Header from "./Header";
import { useNavigation } from "@react-navigation/native";

export default function SupervisorHome() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Header />
      <Text style={styles.headerText}>All Categories</Text>
      <Text style={styles.headerPara}>Choose the operation you want to do</Text>
      <View style={styles.marginContainer}>
        <TouchableOpacity
          onPress={() => navigation.navigate("Plantation Details")}
        >
          <View style={styles.rectangle}>
            <Image
              source={require("../assets/plantationMenu.png")}
              style={styles.image}
            />
            <View style={styles.separator}></View>
            <Text style={styles.text}>Plantation</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("Maintenance Details")}>
          <View style={styles.rectangle}>
            <Image
              source={require("../assets/maintenanceMenu.png")}
              style={styles.image}
            />
            <View style={styles.separator}></View>
            <Text style={styles.text}>Maintenance</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}
