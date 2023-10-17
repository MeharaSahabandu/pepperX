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
});
