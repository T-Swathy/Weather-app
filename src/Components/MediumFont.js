import styled from 'styled-components';
import device from './DeviceName.js';

const MediumFont = styled.h3`
  color: ${({ color }) => color || 'black'};
  display: block;
  font-weight: ${({ weight }) => weight || '600'};
  font-size: ${({ fontSize }) => fontSize || '10px'};
  text-align: ${({ align }) => align || 'left'};
  padding: 5px 0;
  ${({ firstToUpperCase }) =>
    firstToUpperCase &&
    `
  &:first-letter {
    text-transform: uppercase;
  }
  `}
  @media ${device.tablet} {
    font-size: ${({ fontSize }) => fontSize || '23px'};
  }
  @media ${device.laptop} {
    font-size: ${({ fontSize }) => fontSize || '10px'};
  } 
  @media ${device.laptopL} {
    font-size: ${({ fontSize }) => fontSize || '29px'};
  }
`;

export default MediumFont;
