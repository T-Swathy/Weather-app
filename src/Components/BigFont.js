import styled from 'styled-components';
import device from './DeviceName.js';

const BigLabel = styled.h2`
  color: ${({ color }) => color || 'black'};
  display: block;
  font-weight: ${({ weight }) => weight || '600'};
  font-size: ${({ fontSize }) => fontSize || '30px'};
  text-align: ${({ align }) => align || 'left'};
  padding: 5px 0;
  ${({ firstToUpperCase }) =>
    firstToUpperCase &&
    `
  &:first-letter {
    text-transform: uppercase;
  }
  `}
 
  @media ${device.laptop} {
    font-size: ${({ fontSize }) => fontSize || '43px'};
  } 
 
`;

export default BigLabel;
