import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ManagerHome from '../components/ManagerHome';
import AllIncome from '../components/AllIncome';
import SupervisorHome from '../components/SupervisorHome';
import PlantationDetails from '../components/PlantationDetails';
import PlantationDataList from '../components/PlantationDataList';
import MaintenanceDetails from '../components/MaintenanceDetails';
import LandOwner from '../components/LandOwner';
import MachineOperator from '../components/MachineOperator';
import MachineOperations from '../components/MachineOperations';

const Stack = createNativeStackNavigator();

function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="MachineOperations">
        <Stack.Screen name="LandOwner" component={LandOwner} />
        <Stack.Screen name="ManagerHome" component={ManagerHome} />
        <Stack.Screen name="AllIncome" component={AllIncome} />
        <Stack.Screen name="SupervisorHome" component={SupervisorHome} />
        <Stack.Screen name="PlantationDetails" component={PlantationDetails} />
        <Stack.Screen name="PlantationDataList" component={PlantationDataList} />
        <Stack.Screen name="MaintenanceDetails" component={MaintenanceDetails} />
        <Stack.Screen name="MachineOperator" component={MachineOperator} />
        <Stack.Screen name="MachineOperations" component={MachineOperations} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;
