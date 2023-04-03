import React, { useContext } from "react";
import { FlatList, TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { ActivityIndicator, Colors } from "react-native-paper";

import { SafeArea } from "../../../components/utility/safe-area.component";
import { Spacer } from "../../../components/spacer/spacer.component";

import { BicyclesContext } from "../../../services/bicycles/bicycles.context";

import { ConnectButton } from "../components/connect-button.component"
import { Search } from "../components/search.component";
import { BicycleInfoCard } from "../components/bicycle-info-card.component";

const BicycleList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;

const Loading = styled(ActivityIndicator)`
  margin-left: -25px;
`;
const LoadingContainer = styled.View`
  position: absolute;
  top: 50%;
  left: 50%;
`
;

export const BicyclesScreen = ({ navigation }) => {
  const { isLoading, bicycles } = useContext(BicyclesContext);
  return (
    <SafeArea>
      {isLoading && (
        <LoadingContainer>
          <Loading size={50} animating={true} color={'blue'} />
        </LoadingContainer>
      )}

      <ConnectButton />
      {/* <Search /> */}
      <BicycleList
        data={bicycles}
        renderItem={({ item }) => {
          return(
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("BicycleDetail", {
                  bicycle: item,
                })
              }
            >
              <Spacer position="bottom" size="large">
                <BicycleInfoCard bicycle={item} />
              </Spacer>
            </TouchableOpacity>
          );
        }}
        keyExtractor={(item) => item.name}
      />
    </SafeArea>
  );
};
