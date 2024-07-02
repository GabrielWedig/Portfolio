import styled from 'styled-components'
import { colors } from '../../../constants'
import { Container } from '../../../components'

export const Career = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  margin: 50px 0;

  h2 {
    font-size: 3rem;
    color: ${colors.white.main};
    margin-bottom: 50px;
  }
`

export const ExperiencesBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
`

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  align-items: center;

  h3 {
    font-size: 2rem;
    color: ${colors.white.main};
  }
`
