import { Chip, Experience, Title } from '../../../components'
import { getLanguageCode } from '../../../utils'
import { useTranslation } from 'react-i18next'
import { experiences } from '../../../public'
import * as S from './style'

export const Career = () => {
  const { t } = useTranslation()

  const columns = [
    { id: 0, isAcademic: false, title: t('professional') },
    { id: 1, isAcademic: true, title: t('academic') }
  ]

  const languageCode = getLanguageCode()

  return (
    <S.Career id="career">
      <Chip>💼 {t('career')}</Chip>
      <Title>{t('journey')}</Title>
      <S.ExperiencesBox>
        {columns.map((column) => (
          <S.Column key={column.id}>
            <h3>{column.title}</h3>
            {experiences
              .filter(
                (experience) => experience.isAcademic === column.isAcademic
              )
              .map((experience) => (
                <Experience
                  key={experience.id}
                  title={experience.title[languageCode]}
                  description={experience.description[languageCode]}
                  period={experience.period[languageCode]}
                  periodTime={experience.period_time[languageCode]}
                />
              ))}
          </S.Column>
        ))}
      </S.ExperiencesBox>
    </S.Career>
  )
}
