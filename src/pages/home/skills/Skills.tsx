import { Chip, Title } from '../../../components'
import { useTranslation } from 'react-i18next'
import { Tooltip } from '@mui/material'
import * as S from './style'
import {
  Arduino,
  AzureDevops,
  CSharp,
  CSS,
  Docker,
  Git,
  GitHub,
  HTML,
  Java,
  JavaScript,
  MongoDB,
  PHP,
  PostgresSQL,
  Python,
  ReactIcon,
  Sass,
  TypeScript
} from '../../../img'

export const Skills = () => {
  const { t } = useTranslation()

  const techs = [
    { id: 0, src: ReactIcon, title: 'React', isDaily: true },
    { id: 1, src: TypeScript, title: 'TypeScript', isDaily: true },
    { id: 2, src: AzureDevops, title: 'AzureDevops', isDaily: true },
    { id: 3, src: CSharp, title: 'C#', isDaily: true },
    { id: 4, src: CSS, title: 'CSS', isDaily: true },
    { id: 5, src: Git, title: 'Git', isDaily: true },
    { id: 6, src: GitHub, title: 'GitHub', isDaily: true },
    { id: 7, src: HTML, title: 'HTML', isDaily: true },
    { id: 8, src: JavaScript, title: 'JavaScript', isDaily: true },
    { id: 9, src: PostgresSQL, title: 'PostgresSQL', isDaily: true },
    { id: 10, src: Arduino, title: 'Arduino', isDaily: false },
    { id: 11, src: Docker, title: 'Docker', isDaily: false },
    { id: 12, src: Java, title: 'Java', isDaily: false },
    { id: 13, src: MongoDB, title: 'MongoDB', isDaily: false },
    { id: 14, src: PHP, title: 'PHP', isDaily: false },
    { id: 15, src: Python, title: 'Python', isDaily: false },
    { id: 16, src: Sass, title: 'Sass', isDaily: false }
  ]

  return (
    <S.Skills id="techs">
      <Chip>🧑‍💻 {t('skills')}</Chip>
      <Title>{t('techsAndSkills')}</Title>
      <span>{t('dailyBasis')}</span>
      <S.Techs>
        {techs
          .filter((tech) => tech.isDaily)
          .map((tech) => (
            <Tooltip key={tech.id} title={tech.title}>
              <S.Technology src={tech.src} />
            </Tooltip>
          ))}
      </S.Techs>
      <span>{t('alreadyProjects')}</span>
      <S.Techs>
        {techs
          .filter((tech) => !tech.isDaily)
          .map((tech) => (
            <Tooltip key={tech.id} title={tech.title}>
              <S.Technology src={tech.src} />
            </Tooltip>
          ))}
      </S.Techs>
    </S.Skills>
  )
}
