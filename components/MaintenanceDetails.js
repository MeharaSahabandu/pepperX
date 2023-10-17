import React, { useState } from "react";
import { View, Text, TouchableOpacity, Modal, TextInput } from "react-native";
import { styles } from "../css/PlantationDetailsCSS";
import MaintenanceDataList from "./MaintenanceDataList";
import {collection, addDoc} from "firebase/firestore";
import { db } from "./config";

export default function MaintenanceDetails() {
  const [isModalVisible, setModalVisible] = useState(false);
  const [date, setDate] = useState("");
  const [zone, setZone] = useState("");
  const [wages, setWages] = useState("");
  const [other, setOther] = useState("");
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  const closeModal = () => {
    setModalVisible(false);
  };
  const handleSubmit = () =>{
    addDoc(collection(db,"maintainEx"), {
        date:date,
        zone:zone,
        wages:wages,
        other:other
    }).then(()=>{
        console.log("Data Submitted");
        setDate("");
        setZone("");
        setWages("");
        setOther("");
    }).catch((error)=>{
        console.log(error);
    })
  }
  return (
    <View style={styles.container}>
      <View style={styles.marginContainer}>
        <Text style={styles.headerText}>
          <b>Maintenance</b>
          <br />
        </Text>
        <TouchableOpacity
          style={styles.last30DaysButton}
          onPress={() => {
            // Handle "Last 30 days" button click action here
          }}
        >
          <Text style={styles.last30DaysButtonText}> Last 30 days </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.addButton} onPress={toggleModal}>
          <Text style={styles.addButtonText}>+</Text>
        </TouchableOpacity>
        <MaintenanceDataList />
        <Modal
          transparent={false}
          animationType="slide"
          visible={isModalVisible}
          onRequestClose={() => {}}
          style={styles.modalM}
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <Text style={styles.closeModalButton} onPress={closeModal}>
                X
              </Text>
              <Text style={styles.modalTopic}>
                <b>Maintenance Expenditure</b>
              </Text>
              <br />
              <TextInput
                style={styles.inputField}
                placeholder="Pick Date"
                value={date}
                onChangeText={(text) => setDate(text)}
              />
              <br />
              <TextInput
                style={styles.inputField}
                placeholder="Zone"
                value={zone}
                onChangeText={(text) => setZone(text)}
              />
              <br />
              <TextInput
                style={styles.inputField}
                placeholder="Wages"
                value={wages}
                onChangeText={(text) => setWages(text)}
              />
              <br />
              <TextInput
                style={styles.inputField}
                placeholder="Other Expenses"
                value={other}
                onChangeText={(text) => setOther(text)}
              />
              <br />
              <TouchableOpacity style={styles.addplantation}>
                <Text style={styles.addbtnM} onPress={handleSubmit}>ADD</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View>
    </View>
  );
}
