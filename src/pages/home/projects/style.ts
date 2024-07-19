import styled from 'styled-components'
import { Container } from '../../../components'

export const Projects = styled(Container)`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin: 50px 0;
`

export const TitleBox = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
  margin-bottom: 50px;

  @media (max-width: 1000px) {
    flex-direction: column;
    margin-bottom: 25px;
  }
`

export const Buttons = styled.div`
  display: flex;
  gap: 10px;
`

export const ProjectsBox = styled.div`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  justify-content: flex-start;
`
