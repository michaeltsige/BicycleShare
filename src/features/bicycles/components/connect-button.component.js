import React, { useContext, useState } from "react";
import styled from "styled-components/native";
import { Button } from 'react-native-paper';

const ButtonBarContainer = styled.View`
  padding: ${(props) => props.theme.space[1]}; 
  display: flex;
  align-items: end;
`;

const ButtonContainer = styled.View`
  padding: ${(props) => props.theme.space[1]};
  display: flex;
  align-items: center;
`;

export const ConnectButton = () => {

  const [buttonText, setButtonText] = useState("Connect");

  return(
    <ButtonBarContainer>
      <ButtonContainer>
        <Button
        
        mode="contained" 
        onPress={() => {
          if(buttonText === "Connect")
            setButtonText("Disconnect");
          if(buttonText === "Disconnect")
            setButtonText("Connect");
            }}>
          {buttonText}
        </Button>
      </ButtonContainer>
    </ButtonBarContainer>
  )
};