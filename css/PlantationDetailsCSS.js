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
    backgroundColor: "#F5F5F5",
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
  date:{
    alignSelf: "center",
    color: "000000",
    marginLeft: 15,
    textAlign: "center", 
  }
});
