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
  const getMonthName = (monthNumber) => {
    const monthNames = [
      "Jan",
      "Feb",
      "Mar",
      "April",
      "May",
      "June",
      "July",
      "Aug",
      "Sept",
      "Oct",
      "Nov",
      "Dec",
    ];
    return monthNames[monthNumber - 1] || "";
  };
  const [selectedStartDate, setSelectedStartDate] = useState("");
  const [startedDate, setStartedDate] = useState("12/12/2023");
  function handleChangeStartDate(propDate) {
    setStartedDate(propDate);
  }
  const [plantationData, setPlantationData] = useState([]);
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
  const refetchPlantationData = async () => {
    const q = query(collection(db, "plantationEx"));
    try {
      const querySnapshot = await getDocs(q);

      const data = [];
      querySnapshot.forEach((doc) => {
        const { wages, otherEx, zone, date } = doc.data();
        data.push({ wages, otherEx, zone, date });
      });

      setPlantationData(data);
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
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
        refetchPlantationData();
      })
      .catch((error) => {
        console.log(error);
      });
    hideAddPopup();
  };
  const [selectedRange, setSelectedRange] = useState("last30");
  useEffect(() => {
    const fetchPlantationData = async () => {
      const q = query(collection(db, "maintainEx"));
      try {
        const querySnapshot = await getDocs(q);
        const data = [];
        querySnapshot.forEach((doc) => {
          const { wages, other, zone, date } = doc.data();
          data.push({ wages, other, zone, date });
        });

        const filteredData = filterDataByRange(data, selectedRange);
        setPlantationData(filteredData);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };
    fetchPlantationData();
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
                style={styles.zonepicker}
              >
                {zones.map((zone) => (
                  <Picker.Item key={zone} label={zone} value={zone} />
                ))}
              </Picker>
              <br />
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
            <Picker
              selectedValue={selectedRange}
              onValueChange={(itemValue, itemIndex) =>
                setSelectedRange(itemValue)
              }
              style={styles.picker}
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
            <TouchableOpacity style={styles.addButton} onPress={showAddPopup}>
              <Text style={styles.addButtonText}>+</Text>
            </TouchableOpacity>
            <br />
            <View>
              {plantationData.map((item, index) => (
                <View key={index} style={styles.rectangle}>
                  <Text style={styles.date}>
                    <Text style={{ fontSize: 25 }}>
                      {item.date.split("/")[2]}
                    </Text>
                    <br />
                    {getMonthName(parseInt(item.date.split("/")[1]))}
                    <br />
                    <Text style={{ fontSize: 11 }}>
                      {item.date.split("/")[0]}
                    </Text>
                  </Text>
                  <View style={styles.separator} />
                  <Text style={styles.text}>
                    <Text style={{ color: "#888888", fontSize: 12 }}>
                      Wages Paid
                    </Text>
                    <br />
                    LKR {item.wages}
                    <br />
                    <br />
                    <Text style={{ color: "#888888", fontSize: 12 }}>
                      Other Expenditure
                    </Text>
                    <br />
                    LKR {item.otherEx}
                  </Text>
                  <View style={styles.columnContainer}>
                    <View
                      style={[
                        styles.zoneRec,
                        getZoneBackgroundColor(item.zone),
                      ]}
                    >
                      <Text style={styles.zoneRecText}>Zone {item.zone}</Text>
                    </View>
                  </View>
                </View>
              ))}
            </View>
          </View>
        </View>
      </KeyboardAvoidingView>
    </>
  );
}
