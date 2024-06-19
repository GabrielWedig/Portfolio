import { About } from '.'
import { Header } from '../../components'
import * as S from './style'

export const Home = () => {
  return (
    <S.Home>
      <Header />
      <About />
    </S.Home>
  )
}
