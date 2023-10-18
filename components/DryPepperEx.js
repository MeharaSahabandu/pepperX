import React, { useState, useEffect } from "react";
import { styles } from "../css/AllIncomeStyles";
import { View, Text, ScrollView } from "react-native";
import { collection, query, getDocs } from "firebase/firestore";
import { db } from "./config";

export default function DryPepperEx() {
  const [drypepperEx, setDrypepperEx] = useState([]);

  useEffect(() => {
    const fetchDrypepperEx = async () => {
      const q = query(collection(db, "dryPepperEx"));
      try {
        const querySnapshot = await getDocs(q);

        const data = [];
        querySnapshot.forEach((doc) => {
          const { expense } = doc.data();
          data.push({ expense });
        });

        setDrypepperEx(data);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchDrypepperEx();
  }, []);

  return (
    <ScrollView>
      {drypepperEx.map((item, index) => (
        <View key={index} style={styles.rectangle}>
          <Text style={styles.date}>
            <Text style={{ fontSize: 25 }}>12</Text>
            {"\n"}
            June
          </Text>
          <View style={styles.separator} />
          <Text style={styles.text}>
            <Text style={{ color: "#888888", fontSize: 14 }}>
              Expense Incurred
            </Text>
            {"\n"}
            <Text style={{ color: "black", fontSize: 24 }}>
              LKR {item.expense}
            </Text>
          </Text>
        </View>
      ))}
    </ScrollView>
  );
}
