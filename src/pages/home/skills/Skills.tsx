import { Chip } from '../../../components'
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
} from '../../../img/icons'
import { useTranslation } from 'react-i18next'
import { Tooltip } from '@mui/material'

export const Skills = () => {
  const { t } = useTranslation()

  return (
    <S.Skills id="techs">
      <Chip>🧑‍💻 {t('skills')}</Chip>
      <h2>{t('techsAndSkills')}</h2>
      <span>{t('dailyBasis')}</span>
      <S.Techs>
        <Tooltip title="React">
          <img src={ReactIcon} />
        </Tooltip>
        <Tooltip title="TypeScript">
          <img src={TypeScript} />
        </Tooltip>
        <Tooltip title="AzureDevops">
          <img src={AzureDevops} />
        </Tooltip>
        <Tooltip title="CSharp">
          <img src={CSharp} />
        </Tooltip>
        <Tooltip title="CSS">
          <img src={CSS} />
        </Tooltip>
        <Tooltip title="Git">
          <img src={Git} />
        </Tooltip>
        <Tooltip title="GitHub">
          <img src={GitHub} />
        </Tooltip>
        <Tooltip title="HTML">
          <img src={HTML} />
        </Tooltip>
        <Tooltip title="JavaScript">
          <img src={JavaScript} />
        </Tooltip>
        <Tooltip title="PostgresSQL">
          <img src={PostgresSQL} />
        </Tooltip>
      </S.Techs>
      <span>{t('alreadyProjects')}</span>
      <S.Techs>
        <Tooltip title="Arduino">
          <img src={Arduino} />
        </Tooltip>
        <Tooltip title="Docker">
          <img src={Docker} />
        </Tooltip>
        <Tooltip title="Java">
          <img src={Java} />
        </Tooltip>
        <Tooltip title="MongoDB">
          <img src={MongoDB} />
        </Tooltip>
        <Tooltip title="PHP">
          <img src={PHP} />
        </Tooltip>
        <Tooltip title="Python">
          <img src={Python} />
        </Tooltip>
        <Tooltip title="Sass">
          <img src={Sass} />
        </Tooltip>
      </S.Techs>
    </S.Skills>
  )
}
