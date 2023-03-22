import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { Text } from "react-native";

import { SafeArea } from "../../components/utility/safe-area.component";

import { BicyclesNavigator } from "./bicycles.navigator";

import { About } from "../../features/about/about.screen";

const Tab = createBottomTabNavigator();

const TAB_ICON = {
  Bicycles: "md-bicycle",
  Account: "md-wallet",
  About: "md-about",
};


const Account = () => (
  <SafeArea>
    <Text>Account</Text>
  </SafeArea>
);

const createScreenOptions = ({ route }) => {
  const iconName = TAB_ICON[route.name];
  return {
    tabBarIcon: ({ size, color }) => (
      <Ionicons name={iconName} size={size} color={color} />
    ),
    headerStyle: { backgroundColor: 'blue' },
    headerShown: false
  };
};

export const AppNavigator = () => (
  <NavigationContainer>
    <Tab.Navigator
      screenOptions={createScreenOptions}
      tabBarOptions={{
        activeTintColor: "tomato",
        inactiveTintColor: "gray",
      }}
    >
      <Tab.Screen name="Bicycles" component={BicyclesNavigator}/>
      <Tab.Screen name="Account" component={Account} />
      <Tab.Screen name="About" component={About} />
    </Tab.Navigator>
  </NavigationContainer>
);
