import React from 'react';
import styled from 'styled-components';
import {ThemeContext} from 'styled-components';
import {useContext} from 'react';
import {Section} from './Section';
import {SymptomCard, SymptomCardProps} from './SymptomCard';
import coughSmall from '../assets/Cough-Small.svg';

const Title = styled.h2`
  color: ${props => props.theme.primaryOne};
  padding-left: 3rem;
  font-weight: 500;
  padding-top: 20px;
  margin: 0;
`;
const Disclaimer = styled.h3`
  color: ${props => props.theme.primaryOne};
  padding-left: 3rem;
  width:80%;
  font-size: 1rem;
  font-weight: 500;
  padding-top: 20px;
  margin: 0;
`;
const StyledSection = styled(Section)`
  padding-bottom: 40px;
`
const SymptomsList: SymptomCardProps[] = [
  {
    icon: coughSmall,
    title: 'Cough',
    subtitle: 'Dry, Persitant Cough',
    isEmegency: false,
  },
  {
    icon: coughSmall,
    title: 'Difficulty Breathing',
    subtitle: 'Shortness of Breath',
    isEmegency: false,
  },
  {
    icon: coughSmall,
    title: 'Fever',
    subtitle: 'Chills,Muscle Pain',
    isEmegency: false,
  },
  {
    icon: coughSmall,
    title: 'Sore Throat',
    subtitle: '',
    isEmegency: false,
  },
  {
    icon: coughSmall,
    title: 'Loss of taste',
    subtitle: 'New lost of taste or smell',
    isEmegency: false,
  },
  {
    icon: coughSmall,
    title: 'Trouble Breathing',
    subtitle: 'Cannot breath normally',
    isEmegency: true,
  },
  {
    icon: coughSmall,
    title: 'Chest Pain',
    subtitle: 'Persistent Pain or Pressue in the chest',
    isEmegency: true,
  },
  {
    icon: coughSmall,
    title: 'New Confusion',
    subtitle: '',
    isEmegency: true,
  },
  {
    icon: coughSmall,
    title: 'Bluish Lips',
    subtitle: 'Blueish Lips Or Face',
    isEmegency: true,
  },
];

export const Symptoms: React.FC = () => {
  const theme = useContext(ThemeContext);
  return (
    <StyledSection
      mainColor={theme.primaryOneLight}
      secondaryColor={theme.primaryTwoLight}
    >
      <Title>Symptoms</Title>
      <Disclaimer>
        *This list is not all possible symptoms. Please call your medical
        provider for any other symptoms that are severe or concerning to you.
      </Disclaimer>
      <div
        style={{
          display: 'flex',
          flexWrap: 'nowrap',
          justifyContent: 'flex-start',
          overflowY: 'scroll',
        }}>
        {SymptomsList.map(symptom => (
          <SymptomCard {...symptom} />
        ))}
      </div>
    </StyledSection>
  );
};
