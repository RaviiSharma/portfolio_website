import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { number: 20, text: 'Open Source Projects'},
  { number: 20, text: 'Github Stars', },
  { number: 500, text: 'Connections', },
  { number: 1900, text: 'Followers', },
  
  { number: "1st", text: 'First in the Lathe Master Competition 2019', },
  { number: "1st", text: 'First in the Treasure Hunt Competition 2019', },
  { number: "1st", text: 'First in the Theater Competition 2020', },
  
];

const Acomplishments = () => (
  <Section>
    <SectionTitle>Personal Achievements</SectionTitle>
    <Boxes>
      {data.map((card, index) => (
        <Box key={index}>
          <BoxNum>{`${card.number}+`}</BoxNum>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
    <SectionDivider/>
  </Section>
);

export default Acomplishments;
