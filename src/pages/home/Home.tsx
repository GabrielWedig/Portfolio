import { About, Projects } from '.'
import { Header } from '../../components'
import * as S from './style'

export const Home = () => {
  return (
    <S.Home>
      <Header />
      <About />
      <Projects />
    </S.Home>
  )
}
