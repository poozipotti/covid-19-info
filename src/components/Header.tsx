import React from 'react';
import main from '../assets/main.svg';
import styled from 'styled-components';
import {Section} from './Section';
import {ThemeContext} from 'styled-components';
import {useContext} from 'react';

const MainText = styled.h1`
  color: ${props => props.theme.primaryTwo};
  font-weight: 500;
  font-size: calc(1vw + 2rem);
  width: 100vw;
  text-align: center;
  margin: 0;
`;
const MainSubtitle = styled.h2`
  color: ${props => props.theme.foregroundLight};
  font-weight: 500;
  width: 100vw !important;
  text-align: center;
  margin: 0;
`;

const StyledSection = styled(Section)`
  display: flex;
  flex-direction: column;
`;
const StyledImage = styled.img`
	padding-top:20px	
`

export const Header: React.FC = () => {
  const theme = useContext(ThemeContext);

  return (
    <StyledSection
      mainColor={theme.background}
      secondaryColor={theme.primaryOneLight}>
      <StyledImage src={main} alt="woman coughing" />
      <MainText> Covid-19 Measures </MainText>
      <MainSubtitle> Preperation and Prevention </MainSubtitle>
    </StyledSection>
  );
};
