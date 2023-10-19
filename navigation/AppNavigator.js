import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MachineOperator from "../components/MachineOperator";
import MachineOperations from "../components/MachineOperations";
import ManagerHome from "../components/ManagerHome";
import AllIncome from "../components/AllIncome";
import SupervisorHome from "../components/SupervisorHome";
import PlantationDetails from "../components/PlantationDetails";
import PlantationDataList from "../components/PlantationDataList";
import MaintenanceDetails from "../components/MaintenanceDetails";
import LandOwner from "../components/LandOwner";
import LandOwnerHI from "../components/LandOwnerHI";
import LandOwnerHE from "../components/LandOwnerHE";
import AllZones from "../components/AllZones";
import AllExpenditure from "../components/AllExpenditure";
import BarScreen from "../components/BarScreen";

const Stack = createNativeStackNavigator();

function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Machine Operator">
        <Stack.Screen name="Supervisor Home" component={SupervisorHome} />
        <Stack.Screen name="Plantation Details" component={PlantationDetails} />
        <Stack.Screen name="Maintenance Details" component={MaintenanceDetails} />
        <Stack.Screen name="All Expenditure" component={AllExpenditure} />
        <Stack.Screen name="All Income" component={AllIncome} />
        <Stack.Screen name="BarScreen" component={BarScreen} />
        <Stack.Screen name="All Zones" component={AllZones} />
        <Stack.Screen name="LandOwner" component={LandOwner} />
        <Stack.Screen name="LandOwnerHI" component={LandOwnerHI} />
        <Stack.Screen name="ManagerHome" component={ManagerHome} />
        <Stack.Screen name="SupervisorHome" component={SupervisorHome} />
        <Stack.Screen name="PlantationDetails" component={PlantationDetails} />
        <Stack.Screen name="Machine Operator" component={MachineOperator} />
        <Stack.Screen name="Machine Operations" component={MachineOperations} />
        <Stack.Screen name="MaintenanceDetails" component={MaintenanceDetails} />
        <Stack.Screen name="LandOwnerHE" component={LandOwnerHE} />
        <Stack.Screen name="PlantationDataList" component={PlantationDataList} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;
