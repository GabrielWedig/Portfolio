import { Container } from '../../../components'
import styled from 'styled-components'

export const Skills = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  margin: 50px 0;

  h2 {
  }

  span {
    color: ${({ theme }) => theme.text};
  }
`

export const Techs = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
  width: 100%;
`

export const Technology = styled.img`
  width: 80px;
  filter: brightness(0) saturate(100%) invert(23%) sepia(13%) saturate(4102%)
    hue-rotate(223deg) brightness(90%) contrast(103%);

  @media (max-width: 475px) {
    width: 50px;
  }

  @media (min-width: 476px) and (max-width: 768px) {
    width: 70px;
  }
`
