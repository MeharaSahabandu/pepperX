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
import { styles } from "../css/AllIncomeStyles";
import { db } from "./config";

// Function to map month number to month name
const getMonthName = (monthNumber) => {
  const monthNames = [
    "Jan", "Feb", "Mar", "April",
    "May", "June", "July", "Aug",
    "Sept", "Oct", "Nov", "Dec"
  ];
  return monthNames[monthNumber - 1] || "";
};

export default function LandOwnerHI() {
  const [incomeData, setIncomeData] = useState([]);
  const [isAddPopupVisible, setIsAddPopupVisible] = useState(false);
  const [newIncome, setNewIncome] = useState("");
  const [newQty, setNewQty] = useState("");
  const [selectedZone, setSelectedZone] = useState("A"); // Default value

  const [openStartDatePicker, setOpenStartDatePicker] = useState(false);
  const today = new Date();
  const startDate = getFormatedDate(
    today.setDate(today.getDate() + 1),
    "YYYY/MM/DD"
  );
  const [selectedStartDate, setSelectedStartDate] = useState("");
  const [startedDate, setStartedDate] = useState("12/12/2023");

  const filterDataByRange = (data, range) => {
    const currentDate = new Date();
    switch (range) {
      case "last7":
        // Filter data for the last 7 days
        const last7Days = new Date(
          currentDate.getFullYear(),
          currentDate.getMonth(),
          currentDate.getDate() - 7
        );
        return data.filter((item) => new Date(item.date) >= last7Days);
      case "last30":
        // Filter data for the last 30 days
        const last30Days = new Date(
          currentDate.getFullYear(),
          currentDate.getMonth(),
          currentDate.getDate() - 30
        );
        return data.filter((item) => new Date(item.date) >= last30Days);
      case "lastyear":
        // Filter data for the last year
        const lastYear = new Date(
          currentDate.getFullYear() - 1,
          currentDate.getMonth(),
          currentDate.getDate()
        );
        return data.filter((item) => new Date(item.date) >= lastYear);
      case "all":
        // No filtering, return all data
        return data;
      default:
        return data;
    }
  };

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
  
  const handleAddIncome = async () => {
    // Parse income and qty as numbers
    const parsedIncome = parseFloat(newIncome);
    const parsedQty = parseInt(newQty, 10); // Assuming it's an integer, use parseFloat if it's a decimal.
  
    if (isNaN(parsedIncome) || isNaN(parsedQty)) {
      console.error("Income and Quantity must be valid numbers.");
      return; // Exit the function if parsing fails.
    }
  
    // Create a new object representing the data you want to add
    const newItem = {
      income: parsedIncome, // Use the parsed income value
      zone: selectedZone,
      qty: parsedQty, // Use the parsed qty value
      date: selectedStartDate,
    };
  
    try {
      // Add the new item to the 'harvestIncome' collection
      const docRef = await addDoc(collection(db, "harvestIncome"), newItem);
  
      // Log the ID of the newly created document
      console.log("Document written with ID: ", docRef.id);
  
      // Clear the input fields or reset your state as needed
      setNewIncome("");
      setSelectedZone("");
      setNewQty("");
      setSelectedStartDate("");

      fetchIncomeData();
  
      // Hide the popup
      hideAddPopup();
    } catch (error) {
      console.error("Error adding document: ", error);
    }
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

  // income, zone, qty, date
    // Fetch data from the 'harvestIncome' collection
    const [selectedRange, setSelectedRange] = useState("last30");

    const fetchHarvestIncomeData = async () => {
      const q = query(collection(db, "harvestIncome"));
      try {
        const querySnapshot = await getDocs(q);
        const data = [];
        querySnapshot.forEach((doc) => {
          const { income, zone, qty, date } = doc.data();
          data.push({ income, zone, qty, date });
        });

        const filteredData = filterDataByRange(data, selectedRange);
        setIncomeData(filteredData);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };
    

    useEffect(() => {
        // Fetch data from the 'harvestIncome' collection
        fetchHarvestIncomeData(); // Fetch data initially
    
        // ... other code ...
    
      }, [selectedRange]);


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
      <View style={styles.rowContainer}>
        <Picker
              selectedValue={selectedRange}
              onValueChange={(itemValue, itemIndex) =>
                setSelectedRange(itemValue)
              }
              style={styles.picker2}
            >
              <Picker.Item label="Last 7 Days" value="last7" />
              <Picker.Item label="Last 30 Days" value="last30" />
              <Picker.Item label="Last Year" value="lastyear" />
              <Picker.Item label="All" value="all" />
            </Picker>
            <TouchableOpacity
              style={styles.last30DaysButtonP}
              onPress={() => {
                // Handle the selected range here
                switch (selectedRange) {
                  case "last7":
                    // Handle "Last 7 Days" logic
                    break;
                  case "last30":
                    // Handle "Last 30 Days" logic
                    break;
                  case "lastyear":
                    // Handle "Last Year" logic
                    break;
                  case "all":
                    // Handle "All" logic
                    break;
                  default:
                    break;
                }
              }}
            ></TouchableOpacity>
        
    </View>

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
        <Text style={styles.modalTitle}>Add New Income</Text>
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
            onValueChange={(itemValue, itemIndex) => setSelectedZone(itemValue)}
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
              <Text style={{ fontSize: 25 }}>{item.date.split('/')[2]}</Text>
                <br />
                {getMonthName(parseInt(item.date.split('/')[1]))}
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
