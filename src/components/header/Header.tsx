import { DarkMode, LightMode } from '@mui/icons-material'
import { Button, Container } from '..'
import { scrollToSection } from '../../utils'
import * as S from './style'
import { useTranslation } from 'react-i18next'
import { useState } from 'react'

interface HeaderProps {
  isDark: boolean
  setTheme: (isDark: boolean) => void
}

export const Header = ({ isDark, setTheme }: HeaderProps) => {
  const [isPortuguese, setIsPortuguese] = useState<boolean>(true)
  const { t, i18n } = useTranslation()

  const setLanguage = (isPortuguese: boolean) => {
    i18n.changeLanguage(isPortuguese ? 'pt' : 'en')
    setIsPortuguese(isPortuguese)
  }

  return (
    <Container id="top">
      <S.Header>
        <S.Navigation>
          <Button btnType="transparent" onClick={() => scrollToSection('home')}>
            {t('home')}
          </Button>
          <Button
            btnType="transparent"
            onClick={() => scrollToSection('projects')}
          >
            {t('projects')}
          </Button>
          <Button
            btnType="transparent"
            onClick={() => scrollToSection('techs')}
          >
            {t('technologies')}
          </Button>
          <Button
            btnType="transparent"
            onClick={() => scrollToSection('career')}
          >
            {t('career')}
          </Button>
          <Button
            btnType="transparent"
            onClick={() => scrollToSection('contacts')}
          >
            {t('contact')}
          </Button>
        </S.Navigation>
        <S.Buttons>
          <Button
            btnType="transparent"
            onClick={() => setTheme(false)}
            isActive={!isDark}
          >
            <LightMode />
          </Button>
          <Button
            btnType="transparent"
            onClick={() => setTheme(true)}
            isActive={isDark}
          >
            <DarkMode />
          </Button>
          <Button
            btnType="transparent"
            onClick={() => setLanguage(false)}
            isActive={!isPortuguese}
          >
            <span>EN</span>
          </Button>
          <Button
            btnType="transparent"
            onClick={() => setLanguage(true)}
            isActive={isPortuguese}
          >
            <span>BR</span>
          </Button>
        </S.Buttons>
      </S.Header>
    </Container>
  )
}
