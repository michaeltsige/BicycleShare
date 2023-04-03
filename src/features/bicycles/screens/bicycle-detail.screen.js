import React, { useState } from "react";
import { TouchableOpacity,View } from "react-native";
import { Button, Text } from 'react-native-paper';
import { TextInput, Divider } from "react-native-paper";


import styled from "styled-components/native";

import { BicycleInfoCard } from "../components/bicycle-info-card.component";

import { SafeArea } from "../../../components/utility/safe-area.component";



const ButtonContainer = styled.View`
  padding: ${(props) => props.theme.space[2]};
  display: flex;
  border-radius: 4px;
`;


export const BicycleDetailScreen = ({ route }) => {

  const [price,setPrice] = useState("0.00");
  const { bicycle } = route.params;

  return (
    <SafeArea>
      <BicycleInfoCard bicycle={bicycle} />

        <Divider/>
        <Text 
          variant="headlineMedium"
          style={{paddingHorizontal:20,paddingVertical:20}}
        >
            {price}
        </Text>  
        <Divider/>
        <TextInput 
          label="Rent duration(in minutes)"
          onChangeText={(value) => setPrice(`${value/1000}`)}
        ></TextInput>
        
        <TouchableOpacity>
        <ButtonContainer>
          <Button
          mode="contained"
          >
            Rent
          </Button>
        </ButtonContainer>
        </TouchableOpacity>
      

      

    </SafeArea>
  );
};
