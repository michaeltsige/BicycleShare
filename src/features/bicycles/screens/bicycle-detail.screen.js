import React, { useState } from "react";
import { ScrollViewm ,TouchableOpacity,View } from "react-native";
import { List } from "react-native-paper";
import { Button } from 'react-native-paper';

import styled from "styled-components/native";

import { BicycleInfoCard } from "../components/bicycle-info-card.component";

import { SafeArea } from "../../../components/utility/safe-area.component";



const ButtonContainer = styled.View`
  padding: ${(props) => props.theme.space[2]};
  display: flex;
  border-radius: 4px;
`;


export const BicycleDetailScreen = ({ route }) => {

  
  const { bicycle } = route.params;
  return (
    <SafeArea>
      <BicycleInfoCard bicycle={bicycle} />
      
      <ButtonContainer>
        <Button
        mode="contained" 
        >
          Rent
        </Button>
      </ButtonContainer>

      {/* <ScrollView>
        <List.Accordion
          title="Breakfast"
          left={(props) => <List.Icon {...props} icon="bread-slice" />}
          expanded={breakfastExpanded}
          onPress={() => setBreakfastExpanded(!breakfastExpanded)}
        >
          <List.Item title="Eggs Benedict" />
          <List.Item title="Classic Breakfast" />
        </List.Accordion>

        <List.Accordion
          title="Lunch"
          left={(props) => <List.Icon {...props} icon="hamburger" />}
          expanded={lunchExpanded}
          onPress={() => setLunchExpanded(!lunchExpanded)}
        >
          <List.Item title="Burger w/ Fries" />
          <List.Item title="Steak Sandwich" />
          <List.Item title="Mushroom Soup" />
        </List.Accordion>

        <List.Accordion
          title="Dinner"
          left={(props) => <List.Icon {...props} icon="food-variant" />}
          expanded={dinnerExpanded}
          onPress={() => setDinnerExpanded(!dinnerExpanded)}
        >
          <List.Item title="Spaghetti Bolognese" />
          <List.Item title="Veal Cutlet with Chicken Mushroom Rotini" />
          <List.Item title="Steak Frites" />
        </List.Accordion>

        <List.Accordion
          title="Drinks"
          left={(props) => <List.Icon {...props} icon="cup" />}
          expanded={drinksExpanded}
          onPress={() => setDrinksExpanded(!drinksExpanded)}
        >
          <List.Item title="Coffee" />
          <List.Item title="Tea" />
          <List.Item title="Modelo" />
          <List.Item title="Coke" />
          <List.Item title="Fanta" />
        </List.Accordion>
      </ScrollView> */}
    </SafeArea>
  );
};
