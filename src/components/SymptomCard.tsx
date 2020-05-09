import React from 'react';
import styled from 'styled-components';
import coughSmall from '../assets/Cough-Small.svg';

const Title = styled.h2`
  color: ${props => props.theme.primaryOneMedium};
  width: 100%;
  font-size: calc(1vw + 2rem);
  font-weight: 500;
  text-align: center;
  margin: 0;
`;
const Subtitle = styled.h3`
  font-weight: 400;
  color: ${props => props.theme.foreground}
  width: 100%;
  text-align: center;
  margin: 0;
`;
const Card = styled.div`
  background-color: ${props => props.theme.background};
  border-radius: 15px;
  padding: 5px;
  width: 200px;
  display: flex;
  flex-direction: column;
  margin: 20px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
`;
const Icon = styled.img`
  padding: 20px;
`;

export const SymptomCard: React.FC = () => {
  /* dont know why I need the outer div but flex is messing up width */
  return (
    <div style={{paddingBottom: '50px', paddingTop: '20px'}}>
      <Card>
        <Title>Coughing</Title>
        <Subtitle>Frequent, Dry Cough</Subtitle>
        <Icon src={coughSmall} />
      </Card>
    </div>
  );
};
