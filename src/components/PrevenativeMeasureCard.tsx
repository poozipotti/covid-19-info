import React, {useContext} from 'react';
import styled from 'styled-components';
import coughSmall from '../assets/Cough-Small.svg';
import womanMask from '../assets/Woman-Mask.svg';
import triangle from '../assets/triangle.svg';
import {ThemeContext} from 'styled-components';
import {useState} from 'react';

const MiddleContainer = styled.div`
  display: Grid;
  grid-template-rows: repeat(3, 1rem);
  grid-template-columns: 1fr min-content;
  align-items: center;
  width: 80%;
  margin-left: auto;
  margin-right: auto;
  align-self: start;
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
  transition-timing-function: ease-out;
  transform-origin: top;
  transition: height 1s;

  ${({dirty, active}: {dirty: boolean, active: boolean}) =>
    dirty
      ? `
			height: ${active ? ' 300px' : 'auto'};
    `
      : ''}
`;
const Icon = styled.img`
  width: 45px;
`;
const ActiveArrow = styled.img`
  grid-area: 2 / 2 / span 1 / span 1;
  justify-self: end;
  transition-duration: 0.5s;
  transition-property: transform;
  ${({dirty, active}: {dirty: boolean, active: boolean}) =>
    dirty ? `transform: rotate(${active ? 90 : 0}deg);` : ''}
`;

export const PreventiveMeasureCard: React.FC = () => {
  const [dirty, setDirty] = useState(false);
  const [active, setActive] = useState(false);
  const theme = useContext(ThemeContext);
  return (
      <Card
        active={active}
        dirty={dirty}
        onClick={() => {
          setActive(!active);
          !dirty && setDirty(true);
        }}>
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
          <ActiveArrow
            active={active}
            dirty={dirty}
            src={triangle}
            className="more-arrow"
          />
          <Subtitle>Stop The Spread</Subtitle>
        </MiddleContainer>
        <Icon src={womanMask} />
        {active && (
          <p style={{gridColumn: 'span 3'}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa.
          </p>
        )}
      </Card>
  );
};
