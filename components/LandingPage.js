import React, { useEffect, useRef } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import * as Animatable from 'react-native-animatable';

export default function LandingPage() {
  const contentRef = useRef(null);
  const navigation = useNavigation();

  useEffect(() => {
    contentRef.current.slideInUp(1000); // Slide in animation duration in milliseconds
  }, []);

  const handleContinueBtn = () => {
    // Navigate to LandOwnerIncome
    navigation.navigate("UserNav");
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/LandingImage.png')}
        style={styles.image}
      />
      <Animatable.View
        ref={contentRef}
        style={styles.content}
        animation="slideInUp" // Animation effect
        duration={1000} // Animation duration in milliseconds
      >
        <Text style={styles.title}>Manage Your <br/>Pepper Plantation</Text>
        <Text style={styles.description}>Organize all your pepper<br/>plantation details in one place</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText} onPress={handleContinueBtn}>Continue</Text>
        </TouchableOpacity>
      </Animatable.View>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f4',
  },
  image: {
    width: '100%',
    height: 400, // Adjust the height of the image as needed
  },
  content: {
    flex: 1,
    backgroundColor: '#fff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
    marginTop: -25, // Adjust the margin
    alignItems: 'center',
  },
  title: {
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 20,
    marginTop: 40,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#05AF6D",
    borderRadius: 5,
    padding: 15,
    width: '90%',
    alignItems: 'center',
    marginTop: 90,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
});

