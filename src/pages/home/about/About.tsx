import { Chip } from '../../../components'
import * as S from './style'

export const About = () => {
  return (
    <S.Presentation>
      <S.Photo></S.Photo>
      <S.Infos>
        <Chip>👋 Saudações!</Chip>
        <S.Name>Gabriel Wedig</S.Name>
        <S.Occupation>Desenvolvedor Full-Stack</S.Occupation>
        <S.CVBox></S.CVBox>
      </S.Infos>
    </S.Presentation>
  )
}
