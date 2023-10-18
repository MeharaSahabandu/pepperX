import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 30,
  },
  marginContainer: {
    marginHorizontal: 20,
  },
  headerText: {
    fontSize: 30,
    textAlign: "center",
    fontWeight: "480",
    marginBottom: 15,
    marginTop: 50,
    marginLeft: -130,
  },
  rectangle: {
    flexDirection: "row",
    height: 140,
    backgroundColor: "white",
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
    width: 1,
    backgroundColor: "#CACACA",
    marginLeft: 30,
    marginTop: 20,
    marginBottom: 20,
  },
  text: {
    color: "000000",
    fontSize: 18,
    flex: 1,
    marginLeft: 12,
    alignSelf: "center",
  },
  date: {
    alignSelf: "center",
    color: "000000",
    marginLeft: 15,
    textAlign: "center",
  },
  zoneRec: {
    width: 80,
    height: 30,
    alignSelf: "center",
    backgroundColor: "#EBBEB8",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    marginTop: 20,
    marginBottom: 20,
    marginRight: 10,
  },
  zoneRecText: {
    color: "black",
    fontSize: 14,
  },
  addButton: {
    backgroundColor: "#05AF6D",
    width: 40,
    height: 40,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: "85%",
    marginTop: "-12%",
  },
  addButtonText: {
    color: "#fff",
    fontSize: 40,
    marginTop: "-25%",
  },
  last30DaysButton: {
    backgroundColor: "#D9F8EC",
    height: "5%",
    width: "30%",
    borderRadius: 6,
    marginTop: "4%",
    marginLeft: "5%",
  },
  last30DaysButtonText: {
    marginTop: "4%",
    marginLeft: "8%",
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
});
