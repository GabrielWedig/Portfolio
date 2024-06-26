import styled from 'styled-components'
import { colors } from '../../../constants'

export const Videos = styled.section`
  display: flex;
  flex-direction: column;
  gap: 20px;

  h2 {
    font-size: 3rem;
    color: ${colors.white.main};
    margin-right: auto;
    margin-bottom: 50px;
  }
`

export const ProjectsBox = styled.div`
  display: flex;
  gap: 30px;
  flex-wrap: wrap;
  justify-content: center;
`
