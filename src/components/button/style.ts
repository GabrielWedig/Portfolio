import styled from 'styled-components'
import { colors } from '../../constants'

export const TransparentBtn = styled.button`
  background-color: transparent;
  border: none;
  color: ${colors.white.main5};
  font-size: 1rem;
  transition: color 0.5s ease;

  &:hover {
    color: ${colors.purple.main};
  }
`
