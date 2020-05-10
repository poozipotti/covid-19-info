import React from 'react';
import styled from 'styled-components';

const Title = styled.h2`
  color: ${props => props.theme.primaryOneMedium};
  font-size: 1.4rem;
  font-weight: 500;
  width: 100%;
  text-align: center;
  margin: 0;
`;
const Subtitle = styled.h3`
  font-weight: 400;
  color: ${props => props.theme.foreground}
  width: 100%;
  font-size:1rem;
  height:2.1rem;
  text-align: center;
  font-wieght:500;
  margin: 0;
`;
const Warning = styled.h3`
  color: ${props => props.theme.primaryOne};
  ${(props: {important: boolean, theme: {background: string}}) =>
    props.important ? '' : `color:${props.theme.background};`}
  font-size: 1rem;
  font-weight: 500;
  width: 100%;
  text-align: center;
  margin: 0;
`;
const Card = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${props => props.theme.background};
  border-radius: 15px;
  padding: 5px;
  width: 200px;
  margin: 20px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  border: 2px solid ${props => props.theme.primaryOne};
  ${(props: {important: boolean}) =>
    props.important ? '' : 'border: 2px solid #00000000'}
`;
const Icon = styled.img`
  padding: 20px;
`;
export interface SymptomCardProps {
  icon: string;
  title: string;
  subtitle: string;
  isEmegency: boolean;
}

export const SymptomCard: React.FC<SymptomCardProps> = props => {
  /* dont know why I need the outer div but flex is messing up width */
  const {icon, title, subtitle, isEmegency} = props;

  return (
    <div style={{paddingBottom: '50px', paddingTop: '20px'}}>
      <Card important={isEmegency}>
        <Title>{title}</Title>
        <Subtitle>{subtitle}</Subtitle>
        <Warning important={isEmegency}>Get Emergency Help Now</Warning>
        <Icon src={icon} />
      </Card>
    </div>
  );
};
