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
import MaintenanceDataList from "./MaintenanceDataList";
import { db } from "./config";

export default function MaintenanceDetails() {
  const [isAddPopupVisible, setIsAddPopupVisible] = useState(false);
  const [wages, setNewWages] = useState("");
  const [other, setNewOther] = useState("");
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
  const [maintenanceData, setMaintenanceData] = useState([]);

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
  const refetchMaintenanceData = async () => {
    const q = query(collection(db, "maintainEx"));
    try {
      const querySnapshot = await getDocs(q);

      const data = [];
      querySnapshot.forEach((doc) => {
        const { wages, otherEx, zone, date } = doc.data();
        data.push({ wages, otherEx, zone, date });
      });

      setMaintenanceData(data);
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };
  const handleAddExpenditure = () => {
    const formattedDate = getFormatedDate(selectedStartDate, "YYYY/MM/DD");
    const parsedWages = parseInt(wages, 10); // Convert wages to an integer
    const parsedOther = parseInt(other, 10); // Convert other to an integer
    addDoc(collection(db, "maintainEx"), {
      date: formattedDate,
      wages: parsedWages, // Send wages as an integer
      zone: zone,
      other: parsedOther, // Send other as an integer
    })
      .then(() => {
        console.log("Maintenance Data Submitted");
        setNewWages("");
        setNewOther("");
        setSelectedZone("");
        refetchMaintenanceData();
      })
      .catch((error) => {
        console.log(error);
      });
    hideAddPopup();
  };
  const [selectedRange, setSelectedRange] = useState("last30");
  useEffect(() => {
    const fetchMaintenanceData = async () => {
      const q = query(collection(db, "maintainEx"));
      try {
        const querySnapshot = await getDocs(q);
        const data = [];
        querySnapshot.forEach((doc) => {
          const { wages, otherEx, zone, date } = doc.data();
          data.push({ wages, otherEx, zone, date });
        });
        setMaintenanceData(data );
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };
    fetchMaintenanceData();
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
              <br/>
              <TextInput
                style={styles.input}
                placeholder="Other Expenditures"
                keyboardType="numeric"
                value={other}
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
            <Text style={styles.headerText}>
              <b>Maintenance</b>
              <br />
            </Text>{" "}
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
            <br/>
            <View>
              {maintenanceData.map((item, index) => (
                <View key={index} style={styles.rectangle}>
                  <Text style={styles.date}>
                    <Text style={{ fontSize: 25 }}>
                      {item.date.split("/")[2]}
                    </Text>
                    <br />
                    {getMonthName(parseInt(item.date.split("/")[1]))}
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
                    LKR {item.other}
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