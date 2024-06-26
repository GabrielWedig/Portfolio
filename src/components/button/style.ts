import styled from 'styled-components'
import { colors } from '../../constants'

export const TransparentBtn = styled.button`
  background-color: transparent;
  border: none;
  color: ${colors.white.main5};
  font-size: 1rem;
  transition: color 0.5s ease;
  display: flex;
  align-items: center;
  justify-content: space-between;

  &:hover {
    color: ${colors.purple.main};
  }
`

export const PrimaryBtn = styled.button`
  background-color: transparent;
  border: 1px solid ${colors.purple.main50};
  border-radius: 12px;
  width: max-content;
  padding: 10px 20px;
  display: flex;
  align-items: center;
  gap: 10px;
  transition: all 0.3s ease;
  color: ${colors.purple.main50};
  font-size: 0.95rem;
  font-weight: 600;

  svg {
    color: ${colors.purple.main50};
    font-size: 1.2rem;
  }

  &:hover {
    color: ${colors.purple.main};
    background-color: ${colors.purple.main5};
  }
`
