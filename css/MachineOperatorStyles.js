import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",
  },
  marginContainer: {
    marginHorizontal: 20,
  },
  

  headerText: {
    fontSize: 30,
    textAlign: "center",
    fontWeight: "480",
    marginBottom: 15,
    marginTop: 30,
  },
  headerPara: {
    fontSize: 16,
    textAlign: "center",
    color: "#888888",
    marginBottom: 40,
  },
  rectangle: {
    flexDirection: "row", // Use row direction for image and text
    height: 140,
    backgroundColor: "#05AF6D",
    marginTop: 10,
    borderRadius: 10,
  },
  image: {
    width: 80,
    height: 80,
    marginLeft: 35,
    marginTop: 25,
  },
  separator: {
    width: 2, // Reduced separator width
    backgroundColor: "white",
    marginLeft: 30, // Adjusted margin for better alignment
    marginTop: 20,
    marginBottom: 20,
  },
  text: {
    color: "white",
    fontWeight: "bold",
    fontSize: 18,
    flex: 1,
    textAlign: "center", // Center text within the available space
    alignSelf: "center", // Vertically center text
  },

  backgroundImage1: {
    position: "absolute",
    bottom: 0, // Place the image at the bottom
    left: 0,
    right: 0,
    opacity: 0.3,
    resizeMode: "cover", // Adjust this as needed
    width: 195,
    height: 195, // Adjust the height as needed
  },
  backgroundImage2: {
    position: "absolute",
    bottom: 0, // Place the image at the bottom
    left: 198,
    right: 0,
    opacity: 0.3,
    resizeMode: "cover", // Adjust this as needed
    width: 195,
    height: 195, // Adjust the height as needed
  },
});
