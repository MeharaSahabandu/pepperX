import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native"; // Import the useNavigation hook
import { styles } from "../css/LandOwnerStyles";
import Header from "./Header";

export default function LandOwner() {
  const navigation = useNavigation(); // Initialize the navigation object

  const handleExpenseBtn = () => {
    // Navigate to PlantationDetails
    navigation.navigate("PlantationDetails");
  };

  const handleIncomeBtn = () => {
    // Navigate to LandOwnerIncome
    navigation.navigate("LandOwnerIncome");
  };

  return (
    <View style={styles.container}>
      <Header />
      <Text style={styles.headerText}>All Categories</Text>
      <Text style={styles.headerPara}>Choose the operation you want to do</Text>
      <View style={styles.marginContainer}>
        <TouchableOpacity onPress={handleExpenseBtn}>
          <View style={styles.rectangle}>
            <Image source={require("../assets/HarvestExpense.png")} style={styles.image} />
            <View style={styles.separator}></View>
            <Text style={styles.text}>Harvesting<br />Expenditure</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleIncomeBtn}>
          <View style={styles.rectangle}>
            <Image source={require("../assets/HarvestIncome.png")} style={styles.image} />
            <View style={styles.separator}></View>
            <Text style={styles.text}>Harvesting<br />Income</Text>
          </View>
        </TouchableOpacity>
      </View>
      <Image source={require("../assets/Wheat.png")} style={styles.backgroundImage1} />
      <Image source={require("../assets/Wheat.png")} style={styles.backgroundImage2} />
    </View>
  );
}
