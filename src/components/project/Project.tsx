import { GitHub, ExpandMore, ExpandLess } from '@mui/icons-material'
import { useTranslation } from 'react-i18next'
import { useState } from 'react'
import { Button, Chip } from '..'
import * as S from './style'

interface ProjectProps {
  title: string
  description: string
  repo: string
  gif: string
  technologies: string[]
}

export const Project = ({
  title,
  description,
  repo,
  gif,
  technologies
}: ProjectProps) => {
  const [showDetails, setShowDetails] = useState<boolean>(false)

  const { t } = useTranslation()

  return (
    <S.Project>
      <h3>{title}</h3>
      <img src={gif} alt="Project Photo" />
      <S.Buttons>
        <a href={repo} target="_blank">
          <Button>
            <GitHub />
            <span>{t('repository')}</span>
          </Button>
        </a>
        <Button onClick={() => setShowDetails((current) => !current)}>
          {showDetails ? <ExpandLess /> : <ExpandMore />}
          <span>{t('details')}</span>
        </Button>
      </S.Buttons>
      {showDetails && (
        <>
          <p>{description}</p>
          <S.Technologies>
            {technologies.map((t, index) => (
              <Chip key={index}>{t}</Chip>
            ))}
          </S.Technologies>
        </>
      )}
    </S.Project>
  )
}
