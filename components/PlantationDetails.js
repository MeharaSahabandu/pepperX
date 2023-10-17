import React from "react";
import { View, Text, Image } from "react-native";
import { styles } from "../css/PlantationDetailsCSS";

export default function PlantationDetails() {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>
        <b>Plantation</b>
      </Text>
      <View style={styles.marginContainer}>
        <View style={styles.rectangle}>
          <Text style={styles.date}>
          <Text style={{ fontSize: 25 }}>12</Text>
          <br/>June</Text>
          <View style={styles.separator}></View>
          <Text style={styles.text}>
            <Text style={{ color: "#888888", fontSize: 12 }}>Wages Paid</Text>{" "}
            <br />
            LKR 55,000
            <br /><br/>
            <Text style={{ color: "#888888", fontSize: 12 }}>
              Other Expenditure
            </Text>
            <br />
            LKR 20,000
          </Text>
        </View>
        <View style={styles.rectangle}>
          <Text style={styles.date}><Text style={{ fontSize: 25 }}>15</Text><br/>June</Text>
          <View style={styles.separator}></View>
          <Text style={styles.text}>
            <Text style={{ color: "#888888", fontSize: 12 }}>Wages Paid</Text>{" "}
            <br />
            LKR 55,000
            <br /><br/>
            <Text style={{ color: "#888888", fontSize: 12 }}>
              Other Expenditure
            </Text>
            <br />
            LKR 20,000
          </Text>
        </View>
        <View style={styles.rectangle}>
          <Text style={styles.date}><Text style={{ fontSize: 25 }}>18</Text><br/>June</Text>
          <View style={styles.separator}></View>
          <Text style={styles.text}>
            <Text style={{ color: "#888888", fontSize: 12 }}>Wages Paid</Text>{" "}
            <br />
            LKR 55,000
            <br /><br/>
            <Text style={{ color: "#888888", fontSize: 12 }}>
              Other Expenditure
            </Text>
            <br />
            LKR 20,000
          </Text>
        </View>
        <View style={styles.rectangle}>
          <Text style={styles.date}><Text style={{ fontSize: 25 }}>18</Text><br/>June</Text>
          <View style={styles.separator}></View>
          <Text style={styles.text}>
            <Text style={{ color: "#888888", fontSize: 12 }}>Wages Paid</Text>{" "}
            <br />
            LKR 55,000
            <br /><br/>
            <Text style={{ color: "#888888", fontSize: 12 }}>
              Other Expenditure
            </Text>
            <br />
            LKR 20,000
          </Text>
        </View>
      </View>
    </View>
  );
}
