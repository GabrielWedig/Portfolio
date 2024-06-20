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
  gap: 15px;

  h3 {
    font-size: 1.5rem;
    color: ${colors.white.main};
  }

  p {
    color: ${colors.white.main5};
  }
`

export const Technologies = styled.div`
  display: flex;
  gap: 5px;
  flex-wrap: wrap;
`
