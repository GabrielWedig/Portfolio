import { GitHub, LinkedIn } from '@mui/icons-material'
import { references } from '../../public'
import * as S from './style'

export const Footer = () => {
  return (
    <S.Footer>
      <span>Copyright © Gabriel Garcia Wedig · 2024</span>
      <S.Social>
        <a href={references.github} target="_blank">
          <GitHub />
        </a>
        <a href={references.linkedin} target="_blank">
          <LinkedIn />
        </a>
      </S.Social>
    </S.Footer>
  )
}
