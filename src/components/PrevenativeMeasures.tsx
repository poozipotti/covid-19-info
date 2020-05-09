import React from 'react';
import styled from 'styled-components'
import {PreventiveMeasureCard} from './PrevenativeMeasureCard'

const PreventiveMeasuresStyled = styled.div`
	background-color: ${props => props.theme.primaryTwoLight};
  margin:0;
`
const Title = styled.h2`
  color: ${props => props.theme.primaryTwo};
  padding-left: 3rem;
  font-weight: 500;
	padding-top: 20px;
  margin: 0;
`;
export const PreventiveMeasures: React.FC = () => (
	<PreventiveMeasuresStyled>
		<Title> Covid-19 Measures </Title>
		<div>
      <PreventiveMeasureCard/>
      <PreventiveMeasureCard/>
      <PreventiveMeasureCard/>
      <PreventiveMeasureCard/>
		</div>
		
	</PreventiveMeasuresStyled>
)
