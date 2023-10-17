import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import ManagerHome from "./components/ManagerHome";
import AllIncome from "./components/AllIncome";
import SupervisorHome from "./components/SupervisorHome";
import PlantationDetails from "./components/PlantationDetails";
import PlantationDataList from "./components/PlantationDataList";
import MaintenanceDetails from "./components/MaintenanceDetails";
import LandOwner from "../components/Home";


const Stack = createNativeStackNavigator();
export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      
        <Stack.Screen name="landowner" component={LandOwner} options={{ headerShown: false }}/>
        
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}