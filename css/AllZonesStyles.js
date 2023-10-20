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
    width: 320,
    height: 320,
    borderColor: "#B1B1B1",
    borderWidth: 2,
    backgroundColor: "white",
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
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    margin: 10,
  },
  selectedZone: {
    backgroundColor: "#05AF6D",
  },
  unselectedZone: {
    backgroundColor: "#B1B1B1",
  },
  zoneText: {
    color: "white",
    fontSize: 20,
  },
  headingText: {
    textAlign: "center",
    fontSize: 18,
    marginVertical: 20,
    color: "black",
  },
  bottomRectangle: {
    width: 320,
    height: 120,
    backgroundColor: "white",
    alignSelf: "center",
    borderRadius: 10,
    marginBottom: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  revenueContainer: {
    flexDirection: "column",
    justifyContent: "flex-start",
    marginLeft: 20,
    marginTop: 10,
  },
  revTag: {
    width: 80,
    height: 30,
    backgroundColor: "#05AF6D",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    marginBottom: 10,
  },
  revText: {
    color: "white",
    fontSize: 12,
  },
  revenueValue: {
    color: "black",
    fontSize: 24,
  },
  expenseContainer: {
    flexDirection: "column",
    justifyContent: "flex-start",
    marginLeft: 20,
    marginTop: 10,
  },
  exTag: {
    width: 90,
    height: 30,
    backgroundColor: "#F2B02F",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    marginBottom: 10,
  },
  exText: {
    color: "white",
    fontSize: 12,
  },
  exValue: {
    color: "black",
    fontSize: 24,
  },
  detailsButton: {
    width: 90,
    height: 33,
    backgroundColor: "#D9D9D9",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    marginRight: 20,
  },
  detailsButtonText: {
    color: "black",
    fontSize: 14,
  },
});
