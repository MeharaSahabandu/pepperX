import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import * as Animatable from "react-native-animatable"; // Import Animatable
import { styles } from "../css/ManagerHomeCSS";
import HeaderSupervisor from "./HeaderSupervisor";
import { useNavigation } from "@react-navigation/native";

export default function SupervisorHome() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <HeaderSupervisor />
      <Text style={styles.headerText}>Supervisor Categories</Text>
      <Text style={styles.headerPara}>Choose the operation you want to do</Text>
      <View style={styles.marginContainer}>
        <Animatable.View // Wrap with Animatable.View for animation
          animation="slideInUp" // Slide-up animation
          duration={750} // Animation duration (1 second)
        >
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
        </Animatable.View>
        <Animatable.View // Wrap with Animatable.View for animation
          animation="slideInUp" // Slide-up animation
          duration={1000} // Animation duration (1 second)
        >
          <TouchableOpacity
            onPress={() => navigation.navigate("Maintenance Details")}
          >
            <View style={styles.rectangle}>
              <Image
                source={require("../assets/maintenanceMenu.png")}
                style={styles.image}
              />
              <View style={styles.separator}></View>
              <Text style={styles.text}>Maintenance</Text>
            </View>
          </TouchableOpacity>
        </Animatable.View>
      </View>
      <View style={styles.container2}>
        <Image
          source={require("../assets/Wheat.png")}
          style={styles.backgroundImage1}
        />
        <Image
          source={require("../assets/Wheat.png")}
          style={styles.backgroundImage2}
        />
      </View>
    </View>
  );
}
