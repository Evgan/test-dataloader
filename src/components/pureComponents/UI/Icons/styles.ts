import styled from 'styled-components'

export const StyledSVG = styled.svg`
  display: inline-block;
  user-select: none;
  fill: ${({ fill, theme }) => (fill ? '' : theme.transparent[100])}
`;
