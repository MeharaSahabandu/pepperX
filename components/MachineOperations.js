import React, { useState, useEffect } from 'react';
import Header from "./Header";
import DatePicker from "react-native-modern-datepicker";
import { getToday, getFormatedDate } from 'react-native-modern-datepicker';
import {Card} from "react-native-elements";

import { View, TouchableOpacity, Text, TextInput, Modal, StyleSheet, ScrollView, Picker, Dimensions, FlatList } from 'react-native';
import { collection, query, getDocs, addDoc } from "firebase/firestore";
import { db } from "./config";

export default function MachineOperations() {

  const today = new Date();
  const [open, setOpen] = useState(false); //open and close the modal.
  const [date, setDate] = useState('12/12/2023');
  const [bookings, setBookings] = useState([])
  const [openStartDatePicker, setOpenStartDatePicker] = useState(false);
  const [selectedStartDate, setSelectedStartDate] = useState("");
  const startDate = getFormatedDate(today.setDate(today.getDate()), 'YYYY/MM/DD');
  const [bookingData, setBookingData] = useState([]);

  //Variables of form
  const [customerName, setCustomerName] = useState("");
  const [qty, setQty] = useState("");
  const [income, setIncome] = useState("");
  const [time, setTime] = useState("");
  


  

    const fetchBookingData = async () => {
      try {
        const q = query(collection(db, "machineOperations"));
        const querySnapshot = await getDocs(q);

        const data = [];
        querySnapshot.forEach((doc) => {
          const{date, customerName, qty, income, time} = doc.data();
          data.push({date, customerName, qty, income, time});
        });

        setBookingData(data);
      } catch (error) {
        console.error("Error fetching maintenance data: ", error);
      }
    };

    
  useEffect(() => {
    fetchBookingData();
  }, []);

  const customerData = [
    { date: '2023/10/11', customerName: 'Kulanaka Bandara', qty: 10, income: "12,000", time: "9.00am-10.00am"},
    { date: '2023/10/11', customerName: 'Kula Bandara', qty: 10, income: "12,000", time: "9.00am-10.00am"},
    { date: '2023/10/13', customerName: 'Kulanaka ', qty: 10, income: "12,000", time: "9.00am-10.00am"},
    { date: '2023/10/14', customerName: 'Kula', qty: 10, income: "12,000", time: "9.00am-10.00am"},
    // Add more customer data as needed
  ];


  const handleAddBooking = () => {
    const formattedDate = getFormatedDate(selectedStartDate, "YYYY/MM/DD");
    const parsedQty = parseInt(qty, 10); // Convert wages to an integer
  
    addDoc(collection(db, "machineOperations"), {
      date: formattedDate,
      customerName: customerName,
      qty: qty,
      income: income,
      time: time,
    })
    .then(() => {
      console.log("Booking Data Submitted");
       setCustomerName("");
      setTime("");
      setIncome("");
      setQty("");
      fetchBookingData();
    })
    .catch((error) => {
      console.log(error);
    });
  };

  const handleOnPressStartDate = () => {
    setOpenStartDatePicker(!openStartDatePicker);
  };

  function getBookingsForDate(propDate) {
    const filteredBookings = bookingData.filter((customer) => customer.date === propDate);
    setBookings(filteredBookings);
  }

  function handleChangeStartDate(propDate) {
    setStartedDate(propDate);
  }

  function handleOnPressPlus() {
    setOpen(true);
  }

  function closeModal() {
    setOpen(false);
  }

  function handleDateChange(propDate) {
    setDate(propDate)
    getBookingsForDate(propDate)

  }
  console.log("date>>>",date);

  return (
    <>
    <ScrollView style={{ flex: 1}}>
      <Header />
      <View>
        <DatePicker 
          mode='calendar'
          selected={date}
          onDateChange={handleDateChange}
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
      </View>
      <View style={styles.displayContainer}>
        <Text style={styles.mainTopic}>Machine Operations</Text>
        {bookings.map((customer, index) => (
          <View style={styles.cardContainer}>
          <View style={{marginHorizontal: 13, marginVertical: 10}}>
            <Text style={styles.headingText}>{customer.time}</Text>
            <View>
              <View style={styles.cardContent}>
                <View style={styles.leftContent}>
                  <Text style={styles.customerName}>Customer Name</Text>
                </View>
                <View style={styles.rightContent}>
                  <Text style={styles.customerNameVar}>{customer.customerName}</Text>
                </View>
              </View>
              <View style={styles.cardContent}>
                <View style={styles.leftContent}>
                  <Text style={styles.customerName}>Quantity</Text>
                </View>
                <View style={styles.rightContent}>
                  <Text style={styles.customerNameVar}>{customer.qty}Kg</Text>
                </View>
              </View>
              <View style={styles.cardContent}>
                <View style={styles.leftContent}>
                  <Text style={styles.customerName}>Revenue</Text>
                </View>
                <View style={styles.rightContent}>
                  <Text style={styles.customerNameVar}>LKR {customer.income}</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        ))}
      </View>
    </ScrollView>
    
    <TouchableOpacity style={styles.floatingButton} onPress={handleOnPressPlus}>
      <Text style={styles.plusIcon}>+</Text>
    </TouchableOpacity>

    <Modal
      animationType="slide" // Choose the animation type you prefer
      transparent={true}
      visible={open}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          {/* Add your modal content here */}
          <Text style={styles.modalTitle}>Add New Entry</Text>
          <TextInput
            style={styles.input}
            placeholder="Customer Name"
            keyboardType="numeric"
            value={customerName}
            onChangeText={(text) => setCustomerName(text)}
          />
            <TextInput
              style={styles.input}
              placeholder="Time(Stat time - EndTime)"
              keyboardType="numeric"
              value={time}
              onChangeText={(text) => setTime(text)}
            />
            <View>
              <TouchableOpacity
                style={styles.inputBtn}
                 onPress={handleOnPressStartDate}
              >
                <Text placeholder="Select Date">{selectedStartDate}</Text>
              </TouchableOpacity>
            </View>
            <TextInput
              style={styles.input}
              placeholder="Quantity"
              keyboardType="numeric"
              value={qty}
              onChangeText={(text) => setQty(text)}
            />
            <TextInput
              style={styles.input}
               placeholder="Enter the income (LKR)"
              keyboardType="numeric"
              value={income}
              onChangeText={(text) => setIncome(text)}
            />

            <TouchableOpacity style={styles.ModaladdButton} onPress={handleAddBooking}>
              <Text style={{ color: "white" }}>Add Booking</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.ModalcancelButton} onPress={closeModal}>
              <Text style={{ color: "white" }}>Close</Text>
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
                selected={date}
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
    </>
  )
}

