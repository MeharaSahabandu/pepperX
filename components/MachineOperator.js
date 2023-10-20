import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { styles } from "../css/MachineOperatorStyles";
import Header from "./Header";

export default function LandOwner() {
  
  const navigation = useNavigation();

  function handleNavigateOperations(){
    navigation.navigate("Machine Operations");
  }

  return (
    <View style={styles.container}>
      <Header />
      <Text style={styles.headerText}>All Categories</Text>
      <Text style={styles.headerPara}>Choose the operation you want to do</Text>
      <View style={styles.marginContainer}>
        <TouchableOpacity onPress={handleNavigateOperations}>
        <View style={styles.rectangle}>
          <Image
            source={require("../assets/machineOperator01.png")}
            style={styles.image}
          />
          <View style={styles.separator}></View>
          <Text style={styles.text}>Machine<br/>Operations</Text>
        </View>
        </TouchableOpacity>
        
        <View style={styles.rectangle}>
          <Image source={require("../assets/machineOperator02.png")} style={styles.image} />
          <View style={styles.separator}></View>
          <Text style={styles.text}>Machine<br/>Expenditure</Text>
        </View>
        
      </View>
      <Image
        source={require("../assets/Wheat.png")}
        style={styles.backgroundImage1}
      />
      <Image
        source={require("../assets/Wheat.png")}
        style={styles.backgroundImage2}
      />
    </View>
  );
}