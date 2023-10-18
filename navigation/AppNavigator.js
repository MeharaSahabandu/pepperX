import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import ManagerHome from "../components/ManagerHome";
import AllIncome from "../components/AllIncome";
import SupervisorHome from "../components/SupervisorHome";
import PlantationDetails from "../components/PlantationDetails";
import PlantationDataList from "../components/PlantationDataList";
import MaintenanceDetails from "../components/MaintenanceDetails";
import LandOwner from "../components/LandOwner";
import LandOwnerIncome from "../components/LandOwnerIncome";
import LandOwnerHI from "../components/LandOwnerHI";
import AllZones from "../components/AllZones";
import AllExpenditure from "../components/AllExpenditure";
import BarScreen from "../components/BarScreen";

const Stack = createNativeStackNavigator();

function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="PlantationDetails" component={PlantationDetails} />
      <Stack.Screen
          name="MaintenanceDetails"
          component={MaintenanceDetails}
        />
        <Stack.Screen name="All Expenditure" component={AllExpenditure} />
        <Stack.Screen name="All Income" component={AllIncome} />
        <Stack.Screen name="BarScreen" component={BarScreen} />
        <Stack.Screen name="All Zones" component={AllZones} />
        <Stack.Screen name="LandOwner" component={LandOwner} />
        <Stack.Screen name="LandOwnerIncome" component={LandOwnerIncome} />
        <Stack.Screen name="LandOwnerHI" component={LandOwnerHI} />
        <Stack.Screen name="ManagerHome" component={ManagerHome} />
        <Stack.Screen name="SupervisorHome" component={SupervisorHome} />
        <Stack.Screen
          name="PlantationDataList"
          component={PlantationDataList}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;
