import { Container } from '../../../components'
import styled from 'styled-components'

export const Presentation = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 25px 0;
  gap: 100px;

  @media (max-width: 1000px) {
    flex-direction: column;
    gap: 50px;
  }
`

export const Photo = styled.img`
  border-radius: 100%;
  width: 450px;

  @media (max-width: 768px) {
    width: 100%;
  }
`

export const Infos = styled.article`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;

  p {
    color: ${({ theme }) => theme.text};
  }
`

export const Occupation = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  span,
  svg {
    color: ${({ theme }) => theme.text};
  }

  a:hover > svg {
    transition: all 0.3s ease;
    color: ${({ theme }) => theme.primary};
  }
`

export const CV = styled.div`
  display: flex;
  gap: 10px;

  a {
    width: max-content;
  }
`
