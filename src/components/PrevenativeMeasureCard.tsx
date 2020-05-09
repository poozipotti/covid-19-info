import React, {useContext} from 'react';
import styled from 'styled-components';
import coughSmall from '../assets/Cough-Small.svg';
import womanMask from '../assets/Woman-Mask.svg';
import triangle from '../assets/triangle.svg';
import {ThemeContext} from 'styled-components';

const MiddleContainer = styled.div`
  display: Grid;
  grid-template-rows: repeat(3, 1rem);
  grid-template-columns:1fr min-content;
  align-items: center;
  width: 80%;
  margin:auto;
`;
const Title = styled.h2`
  color: ${props => props.theme.primaryOneMedium};
  font-size: 1rem;
  font-weight: 500;
  margin: 0;
  grid-column: span 2;
`;
const Subtitle = styled.h3`
  color: ${props => props.theme.foregroundLight};
  margin: 0;
  font-weight: 500;
  font-size: 0.8rem;
  align-self: start;
`;
const Card = styled.div`
  background-color: ${props => props.theme.background};
  border-radius: 15px;
  padding: 10px;
  padding-left: 20px;
  padding-right: 20px;
  display: grid;
  grid-template-columns: 45px 1fr 45px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  margin: 20px;
  margin-bottom: 20px;
`;
const Icon = styled.img`
  width: 45px;
`;

export const PreventiveMeasureCard: React.FC = () => {
  const theme = useContext(ThemeContext);
  return (
    <Card>
      <Icon src={coughSmall} />
      <MiddleContainer>
        <Title>Wear Face Mask</Title>
        <div
          style={{
            width: '90%',
            height: '4px',
            backgroundColor: theme.primaryTwo,
            gridArea: '2 / 1 /span 1/ span 2',

          }}
        />
        <img
          src={triangle}
          style={{gridArea: '2 / 2 / span 1 / span 1', justifySelf: 'end'}}
        />
        <Subtitle>Stop The Spread</Subtitle>
      </MiddleContainer>
      <Icon src={womanMask} />
    </Card>
  );
};
