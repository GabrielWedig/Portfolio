import styled from 'styled-components'
import { colors } from '../../../constants'

export const Projects = styled.section`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 50px 0;
`

export const TitleBox = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 50px;

  h2 {
    font-size: 3rem;
    color: ${colors.white.main};
    margin-right: auto;
  }
`

export const ProjectsBox = styled.div`
  display: flex;
  gap: 30px;
  flex-wrap: wrap;
  justify-content: center;
`
