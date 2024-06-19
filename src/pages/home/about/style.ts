import styled from 'styled-components'
import { colors } from '../../../constants'

export const Presentation = styled.section`
  padding: 100px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 100px;
`

export const Infos = styled.article`
  display: flex;
  flex-direction: column;
  gap: 20px;

  p {
    color: ${colors.white.main5};
  }
`

export const Name = styled.h1`
  font-size: 3rem;
  color: ${colors.white.main};
`

export const Occupation = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  span,
  svg {
    color: ${colors.white.main5};
  }
`

export const Photo = styled.img`
  border-radius: 100%;
  width: 500px;
  height: 500px;
`

export const CV = styled.div`
  display: flex;
  gap: 10px;

  a {
    width: max-content;
  }
`
