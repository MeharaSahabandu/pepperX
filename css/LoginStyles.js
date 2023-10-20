import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#05AF6D",
      justifyContent: "center",
      alignItems: "center",
    },
    container2: {
      position: "absolute",
      bottom: 0,
      left: 0,
      right: 0,
      backgroundColor: "#000000",
      marginHorizontal: 0,
    },
    input: {
      width: "90%",
      height: 50,
      borderColor: "#fff",
      borderWidth: 1,
      borderRadius: 5,
      paddingHorizontal: 10,
      marginBottom: 15,
      color: "#fff",
    },
    buttonsContainer: {
      width: "90%",
    },
    buttonWrapper: {
      marginBottom: 15,
      alignItems: "center",
    },
    button: {
      backgroundColor: "#ffffff",
      borderRadius: 5,
      marginBottom: 15,
      padding: 15,
      alignItems: "center",
    },
    buttonText: {
      color: "#05AF6D",
      fontSize: 18,
    },
    instructionsText: {
      color: "#fff",
      fontSize: 35,
      marginTop: -90,
      marginBottom: 20,
      textAlign: "center",
    },
    pepperX:{
        color: `rgba(255, 255, 255, 0.07)`,
        marginTop:"-70%",
        fontSize:75,
    },
    backgroundImage1: {
      position: "absolute",
      bottom: 0,
      left: 0,
      right: 0,
      opacity: 0.3,
      resizeMode: "cover",
      width: 195,
      height: 195,
    },
    backgroundImage2: {
      position: "absolute",
      bottom: 0,
      left: 198,
      right: 0,
      opacity: 0.3,
      resizeMode: "cover",
      width: 195,
      height: 195,
    },
  });
  