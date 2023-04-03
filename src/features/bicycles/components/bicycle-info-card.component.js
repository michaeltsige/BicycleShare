import React from "react";
import { SvgXml } from "react-native-svg";

import { Spacer } from "../../../components/spacer/spacer.component";
import { Text } from "../../../components/typography/text.component";

import {
  BicycleCard,
  BicycleCardCover,
  Info,
  Section,
  SectionEnd,
  Rating,
  Icon,
  Address,
} from "./bicycle-info-card.styles";

export const BicycleInfoCard = ({ bicycle = {} }) => {
  const {
    name = "Some Bicycle",
    icon = " ",
    photos = [
      " ",
    ],
    address = "100 some random street",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily = true,
  } = bicycle;

  return (
    <BicycleCard elevation={5}>
      <BicycleCardCover key={name} source={{ uri: photos[0] }} />
      <Info>
        <Text variant="label">{name}</Text>
        <Section>
          <SectionEnd>
            {isClosedTemporarily && (
              <Text variant="error">UNAVAILABLE</Text>
            )}
            <Spacer position="left" size="large">
              <Icon source={{ uri: icon }} />
            </Spacer>
          </SectionEnd>
        </Section>
        <Address>{address}</Address>
      </Info>
    </BicycleCard>
  );
};
