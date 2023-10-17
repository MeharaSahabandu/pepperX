import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 40,
  },
  marginContainer: {
    marginHorizontal: 16,
  },
  outterRec: {
    width: 300,
    height: 300,
    borderColor: "#B1B1B1", // Green border color
    borderWidth: 1, // Border width
    backgroundColor: "white", // White background
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    borderRadius: 10,
  },
  row: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  zoneRectangle: {
    width: 120,
    height: 120,
    backgroundColor: "#05AF6D",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    margin: 10,
  },
  zoneText: {
    color: "white",
    fontSize: 18,
  },
});
