import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, Modal, TextInput } from "react-native";
import { styles } from "../css/PlantationDetailsCSS";
import calendaricon from "../assets/calendarIcon.png";
import MaintenanceDataList from "./MaintenanceDataList";

export default function MaintenanceDetails() {
  const [isModalVisible, setModalVisible] = useState(false);
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");
  const [input3, setInput3] = useState("");

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

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
          transparent={true}
          animationType="slide"
          visible={isModalVisible}
          onRequestClose={toggleModal}
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <TouchableOpacity onPress={toggleModal}>
                <Text style={styles.closeModalButton}>X</Text>
                <Text style={styles.modalTopic}>
                  <b>Plantation Expenditure</b>
                </Text>
                <br/>
                <TextInput
                  style={styles.inputField}
                  placeholder="Field 1"
                  value={input1}
                  onChangeText={(text) => setInput1(text)}
                /><br/>
                <TextInput
                  style={styles.inputField}
                  placeholder="Field 2"
                  value={input2}
                  onChangeText={(text) => setInput2(text)}
                /><br/>
                <TextInput
                  style={styles.inputField}
                  placeholder="Field 3"
                  value={input3}
                  onChangeText={(text) => setInput3(text)}
                /><br/>
                <button style={styles.addplantation}>ADD</button>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View>
    </View>
  );
}
