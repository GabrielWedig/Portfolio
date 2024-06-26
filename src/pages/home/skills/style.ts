import styled from 'styled-components'
import { colors } from '../../../constants'

export const Skills = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 50px 0;

  h2 {
    font-size: 3rem;
    color: ${colors.white.main};
  }

  span {
    color: ${colors.white.main5};
  }
`

export const Techs = styled.div`
  display: flex;
  gap: 10px;

  img {
    width: 80px;
    filter: brightness(0) saturate(100%) invert(23%) sepia(13%) saturate(4102%)
      hue-rotate(223deg) brightness(90%) contrast(103%);
  }
`
