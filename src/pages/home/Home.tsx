import { ThemeProvider } from 'styled-components'
import { About, Career, Projects, Skills, Videos, Contacts } from '.'
import { Footer, Header } from '../../components'
import { GlobalStyles, darkTheme, lightTheme } from '../../utils'
import { useState } from 'react'
import { I18nextProvider } from 'react-i18next'
import i18n from '../../utils/i18n'

export const Home = () => {
  const [isDark, setIsDark] = useState<boolean>(true)

  const setTheme = (isDark: boolean) => setIsDark(isDark)
  const theme = isDark ? darkTheme : lightTheme

  return (
    <I18nextProvider i18n={i18n}>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Header isDark={isDark} setTheme={setTheme} />
        <About />
        <Projects />
        <Videos />
        <Skills />
        <Career />
        <Contacts />
        <Footer />
      </ThemeProvider>
    </I18nextProvider>
  )
}
