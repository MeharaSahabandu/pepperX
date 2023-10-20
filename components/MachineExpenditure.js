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


export default function MachineExpenditure() {
  const [expenseData, setExpenseData] = useState([]);

  const [isAddPopupVisible, setIsAddPopupVisible] = useState(false);
  const [newExpense, setNewExpense] = useState("");
  const [newWages, setNewWages] = useState("");
  const [newQty, setNewQty] = useState("");
  const [selectedZone, setSelectedZone] = useState('A'); // Default value
    //   const [selectedDate, setSelectedDate] = useState(new Date());

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

  const zones = ['A', 'B', 'C', 'D'];

  

  const showAddPopup = () => {
    setIsAddPopupVisible(true);
  };
  
  const hideAddPopup = () => {
    setIsAddPopupVisible(false);
  };

  // expense, wages , zone, qty, date
  
    // Fetch data from the 'harvestIncome' collection
    const [selectedRange, setSelectedRange] = useState("last30");

    const fetchHarvestExpenseData = async () => {
      const q = query(collection(db, "harvestEx"));
      try {
        const querySnapshot = await getDocs(q);
        const data = [];
        querySnapshot.forEach((doc) => {
          const { expense, wages , zone, qty, date } = doc.data();
          data.push({ expense, wages , zone, qty, date });
        });

        const filteredData = filterDataByRange(data, selectedRange);
        setExpenseData(filteredData);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };
    

    useEffect(() => {
        // Fetch data from the 'harvestIncome' collection
        fetchHarvestExpenseData(); // Fetch data initially
    
        // ... other code ...
    
      }, [selectedRange]);


  
  const handleAddExpense = async () => {
    // Parse income and qty as numbers
    const parsedExpense = parseFloat(newExpense);
    const parsedWages = parseFloat(newWages);
    const parsedQty = parseInt(newQty, 10); // Assuming it's an integer, use parseFloat if it's a decimal.
  
    if (isNaN(parsedExpense) || isNaN(parsedQty)) {
      console.error("Expense and Quantity must be valid numbers.");
      return; // Exit the function if parsing fails.
    }
  
    // Create a new object representing the data you want to add
    const newItem = {
      expense: parsedExpense, // Use the parsed Expense value
      zone: selectedZone,
      qty: parsedQty, // Use the parsed qty value
      wages: parsedWages,
      date: selectedStartDate,
    };
  
    try {
      // Add the new item to the 'harvestExpense' collection
      const docRef = await addDoc(collection(db, "harvestEx"), newItem);
  
      // Log the ID of the newly created document
      console.log("Document written with ID: ", docRef.id);
  
      // Clear the input fields or reset your state as needed
      setNewExpense("");
      setSelectedZone("");
      setNewQty("");
      setNewWages("");
      setSelectedStartDate("");

      fetchHarvestExpenseData(); // Call the function to fetch data again
  
      // Hide the popup
      hideAddPopup();
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };
  
  
  


  const getZoneBackgroundColor = (zone) => {
    switch (zone) {
      case "A":
        return styles.zoneRecA; // Define the style for Zone A background color
      case "B":
        return styles.zoneRecB; // Define the style for Zone B background color
      case "C":
        return styles.zoneRecC; // Define the style for Zone C background color
      case "D":
        return styles.zoneRecD; // Define the style for Zone D background color
      default:
        return {};
    }
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
        <Text style={styles.modalTitle}>Add New Expense</Text>
        <TextInput
            style={styles.input}
            placeholder="Expense"
            keyboardType="numeric"
            value={newExpense}
            onChangeText={(text) => setNewExpense(text)}
        />
        <TextInput
            style={styles.input}
            placeholder="Wages"
            keyboardType="numeric"
            value={newWages}
            onChangeText={(text) => setNewWages(text)}
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
        <TouchableOpacity style={styles.ModaladdButton} onPress={handleAddExpense}>
            <Text style={{ color: 'white' }}>Add</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.ModalcancelButton} onPress={hideAddPopup}>
            <Text style={{ color: 'white' }}>Cancel</Text>
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
      {expenseData.map((item, index) => (
        <View key={index} style={styles.rectangle}>
        <Text style={styles.date}>
          <Text style={{ fontSize: 25 }}>{item.date.split('/')[2]}</Text>
              <br />
              {getMonthName(parseInt(item.date.split('/')[1]))}
              <br/>
                    <Text style={{ fontSize: 11 }}>
                      {item.date.split("/")[0]}
                    </Text>
          </Text>
        <View style={styles.separator}></View>
        <Text style={styles.text}>
          <Text style={{ color: "#888888", fontSize: 12 }}>Wages Paid</Text>{" "}
          <br />
          LKR {item.wages}
          <br />
          <br />
          <Text style={{ color: "#888888", fontSize: 12 }}>Other Expenditure</Text>{" "}
          <br />
          LKR {item.expense}
          <br />
          <br />
        </Text>
        <View style={styles.columnContainer}>
          <View style={styles.zoneRec}>
          <View style={[styles.zoneRec, getZoneBackgroundColor(item.zone)]}>
              <Text style={styles.zoneRecText}>{`Zone ${item.zone}`}</Text>
            </View>
            <View style={styles.qtyRec}>
              <Text style={styles.qtyRecText}>{`QTY ${item.qty}`}</Text>
            </View>
          </View>
          
        </View>
      </View>
        
      ))}
    </ScrollView>
    </KeyboardAvoidingView>
    </>
  );
}

