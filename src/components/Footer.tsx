import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.div`
  background-color: ${props => props.theme.foreground};
  color: ${props => props.theme.background};
  padding: 20px;
`;
const StyledLink = styled.a`

  color: ${props => props.theme.primaryTwoLight}
  :hover {
    color: ${props => props.theme.primaryTwo}
  }
  :active {
    color: ${props => props.theme.primaryTwoLight}
  }
  :visited {
    color: ${props => props.theme.primaryTwoLight}
  }
  :
`;

export const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <p>
        All Information gotten From the CDC &nbsp;
        <StyledLink href="https://www.cdc.gov/coronavirus/2019-ncov/index.html">
          More in depth information can be found here
        </StyledLink>
      </p>
      <p>
        Design by <StyledLink href="https://www.youtube.com/watch?v=c8FTctE_ui4&feature=youtu.be">Adrian Twarog</StyledLink>
      </p>
    </FooterContainer>
  );
};