const deviceWidth = Math.round(Dimensions.get('window').width)

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.6)', // Semi-transparent black background
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: "#05AF6D",
  },
  modalView: {
    margin: 20,
    backgroundColor: "#FAF9F6",
    borderRadius: 20,
    width: '90%',
    height: 300,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  ModaladdButton: {
    backgroundColor: "#05AF6D", // Change the background color to your preferred color
    borderRadius: 5,
    padding: 10,
    margin: 5,
    borderWidth: 1,
    borderColor: "#05AF6D",
    color: 'white', // Text color
    alignItems: 'center',
  },
  ModalcancelButton: {
    backgroundColor: "red", // Change the background color to your preferred color
    borderRadius: 5,
    padding: 10,
    margin: 5,
    borderWidth: 1,
    borderColor: 'red',
    color: 'white', // Text color
    alignItems: 'center', 
  },
  modalContent: {
    width: 300,
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 5,
  },
  input: {
    height: 40,
    borderColor: "#05AF6D",
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    paddingLeft: 10,
  },
  inputBtn: {
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "#05AF6D",
    height: 41,
    paddingLeft: 8,
    fontSize: 18,
    justifyContent: "center",
    marginTop: 1,
    marginBottom: 20,
  },
  cardContainer: {
    marginTop: 15,
    width: deviceWidth -30,
    height: 150,
    backgroundColor: "#FFF",
    borderRadius: 20,
    shadowColor: "black",
    shadowOffset: {
      width: 3,
      height: 3,
    },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 9,
  },
  displayContainer: {
    alignItems: "center",
    marginTop: 10,
    marginBottom: 10
  },

  mainTopic: {
    fontSize: 20,
    marginRight: "auto",
    fontWeight: "bold",
  },

  headingText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  cardContent: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  leftContent: {
    flex: 1,
    justifyContent: 'flex-start',
  },
  rightContent: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
  },
  customerName: {
    fontSize: 14,
  },
  customerNameVar: {
    fontSize: 14,
    color: "#05AF6D"
  },
  floatingButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    width: 40,
    height: 40,
    backgroundColor: "#05AF6D", // Set your desired background color
    borderRadius: 25, // To make it round
    justifyContent: "center",
    alignItems: "center",
    marginLeft: "85%",
    marginTop: "2%",
  },
  plusIcon: {
    color: "#fff",
    fontSize: 30,
    marginTop: "-20%",
  },
  addButton: {
    
    
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: "85%",
    marginTop: "2%",
  },
  addButtonText: {
    color: "#fff",
    fontSize: 40,
    marginTop: "-25%",
  },
  menuModal: {
    position: 'absolute',
    bottom: 80,
    right: 20,
    width: 150, // Set the desired width of the menu
    backgroundColor: 'white',
    borderRadius: 10,
  },
  menuItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    alignItems: 'center',
  },
  menuItemText: {
    fontSize: 16,
  },
});