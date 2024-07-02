import { Chip, Experience } from '../../../components'
import * as S from './style'
import experiences from '../../../public/experiences.json'

export const Career = () => {
  const columns = [
    { id: 0, isAcademic: false, title: 'Profissional' },
    { id: 1, isAcademic: true, title: 'Acadêmica' }
  ]

  return (
    <S.Career>
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
                  title={e.title}
                  description={e.description}
                  period={e.period}
                  periodTime={e.period_time}
                />
              ))}
          </S.Column>
        ))}
      </S.ExperiencesBox>
    </S.Career>
  )
}
