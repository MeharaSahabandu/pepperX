import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { styles } from "../css/HeaderStyle";
import { useNavigation } from "@react-navigation/core";

export default function HeaderSupervisor() {
  const navigation = useNavigation();

  const handleSignOut = () => {
    navigation.navigate("landingPage");
  };

  return (
    <View style={styles.header}>
      <Text style={styles.headerLeftText}>Hello Simon !</Text>
      <TouchableOpacity onPress={handleSignOut}>
        <Image
          source={require("../assets/signout.png")}
          style={styles.headerRightImage}
        />
      </TouchableOpacity>
    </View>
  );
}
