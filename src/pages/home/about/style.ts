import { Container } from '../../../components'
import styled from 'styled-components'

export const Presentation = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 100px;
  margin: 50px 0;
`

export const Infos = styled.article`
  display: flex;
  flex-direction: column;
  gap: 20px;

  p {
    color: ${({ theme }) => theme.text};
  }

  h1 {
    font-size: 3rem;
    color: ${({ theme }) => theme.title};
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

export const Photo = styled.img`
  border-radius: 100%;
  width: 450px;
  height: 450px;
`

export const CV = styled.div`
  display: flex;
  gap: 10px;

  a {
    width: max-content;
  }
`
