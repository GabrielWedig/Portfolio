import { GitHub, LinkedIn } from '@mui/icons-material'
import * as S from './style'
import { refs } from '../../constants'

export const Footer = () => {
  return (
    <S.Footer>
      <span>Copyright © Gabriel Garcia Wedig · 2024</span>
      <S.Social>
        <a href={refs.github} target="_blank">
          <GitHub />
        </a>
        <a href={refs.linkedin} target="_blank">
          <LinkedIn />
        </a>
      </S.Social>
    </S.Footer>
  )
}
