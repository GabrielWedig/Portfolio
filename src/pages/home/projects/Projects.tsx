import { Button, Chip, Project } from '../../../components'
import * as S from './style'
import { Web, Storage } from '@mui/icons-material'
import projects from '../../../public/projects.json'
import { useState } from 'react'

export const Projects = () => {
  const [isFront, setIsFront] = useState<boolean>(true)

  return (
    <S.Projects>
      <Chip>🔗 Portfólio</Chip>
      <S.TitleBox>
        <h2>Trabalhos e Projetos</h2>
        <Button onClick={() => setIsFront(true)}>
          <Web />
          <span>Front-End</span>
        </Button>
        <Button onClick={() => setIsFront(false)}>
          <Storage />
          <span>Back-End</span>
        </Button>
      </S.TitleBox>
      <S.ProjectsBox>
        {projects
          .filter((p) => p.isFront === isFront)
          .map((p, index) => (
            <Project
              key={index}
              title={p.title}
              description={p.description}
              repo={p.repo}
              photo={p.photo}
              technologies={p.technologies}
            />
          ))}
      </S.ProjectsBox>
    </S.Projects>
  )
}
