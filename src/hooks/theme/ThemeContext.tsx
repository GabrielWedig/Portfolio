import { createContext, useContext, useState } from 'react'
import { darkTheme, lightTheme } from '../../utils'
import { ThemeProvider as _ThemeProvider } from 'styled-components'

const ThemeContext = createContext({} as ThemeContext)

interface ThemeProviderProps {
  children: React.ReactNode
}

interface ThemeContext {
  isDark: boolean
  changeTheme: (toDark: boolean) => void
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [theme, setTheme] = useState(darkTheme)

  const changeTheme = (toDark: boolean) => {
    setTheme(toDark ? darkTheme : lightTheme)
  }

  const isDark = theme === darkTheme

  return (
    <ThemeContext.Provider value={{ isDark, changeTheme }}>
      <_ThemeProvider theme={theme}>{children}</_ThemeProvider>
    </ThemeContext.Provider>
  )
}

export const useTheme = () => useContext(ThemeContext)
