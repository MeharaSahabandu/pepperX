import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import { collection, query, getDocs } from "firebase/firestore";
import { styles } from "../css/BarScreenStyles";
import { db } from "./config";
import ChartComponent from "./BarGraph";

export default function BarScreen() {
  const [totalPlantEx, setTotalPlantEx] = useState(0);
  const [totalPepperIncome, setTotalPepperIncome] = useState(0);
  const [totalHarvestIncome, setTotalHarvestIncome] = useState(0);
  const [totalHarvestExpenditure, setTotalHarvestExpenditure] = useState(0);
  const [totalDryPepperExpenditure, setTotalDryPepperExpenditure] = useState(0);
  const [totalMaintainExpenditure, setMaintainExpenditure] = useState(0);

  useEffect(() => {
    const fetchPlantationExpenditure = async () => {
      const q = query(collection(db, "plantationEx"));
      let total = 0;

      try {
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
          const { otherEx, wages } = doc.data();
          total += otherEx + wages;
        });

        setTotalPlantEx(total);
      } catch (error) {
        console.error("Error fetching plantation expenditure: ", error);
      }
    };

    const fetchDryPepperIncome = async () => {
      const q = query(collection(db, "machineOperations"));
      let total = 0;

      try {
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
          const { income } = doc.data();
          total += income;
        });

        setTotalPepperIncome(total);
      } catch (error) {
        console.error("Error fetching machine operations income: ", error);
      }
    };

    const fetchHarvestIncome = async () => {
      const q = query(collection(db, "harvestIncome"));
      let total = 0;

      try {
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
          const { income } = doc.data();
          total += income;
        });

        setTotalHarvestIncome(total);
      } catch (error) {
        console.error("Error fetching harvest income: ", error);
      }
    };
    const fetchHarvestExpenditure = async () => {
      const q = query(collection(db, "harvestEx"));
      let total = 0;

      try {
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
          const { expense, wages } = doc.data();
          total += expense + wages;
        });

        setTotalHarvestExpenditure(total);
      } catch (error) {
        console.error("Error fetching harvest expenditure: ", error);
      }
    };

    const fetchDryPepperExpenditure = async () => {
      const q = query(collection(db, "dryPepperEx"));
      let total = 0;

      try {
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
          const { expense } = doc.data();
          total += expense;
        });

        setTotalDryPepperExpenditure(total);
      } catch (error) {
        console.error("Error fetching dry pepper expenditure: ", error);
      }
    };

    const fetchMaintainExpenditure = async () => {
      const q = query(collection(db, "maintainEx"));
      let total = 0;

      try {
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
          const { other, wages } = doc.data();
          total += other + wages;
        });

        setMaintainExpenditure(total);
      } catch (error) {
        console.error("Error fetching dry pepper expenditure: ", error);
      }
    };

    fetchPlantationExpenditure();
    fetchDryPepperIncome();
    fetchHarvestIncome();
    fetchHarvestExpenditure();
    fetchDryPepperExpenditure();
    fetchMaintainExpenditure();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.marginContainer}>
        <ChartComponent />
        <View style={styles.rectangle}>
          <Text style={[styles.text, { color: "#F2B02F" }]}>
            Plantation Expenditure
          </Text>
          <View style={styles.horizontalLine} />
          <Text style={styles.amount}>LKR {totalPlantEx}</Text>
        </View>
        <View style={styles.rectangle}>
          <Text style={[styles.text, { color: "#05AF6D" }]}>
            Drying Pepper Income
          </Text>
          <View style={styles.horizontalLine} />
          <Text style={styles.amount}>LKR {totalPepperIncome}</Text>
        </View>
        <View style={styles.rectangle}>
          <Text style={[styles.text, { color: "#05AF6D" }]}>
            Harvesting Income
          </Text>
          <View style={styles.horizontalLine} />
          <Text style={styles.amount}>LKR {totalHarvestIncome}</Text>
        </View>
        <View style={styles.rectangle}>
          <Text style={[styles.text, { color: "#F2B02F" }]}>
            Maintenance Expenditure
          </Text>
          <View style={styles.horizontalLine} />
          <Text style={styles.amount}>LKR {totalMaintainExpenditure}</Text>
        </View>
        <View style={styles.rectangle}>
          <Text style={[styles.text, { color: "#F2B02F" }]}>
            Harvesting Expenditure
          </Text>
          <View style={styles.horizontalLine} />
          <Text style={styles.amount}>LKR {totalHarvestExpenditure}</Text>
        </View>
        <View style={styles.rectangle}>
          <Text style={[styles.text, { color: "#F2B02F" }]}>
            Drying Pepper Expenditure
          </Text>
          <View style={styles.horizontalLine} />
          <Text style={styles.amount}>LKR {totalDryPepperExpenditure}</Text>
        </View>
      </View>
    </View>
  );
}
