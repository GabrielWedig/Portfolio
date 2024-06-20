import { Button, Chip } from '..'
import * as S from './style'
import { GitHub } from '@mui/icons-material'

interface ProjectProps {
  title: string
  description: string
  repo: string
  photo: string
  technologies: string[]
}

export const Project = ({
  title,
  description,
  repo,
  photo,
  technologies
}: ProjectProps) => {
  return (
    <S.Project>
      <h3>{title}</h3>
      <p>{description}</p>
      <a href={repo}>
        <Button>
          <GitHub />
          <span>Repositório</span>
        </Button>
      </a>
      <img src={photo} alt="Project Photo" />
      <S.Technologies>
        {technologies.map((t) => (
          <Chip>{t}</Chip>
        ))}
      </S.Technologies>
    </S.Project>
  )
}
