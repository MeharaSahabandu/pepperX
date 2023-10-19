import React from "react";
import { View, Text, Image } from "react-native";
import * as Animatable from 'react-native-animatable'; // Import Animatable
import { styles } from "../css/ManagerHomeCSS";
import Header from "./Header";

export default function ManagerHome() {
  return (
    <View style={styles.container}>
      <Header />
      <Text style={styles.headerText}>Manager Categories</Text>
      <Text style={styles.headerPara}>Choose the operation you want to do</Text>
      <View style={styles.marginContainer}>
      <Animatable.View // Wrap with Animatable.View for animation
          animation="slideInUp" // Slide-up animation
          duration={500} // Animation duration (1 second)
        >
        <View style={styles.rectangle}>
          <Image
            source={require("../assets/income.png")}
            style={styles.image}
          />
          <View style={styles.separator}></View>
          <Text style={styles.text}>Income</Text>
        </View>
        </Animatable.View>
        <Animatable.View 
          animation="slideInUp"
          duration={750} 
        >
        <View style={styles.rectangle}>
          <Image
            source={require("../assets/expense.png")}
            style={styles.image}
          />
          <View style={styles.separator}></View>
          <Text style={styles.text}>Expenditure</Text>
        </View>
        </Animatable.View>
        <Animatable.View 
          animation="slideInUp"
          duration={1000} 
        >
        <View style={styles.rectangle}>
          <Image source={require("../assets/land.png")} style={styles.image} />
          <View style={styles.separator}></View>
          <Text style={styles.text}>Zone Activity</Text>
        </View>
        </Animatable.View>
        <Animatable.View 
          animation="slideInUp"
          duration={1250} 
        >
        <View style={styles.rectangle}>
          <Image
            source={require("../assets/settings.png")}
            style={styles.image}
          />
          <View style={styles.separator}></View>
          <Text style={styles.text}>Machine Operations</Text>
        </View>
        </Animatable.View>
        <Animatable.View 
          animation="slideInUp"
          duration={1500} 
        >
        <View style={styles.rectangle}>
          <Image
            source={require("../assets/finance.png")}
            style={styles.image}
          />
          <View style={styles.separator}></View>
          <Text style={styles.text}>Finance Balances</Text>
        </View>
        </Animatable.View>
      </View>
    </View>
  );
}
