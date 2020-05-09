import React from 'react';
import styled from 'styled-components';
import {ThemeContext} from 'styled-components';
import {useContext} from 'react';
import {Section} from './Section';
import {SymptomCard} from './SymptomCard';

const Title = styled.h2`
  color: ${props => props.theme.primaryOne};
  padding-left: 3rem;
  font-weight: 500;
	padding-top: 20px;
  margin: 0;
`;
export const Symptoms: React.FC = () => {
  const theme = useContext(ThemeContext);
  return (
    <Section
      mainColor={theme.primaryOneLight}
      secondaryColor={theme.primaryTwoLight}>
      <Title>Symptoms</Title>
      <div
        style={{
          display: 'flex',
          flexWrap:'nowrap',
          justifyContent:'flex-start',
          overflowY: 'scroll',
        }}>

        <SymptomCard />
        <SymptomCard />
        <SymptomCard />
      </div>
    </Section>
  );
};
