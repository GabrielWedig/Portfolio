import { Chip, Video } from '../../../components'
import projects from '../../../public/projects.json'
import * as S from './style'

export const Videos = () => {
  return (
    <S.Videos>
      <Chip>📽️ Vídeos</Chip>
      <h2>Projetos em vídeos</h2>
      <S.ProjectsBox>
        {projects.map((project) => (
          <Video title={project.title} url={project.video} />
        ))}
      </S.ProjectsBox>
    </S.Videos>
  )
}
