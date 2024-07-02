import styled from 'styled-components'
import { colors } from '../../constants'

export const Experience = styled.div`
  border-radius: 20px;
  border: 1px solid ${colors.purple.main50};
  width: 600px;
  height: max-content;
  padding: 30px;
  display: flex;
  flex-direction: column;
  gap: 15px;

  h4 {
    font-size: 1.5rem;
    color: ${colors.white.main};
  }

  p {
    color: ${colors.white.main5};
  }
`

export const Period = styled.div`
  display: flex;
  justify-content: space-between;

  span {
    color: ${colors.purple.main50};
    font-weight: 700;
  }
`
