import styled from 'styled-components'
import { colors } from '../../../constants'

export const Presentation = styled.section`
  padding: 50px 0;
`

export const Infos = styled.article`
  display: flex;
  flex-direction: column;
  gap: 20px;
`

export const Name = styled.h1`
  font-size: 3rem;
  color: ${colors.white.main};
`

export const Occupation = styled.span`
  color: ${colors.white.main5};
`

export const Photo = styled.article`
  background-color: red;
`

export const CVBox = styled.article`
  display: flex;
  flex-direction: column;
  gap: 10px;
`
