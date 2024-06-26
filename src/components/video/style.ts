import styled from 'styled-components'
import { colors } from '../../constants'

export const Video = styled.div`
  border-radius: 20px;
  border: 1px solid ${colors.purple.main50};
  width: 350px;
  height: max-content;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 15px;
`

export const Description = styled.div`
  display: flex;
  justify-content: space-between;

  h3 {
    font-size: 1.5rem;
    color: ${colors.white.main};
  }
`

export const VideoFrame = styled.iframe`
  border: none;
  border-radius: 20px;
  height: 200px;
`
