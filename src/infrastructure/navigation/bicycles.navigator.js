import React from "react";

import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";

import { BicyclesScreen } from "../../features/bicycles/screens/bicycles.screen";
import { BicycleDetailScreen } from "../../features/bicycles/screens/bicycle-detail.screen";

const BicycleStack = createStackNavigator();

export const BicyclesNavigator = () => {
  return (
    <BicycleStack.Navigator
      headerShown="None"
      screenOptions={{
        ...TransitionPresets.ModalPresentationIOS,
        
      }}
      
      
    >
      <BicycleStack.Screen
        name="Bicycle"
        component={BicyclesScreen}
      />
      <BicycleStack.Screen
        name="BicycleDetail"
        component={BicycleDetailScreen}
      />
    </BicycleStack.Navigator>
  );
};
