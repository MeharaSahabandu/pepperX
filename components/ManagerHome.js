import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import * as Animatable from "react-native-animatable"; // Import Animatable
import { styles } from "../css/ManagerHomeCSS";
import HeaderManager from "./HeaderManager";
import { useNavigation } from "@react-navigation/native";

export default function ManagerHome() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <HeaderManager />
      <Text style={styles.headerText}>Manager Categories</Text>
      <Text style={styles.headerPara}>Choose the operation you want to do</Text>
      <View style={styles.marginContainer}>
        <Animatable.View // Wrap with Animatable.View for animation
          animation="slideInUp" // Slide-up animation
          duration={500} // Animation duration (1 second)
        >
          <TouchableOpacity onPress={() => navigation.navigate("All Income")}>
            <View style={styles.rectangle}>
              <Image
                source={require("../assets/income.png")}
                style={styles.image}
              />
              <View style={styles.separator}></View>
              <Text style={styles.text}>Income</Text>
            </View>
          </TouchableOpacity>
        </Animatable.View>
        <Animatable.View animation="slideInUp" duration={750}>
          <TouchableOpacity
            onPress={() => navigation.navigate("All Expenditure")}
          >
            <View style={styles.rectangle}>
              <Image
                source={require("../assets/expense.png")}
                style={styles.image}
              />
              <View style={styles.separator}></View>
              <Text style={styles.text}>Expenditure</Text>
            </View>
          </TouchableOpacity>
        </Animatable.View>
        <Animatable.View animation="slideInUp" duration={1000}>
          <TouchableOpacity onPress={() => navigation.navigate("All Zones")}>
            <View style={styles.rectangle}>
              <Image
                source={require("../assets/land.png")}
                style={styles.image}
              />
              <View style={styles.separator}></View>
              <Text style={styles.text}>Zone Activity</Text>
            </View>
          </TouchableOpacity>
        </Animatable.View>
        {/* <Animatable.View animation="slideInUp" duration={1250}>
          <View style={styles.rectangle}>
            <Image
              source={require("../assets/settings.png")}
              style={styles.image}
            />
            <View style={styles.separator}></View>
            <Text style={styles.text}>Machine Operations</Text>
          </View>
        </Animatable.View> */}
        <Animatable.View animation="slideInUp" duration={1500}>
          <TouchableOpacity
            onPress={() => navigation.navigate("BarScreen")}
          >
            <View style={styles.rectangle}>
              <Image
                source={require("../assets/finance.png")}
                style={styles.image}
              />
              <View style={styles.separator}></View>
              <Text style={styles.text}>Finance Balances</Text>
            </View>
          </TouchableOpacity>
        </Animatable.View>
      </View>
    </View>
  );
}
