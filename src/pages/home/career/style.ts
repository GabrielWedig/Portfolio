import { Container } from '../../../components'
import styled from 'styled-components'

export const Career = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  margin: 50px 0;
`

export const ExperiencesBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  margin-top: 25px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 50px;
  }
`

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  align-items: center;
  width: 40%;

  h3 {
    font-size: 2rem;
    color: ${({ theme }) => theme.title};
  }

  @media (max-width: 768px) {
    gap: 20px;
    width: 100%;
  }
`
