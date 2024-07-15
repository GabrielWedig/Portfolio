import { DarkMode, LightMode } from '@mui/icons-material'
import { Button, Container } from '..'
import { scrollToSection } from '../../utils'
import * as S from './style'
import { useTranslation } from 'react-i18next'
import { useState } from 'react'
import { useTheme } from '../../hooks'

export const Header = () => {
  const [isPortuguese, setIsPortuguese] = useState<boolean>(true)

  const { t, i18n } = useTranslation()
  const { isDark, changeTheme } = useTheme()

  const changeLanguage = (toPortuguese: boolean) => {
    i18n.changeLanguage(toPortuguese ? 'pt' : 'en')
    setIsPortuguese(toPortuguese)
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
            onClick={() => changeTheme(false)}
            isActive={!isDark}
          >
            <LightMode />
          </Button>
          <Button
            btnType="transparent"
            onClick={() => changeTheme(true)}
            isActive={isDark}
          >
            <DarkMode />
          </Button>
          <Button
            btnType="transparent"
            onClick={() => changeLanguage(false)}
            isActive={!isPortuguese}
          >
            <span>EN</span>
          </Button>
          <Button
            btnType="transparent"
            onClick={() => changeLanguage(true)}
            isActive={isPortuguese}
          >
            <span>BR</span>
          </Button>
        </S.Buttons>
      </S.Header>
    </Container>
  )
}
