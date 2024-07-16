import { Chip, Experience } from '../../../components'
import * as S from './style'
import experiences from '../../../public/experiences.json'
import { LanguageTypes } from '../../../utils/i18n'
import { useTranslation } from 'react-i18next'

export const Career = () => {
  const columns = [
    { id: 0, isAcademic: false, title: 'Profissional' },
    { id: 1, isAcademic: true, title: 'Acadêmica' }
  ]

  const { t, i18n } = useTranslation()
  const languageCode = i18n.language as LanguageTypes

  return (
    <S.Career id="career">
      <Chip>💼 Carreira</Chip>
      <h2>Trajetória até aqui</h2>
      <S.ExperiencesBox>
        {columns.map((column) => (
          <S.Column key={column.id}>
            <h3>{column.title}</h3>
            {experiences
              .filter((e) => e.isAcademic === column.isAcademic)
              .map((e) => (
                <Experience
                  key={e.id}
                  title={e.title[languageCode]}
                  description={e.description[languageCode]}
                  period={e.period[languageCode]}
                  periodTime={e.period_time[languageCode]}
                />
              ))}
          </S.Column>
        ))}
      </S.ExperiencesBox>
    </S.Career>
  )
}
