import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { styles } from "../css/PlantationDetailsCSS";
import calendaricon from "../assets/calendarIcon.png";

export default function PlantationDetails() {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>
        <b>Plantation</b>
        <br />
      </Text>
      <View style={styles.marginContainer}>
        <TouchableOpacity
          style={styles.last30DaysButton}
          onPress={() => {
            // Handle "Last 30 days" button click action here
          }}
        >
          <Text style={styles.last30DaysButtonText}> Last 30 days </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.addButton}
          onPress={() => {
            // Handle button click action here
          }}
        >
          <Text style={styles.addButtonText}>+</Text>
        </TouchableOpacity>
        <View style={styles.rectangle}>
          <Text style={styles.date}>
            <Text style={{ fontSize: 25 }}>12</Text>
            <br />
            June
          </Text>
          <View style={styles.separator}></View>
          <Text style={styles.text}>
            <Text style={{ color: "#888888", fontSize: 12 }}>Wages Paid</Text>{" "}
            <br />
            LKR 55,000
            <br />
            <br />
            <Text style={{ color: "#888888", fontSize: 12 }}>
              Other Expenditure
            </Text>
            <br />
            LKR 20,000
          </Text>
          <View style={styles.zoneLabel}>
            <Text style={styles.zoneLabelTextA}> Zone A </Text>
          </View>
        </View>

        <View style={styles.rectangle}>
          <Text style={styles.date}>
            <Text style={{ fontSize: 25 }}>15</Text>
            <br />
            June
          </Text>
          <View style={styles.separator}></View>
          <Text style={styles.text}>
            <Text style={{ color: "#888888", fontSize: 12 }}>Wages Paid</Text>{" "}
            <br />
            LKR 55,000
            <br />
            <br />
            <Text style={{ color: "#888888", fontSize: 12 }}>
              Other Expenditure
            </Text>
            <br />
            LKR 20,000
          </Text>
          <View style={styles.zoneLabel}>
            <Text style={styles.zoneLabelTextB}> Zone B </Text>
          </View>
        </View>

        <View style={styles.rectangle}>
          <Text style={styles.date}>
            <Text style={{ fontSize: 25 }}>18</Text>
            <br />
            June
          </Text>
          <View style={styles.separator}></View>
          <Text style={styles.text}>
            <Text style={{ color: "#888888", fontSize: 12 }}>Wages Paid</Text>{" "}
            <br />
            LKR 55,000
            <br />
            <br />
            <Text style={{ color: "#888888", fontSize: 12 }}>
              Other Expenditure
            </Text>
            <br />
            LKR 20,000
          </Text>
          <View style={styles.zoneLabel}>
            <Text style={styles.zoneLabelTextC}> Zone C </Text>
          </View>
        </View>

        <View style={styles.rectangle}>
          <Text style={styles.date}>
            <Text style={{ fontSize: 25 }}>18</Text>
            <br />
            June
          </Text>
          <View style={styles.separator}></View>
          <Text style={styles.text}>
            <Text style={{ color: "#888888", fontSize: 12 }}>Wages Paid</Text>{" "}
            <br />
            LKR 55,000
            <br />
            <br />
            <Text style={{ color: "#888888", fontSize: 12 }}>
              Other Expenditure
            </Text>
            <br />
            LKR 20,000
          </Text>
          <View style={styles.zoneLabel}>
            <Text style={styles.zoneLabelTextD}> Zone D </Text>
          </View>
        </View>
      </View>
    </View>
  );
}
