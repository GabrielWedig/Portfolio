import { About, Career, Projects, Skills, Contacts } from '.'
import { Footer, Header } from '../../components'

export const Home = () => {
  return (
    <>
      <Header />
      <About />
      <Projects />
      <Skills />
      <Career />
      <Contacts />
      <Footer />
    </>
  )
}
