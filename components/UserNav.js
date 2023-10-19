import React, { useEffect, useRef } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import * as Animatable from 'react-native-animatable';

export default function UserTypeSelection() {

  const navigation = useNavigation();
  const handleLandOwnerBtn = () => {
    navigation.navigate("LandOwner");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.instructionsText}>Choose your role to<br/>Log in to the App</Text>
      <View style={styles.buttonsContainer}>
        <Animatable.View
          animation="slideInUp"
          duration={500} // Duration for the first button
        >
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Supervisor</Text>
          </TouchableOpacity>
        </Animatable.View>
        <Animatable.View
          animation="slideInUp"
          duration={750} // Duration for the second button
        >
          <TouchableOpacity style={styles.button} onPress={handleLandOwnerBtn}>
            <Text style={styles.buttonText}>Land Owner</Text>
          </TouchableOpacity>
        </Animatable.View>
        <Animatable.View
          animation="slideInUp"
          duration={1000} // Duration for the third button
        >
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Manager</Text>
          </TouchableOpacity>
        </Animatable.View>
        <Animatable.View
          animation="slideInUp"
          duration={1250} // Duration for the fourth button
        >
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Machine Operator</Text>
          </TouchableOpacity>
        </Animatable.View>
      </View>
      <View style={styles.container2}>
        <Image source={require("../assets/Wheat.png")} style={styles.backgroundImage1} />
        <Image source={require("../assets/Wheat.png")} style={styles.backgroundImage2} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f4',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container2: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#f4f4f4',
    marginHorizontal: 0,
  },
  buttonsContainer: {
    width: '90%',
  },
  buttonWrapper: {
    marginBottom: 15,
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#05AF6D',
    borderRadius: 5,
    marginBottom: 15,
    padding: 15,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
  instructionsText: {
    color: '#333',
    fontSize: 16,
    marginTop: -50,
    marginBottom: 20,
    textAlign: 'center',
  },
  backgroundImage1: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    opacity: 0.3,
    resizeMode: 'cover',
    width: 195,
    height: 195,
  },
  backgroundImage2: {
    position: 'absolute',
    bottom: 0,
    left: 198,
    right: 0,
    opacity: 0.3,
    resizeMode: 'cover',
    width: 195,
    height: 195,
  },
});
