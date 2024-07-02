import styled from 'styled-components'
import { colors } from '../../constants'

export const Footer = styled.footer`
  padding: 30px 200px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${colors.purple.main5};

  span,
  svg {
    color: ${colors.white.main5};
  }
`

export const Social = styled.div`
  display: flex;
  gap: 10px;
`
