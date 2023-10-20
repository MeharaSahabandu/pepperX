import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import * as Animatable from 'react-native-animatable'; // Import Animatable
import { useNavigation } from "@react-navigation/native";
import { styles } from "../css/LandOwnerStyles";
import HeaderLandOwner from "./HeaderLandOwner";

export default function LandOwner() {
  const navigation = useNavigation();

  const handleExpenseBtn = () => {
    navigation.navigate("LandOwnerHE");
  };

  const handleIncomeBtn = () => {
    navigation.navigate("LandOwnerHI");
  };

  return (
    <View style={styles.container}>
      <HeaderLandOwner />
      <Text style={styles.headerText}>Land Owner Categories</Text>
      <Text style={styles.headerPara}>Choose the operation you want to do</Text>
      <View style={styles.marginContainer}>
        <Animatable.View // Wrap with Animatable.View for animation
          animation="slideInUp" // Slide-up animation
          duration={750} // Animation duration (1 second)
        >
          <TouchableOpacity onPress={handleExpenseBtn}>
            <View style={styles.rectangle}>
              <Image source={require("../assets/HarvestExpense.png")} style={styles.image} />
              <View style={styles.separator}></View>
              <Text style={styles.text}>Harvesting<br />Expenditure</Text>
            </View>
          </TouchableOpacity>
        </Animatable.View>
        <Animatable.View // Wrap with Animatable.View for animation
          animation="slideInUp" // Slide-up animation
          duration={1000} // Animation duration (1 second)
        >
          <TouchableOpacity onPress={handleIncomeBtn}>
            <View style={styles.rectangle}>
              <Image source={require("../assets/HarvestIncome.png")} style={styles.image} />
              <View style={styles.separator}></View>
              <Text style={styles.text}>Harvesting<br />Income</Text>
            </View>
          </TouchableOpacity>
        </Animatable.View>
      </View>
      <Image source={require("../assets/Wheat.png")} style={styles.backgroundImage1} />
      <Image source={require("../assets/Wheat.png")} style={styles.backgroundImage2} />
    </View>
  );
}
