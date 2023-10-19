import React, { useState } from 'react';
import Header from "./Header";
import DatePicker from "react-native-modern-datepicker";
import { getToday, getFormatedDate } from 'react-native-modern-datepicker';
import {Card} from "react-native-elements";

import { View, TouchableOpacity, Text, Modal, StyleSheet, ScrollView, Dimensions } from 'react-native';

export default function MachineOperations() {

  const today = new Date();
  const startDate = getFormatedDate(today.setDate(today.getDate()), 'YYYY/MM/DD')


  const [open, setOpen] = useState(false); //open and close the modal.
  const [date, setDate] = useState('12/12/2023');
  const [bookings, setBookings] = useState([])

  const customerData = [
    { date: '2023/10/11', customerName: 'Kulanaka Bandara', qty: 10, income: "12,000", time: "9.00am-10.00am"},
    { date: '2023/10/12', customerName: 'Kula Bandara', qty: 10, income: "12,000", time: "9.00am-10.00am"},
    { date: '2023/10/13', customerName: 'Kulanaka ', qty: 10, income: "12,000", time: "9.00am-10.00am"},
    { date: '2023/10/14', customerName: 'Kula', qty: 10, income: "12,000", time: "9.00am-10.00am"},
    // Add more customer data as needed
  ];

  function getBookingsForDate(propDate) {
    const filteredBookings = customerData.filter((customer) => customer.date === propDate);
    setBookings(filteredBookings);
  }

  function handleOnPress () {
    setOpen(!open);
  }

  function handleDateChange(propDate) {
    setDate(propDate)
    getBookingsForDate(propDate)

  }
  console.log("date>>>",date);

  return (
    <ScrollView style={{ flex: 1}}>
      <Header />
      <View>
        <DatePicker 
          mode='calendar'
          selected={date}
          onDateChange={handleDateChange}
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
  )
}

const deviceWidth = Math.round(Dimensions.get('window').width)

const styles = StyleSheet.create({
  // centeredView: {
  //   flex: 1,
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   marginTop: 22,
  // },
  // modalView: {
  //   margin: 20,
  //   backgroundColor: "red",
  //   borderRadius: 20,
  //   width: '90%',
  //   padding: 35,
  //   alignItems: 'center',
  //   shadowColor: '#000',
  //   shadowOffset: {
  //     width: 0,
  //     height: 2,
  //   },
  //   shadowOpacity: 0.25,
  //   shadowRadius: 4,
  //   elevation: 5,
  // },
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
});