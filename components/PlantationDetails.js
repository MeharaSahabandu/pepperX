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
import DatePicker from "react-native-modern-datepicker";
import { getFormatedDate } from "react-native-modern-datepicker";
import { collection, query, getDocs, addDoc } from "firebase/firestore";
import { styles } from "../css/PlantationDetailsCSS";
import PlantationDataList from "./PlantationDataList";
import { db } from "./config";

export default function PlantationDetails() {
  const [isAddPopupVisible, setIsAddPopupVisible] = useState(false);
  const [wages, setNewWages] = useState("");
  const [otherEx, setNewOther] = useState("");
  const [zone, setSelectedZone] = useState("A");

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

  const handleAddExpenditure = () => {
    const formattedDate = getFormatedDate(selectedStartDate, "YYYY/MM/DD");
    const parsedWages = parseInt(wages, 10); // Convert wages to an integer
    const parsedOther = parseInt(otherEx, 10); // Convert other to an integer
  
    addDoc(collection(db, "plantationEx"), {
      date: formattedDate,
      wages: parsedWages, // Send wages as an integer
      zone: zone,
      otherEx: parsedOther, // Send other as an integer
    })
      .then(() => {
        console.log("Plantation Data Submitted");
        setNewWages("");
        setNewOther("");
        setSelectedZone("");
      })
      .catch((error) => {
        console.log(error);
      });
    hideAddPopup();
  };
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
                placeholder="Wages"
                keyboardType="numeric"
                value={wages}
                onChangeText={(text) => setNewWages(text)}
              />
              <Picker
                selectedValue={zone}
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
                placeholder="Other Expenditures"
                keyboardType="numeric"
                value={otherEx}
                onChangeText={(text) => setNewOther(text)}
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
                onPress={handleAddExpenditure}
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

        {/* modal for date picker */}
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

        <View style={styles.container}>
          <View style={styles.marginContainer}>
            <Text style={styles.headerText}>
              <b>Plantation</b>
              <br />
            </Text>
            <TouchableOpacity
              style={styles.last30DaysButtonP}
              onPress={() => {
                // Handle "Last 30 days" button click action here
              }}
            >
              <Text style={styles.last30DaysButtonText}> Last 30 days </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.addButton} onPress={showAddPopup}>
              <Text style={styles.addButtonText}>+</Text>
            </TouchableOpacity>
            <PlantationDataList />
          </View>
        </View>
      </KeyboardAvoidingView>
    </>
  );
}
