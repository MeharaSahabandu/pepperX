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
});
