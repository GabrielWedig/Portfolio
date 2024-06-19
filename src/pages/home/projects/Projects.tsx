import { Button, Chip } from '../../../components'
import * as S from './style'

export const Projects = () => {
  return (
    <>
      <Chip>🔗 Portfólio</Chip>
      <S.TitleBox>
        <h2>Trabalhos e Projetos</h2>
        <Button>Front-End</Button>
        <Button>Back-End</Button>
      </S.TitleBox>
    </>
  )
}
