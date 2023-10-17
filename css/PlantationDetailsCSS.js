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
  date: {
    alignSelf: "center",
    color: "000000",
    marginLeft: 15,
    textAlign: "center",
  },
  zoneLabel: {
    marginTop: "3%",
    marginRight: "3%",
  },
  zoneLabelTextA: {
    backgroundColor: "#F8E3AE",
    borderRadius:6
  },
  zoneLabelTextB: {
    backgroundColor: "#C9EEBF",
    borderRadius:6
  },
  zoneLabelTextC: {
    backgroundColor: "#EBBEB8",
    borderRadius:6
  },
  zoneLabelTextD: {
    backgroundColor: "#B8D8EB",
    borderRadius:6
  },
  addButton: {
    backgroundColor: '#05AF6D',
    width: 40, 
    height: 40, 
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft:"85%",
    marginTop:"-12%"
  },
  addButtonText: {
    color: '#fff',
    fontSize: 40,
    marginTop:"-25%"
  },
  last30DaysButton:{
    backgroundColor:"#D9F8EC",
    height:"5%",
    width:"30%",
    borderRadius:6,
    marginTop:"4%",
    marginLeft:"1%"
  },
  last30DaysButtonText:{
    marginTop:"4%",
    marginLeft:"8%"
  }

});
