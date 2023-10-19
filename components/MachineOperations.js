import React, { useState } from 'react';
import Header from "./Header";
import DatePicker from "react-native-modern-datepicker";
import { getToday, getFormatedDate } from 'react-native-modern-datepicker';

import { View, TouchableOpacity, Text, Modal, StyleSheet } from 'react-native';

export default function MachineOperations() {

  const today = new Date();
  


  const [open, setOpen] = useState(false); //open and close the modal.
  const [date, setDate] = useState('12/12/2023');

  function handleOnPress () {
    setOpen(!open);
  }

  function handleDateChange(propDate) {
    setDate(propDate)
  }

  return (
    <>
      <Header />
      <View>
        <DatePicker 
          mode='calendar'
          selected={date}
          onDateChange={handleDateChange}
        />
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "red",
    borderRadius: 20,
    width: '90%',
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
});