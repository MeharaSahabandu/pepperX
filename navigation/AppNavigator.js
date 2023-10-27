import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MachineOperator from "../components/MachineOperator";
import MachineOperations from "../components/MachineOperations";
import LandingPage from "../components/LandingPage";
import UserNav from "../components/UserNav";
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
import BarGraph from "../components/BarGraph";
import Login from "../components/Login";

const Stack = createNativeStackNavigator();

function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="landingPage"
          component={LandingPage}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="ManagerHome" component={ManagerHome} />
        <Stack.Screen name="Supervisor Home" component={SupervisorHome} />
        <Stack.Screen name="Machine Operator" component={MachineOperator} />
        <Stack.Screen name="Machine Operations" component={MachineOperations} />
        <Stack.Screen name="UserNav" component={UserNav} />

        <Stack.Screen
          name="login"
          component={Login}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Maintenance Details"
          component={MaintenanceDetails}
        />
        <Stack.Screen name="Plantation Details" component={PlantationDetails} />
        <Stack.Screen name="All Expenditure" component={AllExpenditure} />
        <Stack.Screen name="All Income" component={AllIncome} />
        <Stack.Screen name="Finance Balance" component={BarScreen} />
        <Stack.Screen name="All Zones" component={AllZones} />
        <Stack.Screen
          name="PlantationDataList"
          component={PlantationDataList}
        />
        <Stack.Screen name="Bar Graph" component={BarGraph} />
        <Stack.Screen name="LandOwner" component={LandOwner} />
        <Stack.Screen name="LandOwnerHI" component={LandOwnerHI} />

        <Stack.Screen name="LandOwnerHE" component={LandOwnerHE} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;
