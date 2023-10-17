import React, { useState, useEffect } from "react";
import { styles } from "../css/AllIncomeStyles";
import { View, Text, ScrollView } from "react-native";
import { collection, query, getDocs } from "firebase/firestore";
import { db } from "./config";

export default function DryingPepperIncome() {
  const [incomeData, setIncomeData] = useState([]);

  useEffect(() => {
    const fetchIncomeData = async () => {
      const q = query(collection(db, "dryPepperIncome"));
      try {
        const querySnapshot = await getDocs(q);

        const data = [];
        querySnapshot.forEach((doc) => {
          const { income, qty } = doc.data();
          data.push({ income, qty });
        });

        setIncomeData(data);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchIncomeData();
  }, []);

  return (
    <ScrollView>
      {incomeData.map((item, index) => (
        <View key={index} style={styles.rectangle}>
          <Text style={styles.date}>
            <Text style={{ fontSize: 25 }}>12</Text>
            {"\n"} {/* Use {"\n"} to create a line break */}
            June
          </Text>
          <View style={styles.separator} />
          <Text style={styles.text}>
            <Text style={{ color: "#888888", fontSize: 14 }}>
              Income Generated
            </Text>
            {"\n"} {/* Use {"\n"} to create a line break */}
            <Text style={{ color: "black", fontSize: 24 }}>
              LKR {item.income}
            </Text>
          </Text>
          <View style={styles.columnContainer}>
            <View style={[styles.qtyRec, { marginTop: 50 }]}>
              <Text style={styles.qtyRecText}>QTY {item.qty} KG</Text>
            </View>
          </View>
        </View>
      ))}
    </ScrollView>
  );
}
