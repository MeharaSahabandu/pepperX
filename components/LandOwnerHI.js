import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Modal,
  TextInput,
  Picker,
  Platform,
  StyleSheet,
  KeyboardAvoidingView,
} from "react-native";
// import DatePicker from 'react-native-date-picker';
// import ModalDateTime from 'react-native-modal-datetime-picker';
import DatePicker from "react-native-modern-datepicker";
import { getFormatedDate } from "react-native-modern-datepicker";
import { collection, query, getDocs } from "firebase/firestore";
import { styles } from "../css/AllIncomeStyles";
import { db } from "./config";

export default function LandOwnerHI() {
  const [incomeData, setIncomeData] = useState([]);

  const [isAddPopupVisible, setIsAddPopupVisible] = useState(false);
  const [newIncome, setNewIncome] = useState("");
  const [newQty, setNewQty] = useState("");
  const [selectedZone, setSelectedZone] = useState("A"); // Default value
  //   const [selectedDate, setSelectedDate] = useState(new Date());

  const [openStartDatePicker, setOpenStartDatePicker] = useState(false);
  const today = new Date();
  const startDate = getFormatedDate(
    today.setDate(today.getDate() + 1),
    "YYYY/MM/DD"
  );
  const [selectedStartDate, setSelectedStartDate] = useState("");
  const [startedDate, setStartedDate] = useState("12/12/2023");

  function handleChangeStartDate(propDate) {
    setStartedDate(propDate);
  }

  const handleOnPressStartDate = () => {
    setOpenStartDatePicker(!openStartDatePicker);
  };

  const zones = ["A", "B", "C", "D"];

  const showAddPopup = () => {
    setIsAddPopupVisible(true);
  };

  const hideAddPopup = () => {
    setIsAddPopupVisible(false);
  };

  const handleAddIncome = () => {
    // Perform the logic to add a new entry to the database here

    // After adding, hide the popup
    hideAddPopup();
  };

  const getZoneBackgroundColor = (zone) => {
    switch (zone) {
      case "A":
        return styles.zoneRecA;
      case "B":
        return styles.zoneRecB;
      case "C":
        return styles.zoneRecC;
      case "D":
        return styles.zoneRecD;
      default:
        return {};
    }
  };

  useEffect(() => {
    // Fetch data from the 'harvestIncome' collection
    const fetchIncomeData = async () => {
      const q = query(collection(db, "harvestIncome"));
      try {
        const querySnapshot = await getDocs(q);

        const data = [];
        querySnapshot.forEach((doc) => {
          const { income, zone, qty } = doc.data();
          data.push({ income, zone, qty });
        });

        setIncomeData(data);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchIncomeData();
  }, []);

  return (
    <>
      <KeyboardAvoidingView
        behavior={Platform.OS == "ios" ? "padding" : ""}
        style={{
          width: "100%",
          height: "100%",
          backgroundColor: "#fff",
        }}
      >
        <TouchableOpacity style={styles.addButton} onPress={showAddPopup}>
          <Text style={styles.addButtonText}>+</Text>
        </TouchableOpacity>

        <Modal
          animationType="slide"
          transparent={true}
          visible={isAddPopupVisible}
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <Text style={styles.modalTitle}>Add New Entry</Text>
              <TextInput
                style={styles.input}
                placeholder="Income"
                keyboardType="numeric"
                value={newIncome}
                onChangeText={(text) => setNewIncome(text)}
              />
              <Picker
                selectedValue={selectedZone}
                placeholder="Select Zone"
                onValueChange={(itemValue, itemIndex) =>
                  setSelectedZone(itemValue)
                }
                style={styles.picker}
              >
                {zones.map((zone) => (
                  <Picker.Item key={zone} label={zone} value={zone} />
                ))}
              </Picker>
              <TextInput
                style={styles.input}
                placeholder="Quantity"
                keyboardType="numeric"
                value={newQty}
                onChangeText={(text) => setNewQty(text)}
              />
              <View>
                <TouchableOpacity
                  style={styles.inputBtn}
                  onPress={handleOnPressStartDate}
                >
                  <Text placeholder="Select Date">{selectedStartDate}</Text>
                </TouchableOpacity>
              </View>
              <TouchableOpacity
                style={styles.ModaladdButton}
                onPress={handleAddIncome}
              >
                <Text style={{ color: "white" }}>Add</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.ModalcancelButton}
                onPress={hideAddPopup}
              >
                <Text style={{ color: "white" }}>Cancel</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>

        {/* Create modal for date picker */}

        <Modal
          animationType="slide"
          transparent={true}
          visible={openStartDatePicker}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <DatePicker
                mode="calendar"
                minimumDate={startDate}
                selected={startedDate}
                onDateChanged={handleChangeStartDate}
                onSelectedChange={(date) => setSelectedStartDate(date)}
                options={{
                  backgroundColor: "#F0FFFF",
                  textHeaderColor: "#05AF6D",
                  textDefaultColor: "#05AF6D",
                  selectedTextColor: "#FFF",
                  mainColor: "#05AF6D",
                  textSecondaryColor: "#FFFFFF",
                  borderColor: "rgba(122, 146, 165, 0.1)",
                }}
              />

              <TouchableOpacity onPress={handleOnPressStartDate}>
                <Text style={{ color: "#05AF6D" }}>Done</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>

        {/* End of modal for date picker */}

        <ScrollView>
          {incomeData.map((item, index) => (
            <View key={index} style={styles.rectangle}>
              <Text style={styles.date}>
                <Text style={{ fontSize: 25 }}>12</Text>
                <br />
                June
              </Text>
              <View style={styles.separator} />
              <Text style={styles.text}>
                <Text style={{ color: "#888888", fontSize: 14 }}>
                  Income Generated
                </Text>
                <br />
                <Text style={{ color: "black", fontSize: 24 }}>
                  LKR, {item.income}
                </Text>
              </Text>
              <View style={styles.columnContainer}>
                <View
                  style={[styles.zoneRec, getZoneBackgroundColor(item.zone)]}
                >
                  <Text style={styles.zoneRecText}>{`Zone ${item.zone}`}</Text>
                </View>
                <View style={styles.qtyRec}>
                  <Text style={styles.qtyRecText}>{`QTY ${item.qty}`}</Text>
                </View>
              </View>
            </View>
          ))}
        </ScrollView>
      </KeyboardAvoidingView>
    </>
  );
}
