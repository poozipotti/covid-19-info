import React, {ReactNode} from 'react';
import styled from 'styled-components';
import coughSmall from '../assets/Cough-Small.svg';
import womanMask from '../assets/Woman-Mask.svg';
import closePeople from '../assets/close.svg';
import farPeople from '../assets/far.svg';
import virus from '../assets/virus.svg';
import hands from '../assets/hands.svg';
import {
  PreventiveMeasureCard,
  PreventiveMeasureCardProps,
} from './PrevenativeMeasureCard';

const PreventiveMeasuresStyled = styled.div`
  background-color: ${props => props.theme.primaryTwoLight};
  margin: 0;
`;
const Title = styled.h2`
  color: ${props => props.theme.primaryTwo};
  padding-left: 3rem;
  font-weight: 500;
  padding-top: 20px;
  margin: 0;
`;

const Question = styled.p`
  font-weight: bold;
`;
const Answer = styled.p``;
const StyledLi = styled.li`
    padding-bottom: 1rem;
`;
const Cards: (PreventiveMeasureCardProps & {content: ReactNode})[] = [
  {
    iconLeft: coughSmall,
    iconRight: womanMask,
    title: 'Wear Face Mask',
    subtitle: 'Stop The Spread',
    content: (
      <>
        <p>
          <a href="https://www.cdc.gov/coronavirus/2019-ncov/prevent-getting-sick/cloth-face-cover.html">
            CDC recommends
          </a>{' '}
          wearing cloth face coverings in public settings where other social
          distancing measures are difficult to maintain e.g., grocery stores and
          pharmacies)(, especially in areas of significant community-based
          transmission.)
        </p>
        <Question>
          Should cloth face coverings be washed or otherwise cleaned regularly?
          How regularly?
        </Question>
        <Answer>
          Yes. They should be routinely washed depending on the frequency of
          use.
        </Answer>
        <Question>
          How does one safely sterilize/clean a cloth face covering?
        </Question>
        <Answer>
          A washing machine should suffice in properly washing a face covering.
        </Answer>
        <Question>
          How does one safely remove a used cloth face covering?
        </Question>
        <Answer>
          Individuals should be careful not to touch their eyes, nose, and mouth
          when removing their face covering and wash hands immediately after
          removing.
        </Answer>
      </>
    ),
  },
  {
    iconLeft: virus,
    iconRight: hands,
    title: 'Wash Your Hands',
    subtitle: 'Keep Clean',
    content: (
      <ul>
        <StyledLi>
          Wash your hands often with soap and water for at least 20 seconds
          especially after you have been in a public place, or after blowing
          your nose, coughing, or sneezing.
        </StyledLi>
        <StyledLi>
          If soap and water are not readily available, use a hand sanitizer that
          contains at least 60% alcohol. Cover all surfaces of your hands and
          rub them together until they feel dry.
        </StyledLi>
        <StyledLi>
          Avoid touching your eyes, nose, and mouth with unwashed hands.
        </StyledLi>
      </ul>
    ),
  },
  {
    iconLeft: closePeople,
    iconRight: farPeople,
    title: 'Socially Distance',
    subtitle: '6ft at all times!',
    content: (
      <>
      <p>
        Social distancing, also called “physical distancing,” means keeping
        space between yourself and other people outside of your home. To
        practice social or physical distancing:
      </p>
      <ul>
        <StyledLi>Stay at least 6 feet (about 2 arms’ length) from other people</StyledLi>
        <StyledLi>Do not gather in groups</StyledLi>
          <StyledLi>Stay out of crowded places and avoid mass gatherings)</StyledLi>
      </ul>
      </>
    ),
  },
];

export const PreventiveMeasures: React.FC = () => (
  <PreventiveMeasuresStyled>
    <Title> Covid-19 Measures </Title>
    {Cards.map(preventiveCard => (
      <PreventiveMeasureCard {...preventiveCard}>
        {preventiveCard.content}
      </PreventiveMeasureCard>
    ))}
  </PreventiveMeasuresStyled>
);
