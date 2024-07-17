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
  gap: 20px;
  margin-bottom: 50px;

  h2 {
    font-size: 3rem;
    color: ${({ theme }) => theme.text};
    margin-right: auto;
  }
`

export const ProjectsBox = styled.div`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  justify-content: flex-start;
`
