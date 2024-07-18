import { Button, Chip, Project } from '../../../components'
import { Web, Storage } from '@mui/icons-material'
import { getLanguageCode } from '../../../utils'
import { useTranslation } from 'react-i18next'
import { projects } from '../../../public'
import { useState } from 'react'
import * as S from './style'

export const Projects = () => {
  const [isFront, setIsFront] = useState<boolean>(true)

  const { t } = useTranslation()
  const languageCode = getLanguageCode()

  return (
    <S.Projects id="projects">
      <Chip>🔗 {t('portfolio')}</Chip>
      <S.TitleBox>
        <h2>{t('worksAndProjects')}</h2>
        <Button onClick={() => setIsFront(true)} isActive={isFront}>
          <Web />
          <span>Front-End</span>
        </Button>
        <Button onClick={() => setIsFront(false)} isActive={!isFront}>
          <Storage />
          <span>Back-End</span>
        </Button>
      </S.TitleBox>
      <S.ProjectsBox>
        {projects
          .filter((project) => project.isFront === isFront)
          .map((project) => (
            <Project
              key={project.id}
              title={project.title}
              description={project.description[languageCode]}
              repo={project.repo}
              gif={project.gif}
              technologies={project.technologies}
            />
          ))}
      </S.ProjectsBox>
    </S.Projects>
  )
}
