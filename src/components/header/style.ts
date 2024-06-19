import styled from 'styled-components'
import { colors } from '../../constants'

export const Header = styled.header`
  background-color: ${colors.purple.main5};
  display: flex;
  justify-content: space-between;
  padding: 10px 50px;
  border-radius: 10px;
  font-size: 18px;
`

export const Navigation = styled.header`
  display: flex;
  gap: 10px;
  padding: 5px;
`
