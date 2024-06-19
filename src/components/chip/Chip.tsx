import * as S from './style'

interface ChipProps {
  children: React.ReactNode
}

export const Chip = ({ children }: ChipProps) => {
  return <S.Chip>{children}</S.Chip>
}
