import { Container } from '../../../components'
import styled from 'styled-components'

export const Career = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  margin: 50px 0;

  h2 {
    font-size: 3rem;
    color: ${({ theme }) => theme.text};
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
    color: ${({ theme }) => theme.text};
  }
`
