import styled from 'styled-components'
import { colors } from '../../constants'

export const Project = styled.div`
  border-radius: 20px;
  border: 1px solid ${colors.purple.main50};
  width: 360px;
  height: max-content;
  padding: 30px;
  display: flex;
  flex-direction: column;
  gap: 20px;

  h3 {
    font-size: 1.5rem;
    color: ${({ theme }) => theme.text};
  }

  p {
    color: ${({ theme }) => theme.text};
  }

  img {
    border-radius: 10px;
  }
`

export const Technologies = styled.div`
  display: flex;
  gap: 5px;
  flex-wrap: wrap;
`

export const Buttons = styled.div`
  display: flex;
  justify-content: space-between;
`
