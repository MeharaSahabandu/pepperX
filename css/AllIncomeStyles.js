import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
  },
  marginContainer: {
    marginHorizontal: 16,
  },
  rectanglesContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "flex-start",
  },
  rectangleHorizontal: {
    width: 200,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
    borderColor: "#05AF6D",
    borderRadius: 10,
    borderWidth: 2,
  },
  selected: {
    backgroundColor: "#05AF6D",
    borderWidth: 0,
  },
  incomeText: {
    color: "black",
    fontSize: 18,
  },
  selectedText: {
    color: "white",
  },
  // List of income rectangles
  rectangle: {
    flexDirection: "row",
    height: 140,
    backgroundColor: "#F5F5F5",
    marginTop: 10,
    borderRadius: 10,
  },
  separator: {
    width: 1,
    backgroundColor: "#CACACA",
    marginLeft: 30,
    marginTop: 20,
    marginBottom: 20,
  },
  text: {
    color: "#000000",
    fontSize: 18,
    flex: 1,
    marginLeft: 12,
    alignSelf: "center",
  },
  date: {
    alignSelf: "center",
    color: "#000000",
    marginLeft: 15,
    textAlign: "center",
  },
  columnContainer: {
    flexDirection: "column",
  },
  zoneRec: {
    width: 80,
    height: 30,
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    marginTop: 20,
    marginBottom: 20,
    marginRight: 10,
  },
  zoneRecA: {
    backgroundColor: "#EBBEB8", // Zone A background color
  },
  zoneRecB: {
    backgroundColor: "#C9EEBF", // Zone B background color
  },
  zoneRecC: {
    backgroundColor: "#F8E3AE", // Zone C background color
  },
  zoneRecD: {
    backgroundColor: "#B8D8EB", // Zone D background color
  },
  zoneRecText: {
    color: "black",
    fontSize: 14,
  },
  qtyRec: {
    width: 85,
    height: 50,
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    marginRight: 10,
    borderWidth: 2,
    borderColor: "#05AF6D",
    backgroundColor: "white",
  },
  addButton: {
    backgroundColor: "#05AF6D",
    width: 40,
    height: 40,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: "85%",
    marginTop: "2%",
  },
  addButtonText: {
    color: "#fff",
    fontSize: 40,
    marginTop: "-25%",
  },

  // modal styles start

  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.6)', // Semi-transparent black background
  },
  modalContent: {
    width: 300,
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 5,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  input: {
    height: 40,
    borderColor: "#05AF6D",
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    paddingLeft: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    color: "#05AF6D",
  },

  ModaladdButton: {
    backgroundColor: "#05AF6D", // Change the background color to your preferred color
    borderRadius: 5,
    padding: 10,
    margin: 5,
    borderWidth: 1,
    borderColor: "#05AF6D",
    color: 'white', // Text color
    alignItems: 'center',
  },

  ModalcancelButton: {
    backgroundColor: "red", // Change the background color to your preferred color
    borderRadius: 5,
    padding: 10,
    margin: 5,
    borderWidth: 1,
    borderColor: 'red',
    color: 'white', // Text color
    alignItems: 'center', 
  },

  picker: {
    height: 40,          // Set the height of the Picker
    borderColor: "#05AF6D",
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 10,
    marginBottom: 10,   // Add space below the Picker
  },

  datePicker: {
    height: 40,          // Set the height of the DatePicker
    borderColor: "#05AF6D",
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 10,
    marginBottom: 10,   // Add space below the DatePicker
  }

  // modal styles end

});
