import React from "react";
import { View, Text, Image } from "react-native";
import { styles } from "../css/ManagerHomeCSS";
import HeaderManager from "./HeaderManager";

export default function ManagerHome() {
  return (
    <View style={styles.container}>
      <HeaderManager />
      <Text style={styles.headerText}>All Categories</Text>
      <Text style={styles.headerPara}>Choose the operation you want to do</Text>
      <View style={styles.marginContainer}>
        <View style={styles.rectangle}>
          <Image
            source={require("../assets/income.png")}
            style={styles.image}
          />
          <View style={styles.separator}></View>
          <Text style={styles.text}>Income</Text>
        </View>
        <View style={styles.rectangle}>
          <Image
            source={require("../assets/expense.png")}
            style={styles.image}
          />
          <View style={styles.separator}></View>
          <Text style={styles.text}>Expenditure</Text>
        </View>
        <View style={styles.rectangle}>
          <Image source={require("../assets/land.png")} style={styles.image} />
          <View style={styles.separator}></View>
          <Text style={styles.text}>Zone Activity</Text>
        </View>
        <View style={styles.rectangle}>
          <Image
            source={require("../assets/settings.png")}
            style={styles.image}
          />
          <View style={styles.separator}></View>
          <Text style={styles.text}>Machine Operations</Text>
        </View>
        <View style={styles.rectangle}>
          <Image
            source={require("../assets/finance.png")}
            style={styles.image}
          />
          <View style={styles.separator}></View>
          <Text style={styles.text}>Finance Balances</Text>
        </View>
      </View>
    </View>
  );
}
