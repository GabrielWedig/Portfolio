import ReactDOM from 'react-dom/client'
import { Home } from './pages'
import { I18nextProvider } from 'react-i18next'
import { GlobalStyles } from './utils'
import { i18n } from './utils'
import { ThemeProvider } from './hooks'

const element = document.getElementById('root') as HTMLElement
const root = ReactDOM.createRoot(element)

root.render(
  <I18nextProvider i18n={i18n}>
    <ThemeProvider>
      <GlobalStyles />
      <Home />
    </ThemeProvider>
  </I18nextProvider>
)
