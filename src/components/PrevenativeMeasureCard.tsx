import React, {ReactNode,useContext} from 'react';
import styled from 'styled-components';
import triangle from '../assets/triangle.svg';
import {ThemeContext} from 'styled-components';
import {useState} from 'react';
import { PReventionCardProps } from '../types';

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
  overflow: hidden;
  max-height: 60px;
  ${({active}: {active: boolean}) =>
    active
      ? `
				max-height: 300px;
			`
      : ''}
`;
const Icon = styled.img`
  align-self:center;
  width: 45px;
`;
const animationDuration =  '0.2s'
const ActiveArrow = styled.img`
  grid-area: 2 / 2 / span 1 / span 1;
  justify-self: end;
  transition-duration: ${animationDuration};
  transition-property: transform;
  ${({dirty, active}: {dirty: boolean, active: boolean}) =>
    dirty ? `transform: rotate(${active ? 90 : 0}deg);` : ''}
`;
const Content = styled.div`
  visibility: hidden;
  opacity: 0;
  padding-left: .5rem;
  padding-right: .5rem;
  padding-bottom: 100px;
  transform: scaleY(0) translateY(-5em);
  transition-duration: ${animationDuration};
  transition-property: opacity, transform;
  transition-timing-function: ease-out;
  transform-origin: top;
  ${({active}: {active: boolean}) =>
    active
      ? `			
			opacity:1;
			visibility: visible;
			transform:scaleY(1)
		`
      : ''}
`;

export interface PreventiveMeasureCardProps {
	iconLeft: string,
	iconRight: string,
	title: string,
	subtitle: string,

}

export const PreventiveMeasureCard: React.FC<PreventiveMeasureCardProps> = (props) => {
  const {iconLeft,iconRight,title,subtitle} = props;
  const [dirty, setDirty] = useState(false);
  const [active, setActive] = useState(false);
  const theme = useContext(ThemeContext);
  return (
    <Card active={active}>
      <Icon src={iconLeft} />
      <MiddleContainer
        onClick={() => {
          setActive(!active);
          !dirty && setDirty(true);
        }}>
        <Title>{title}</Title>
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
        <Subtitle>{subtitle}</Subtitle>
      </MiddleContainer>
      <Icon src={iconRight} />
      {
        <div
          style={{
            overflowY: active ? 'scroll' : 'hidden',
            height: '300px',
            gridColumn: 'span 3',
          }}>
          <Content active={active}>
            {props.children}
          </Content>
        </div>
      }
    </Card>
  );
};
