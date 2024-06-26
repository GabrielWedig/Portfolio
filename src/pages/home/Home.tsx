import { About, Projects, Skills, Videos } from '.'
import { Header } from '../../components'
import * as S from './style'

export const Home = () => {
  return (
    <S.Home>
      <Header />
      <About />
      <Projects />
      <Videos />
      <Skills />
    </S.Home>
  )
}
