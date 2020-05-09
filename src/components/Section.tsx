import React from 'react';
import styled from 'styled-components';


const Wrap = styled.div`
  border-bottom: 20px solid ${(props:Props) => props.mainColor};
  border-bottom-left-radius: 70px;
  background-color: ${(props:Props)=> props.mainColor};
  width: 100vw;
`;

const OuterWrap = styled.div`
  background-color: ${(props:Props) => props.secondaryColor};
`;

interface Props {
  mainColor: string
  secondaryColor:string
}
export const Section: React.FC<Props> = (props) => (
  <OuterWrap {...props}>
    <Wrap {...props}>
      {props.children}
    </Wrap>
  </OuterWrap>
);
