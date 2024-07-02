import * as S from './style'

interface ExperienceProps {
  title: string
  description: string
  period: string
  periodTime: string
}

export const Experience = ({
  title,
  description,
  periodTime,
  period
}: ExperienceProps) => {
  return (
    <S.Experience>
      <h4>{title}</h4>
      <p>{description}</p>
      <S.Period>
        <span>{periodTime}</span>
        <span>{period}</span>
      </S.Period>
    </S.Experience>
  )
}
