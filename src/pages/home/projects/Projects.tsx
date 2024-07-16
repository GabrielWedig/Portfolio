import { Button, Chip, Project } from '../../../components'
import * as S from './style'
import { Web, Storage } from '@mui/icons-material'
import projects from '../../../public/projects.json'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { LanguageTypes } from '../../../utils/i18n'

export const Projects = () => {
  const [isFront, setIsFront] = useState<boolean>(true)

  const { t, i18n } = useTranslation()
  const languageCode = i18n.language as LanguageTypes

  return (
    <S.Projects id="projects">
      <Chip>🔗 {t('portfolio')}</Chip>
      <S.TitleBox>
        <h2>{t('worksAndProjects')}</h2>
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
          .map((p) => (
            <Project
              key={p.id}
              title={p.title}
              description={p.description[languageCode]}
              repo={p.repo}
              photo={p.photo}
              technologies={p.technologies}
            />
          ))}
      </S.ProjectsBox>
    </S.Projects>
  )
}
