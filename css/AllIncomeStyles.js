import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
  },
  marginContainer: {
    marginHorizontal: 16,
  },
  rectanglesContainer: {
    flexDirection: "row",
  },
  rectangle: {
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
  incomeList: {
    marginTop: 20,
    marginHorizontal: 20, // Added marginHorizontal
    flexDirection: "row",
    flexWrap: "wrap",
  },
  listItem: {
    width: "100%",
    height: 125,
    backgroundColor: "#05AF6D",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    marginTop: 20,
  },
  listItemText: {
    color: "white",
    fontSize: 18,
  },
});
