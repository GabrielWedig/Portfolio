import { About, Career, Projects, Skills, Videos, Contacts } from '.'
import { Footer, Header } from '../../components'

export const Home = () => {
  return (
    <>
      <Header />
      <About />
      <Projects />
      <Videos />
      <Skills />
      <Career />
      <Contacts />
      <Footer />
    </>
  )
}
