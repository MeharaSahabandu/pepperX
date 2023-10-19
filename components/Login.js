import React, { useEffect, useRef, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  TextInput,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { styles } from "../css/LoginStyles";

export default function Login() {
  const navigation = useNavigation();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (username === "supervisor" && password === "simon123") {
      navigation.navigate("Supervisor Home");
      setUsername("");
      setPassword("");
    } else if(username === "landowner" && password === "kani123"){
        navigation.navigate("All Income");
        setUsername("");
        setPassword("");
    }
    else if(username === "manager" && password === "sandali123"){
        navigation.navigate("ManagerHome");
        setUsername("");
        setPassword("");
    }
    else {
      alert("Invalid username or password");
    }
  };
  

  return (
    <View style={styles.container}>
      <View>
      <Text style={styles.pepperX}>
        <b>pepperX</b>
      </Text>
      </View>
      <br/>
      <Text style={styles.instructionsText}>
        <b>Log in</b>
      </Text>
      <br />
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={(text) => setUsername(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry={true}
        value={password}
        onChangeText={(text) => setPassword(text)}
      />
      <br />
      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>
            <b>Log in</b>
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

