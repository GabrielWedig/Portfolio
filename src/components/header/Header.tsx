import { DarkMode, LightMode } from '@mui/icons-material'
import { useTranslation } from 'react-i18next'
import { scrollToSection } from '../../utils'
import { useTheme } from '../../hooks'
import { Button, Container } from '..'
import { useState } from 'react'
import * as S from './style'

export const Header = () => {
  const [isPortuguese, setIsPortuguese] = useState<boolean>(true)

  const { t, i18n } = useTranslation()
  const { isDark, changeTheme } = useTheme()

  const changeLanguage = (toPortuguese: boolean) => {
    i18n.changeLanguage(toPortuguese ? 'pt' : 'en')
    setIsPortuguese(toPortuguese)
  }

  return (
    <S.Header>
      <S.Navigation>
        <S.LeftBtns>
          <Button
            btnType="transparent"
            isActive={false}
            onClick={() => scrollToSection('home')}
          >
            {t('home')}
          </Button>
          <Button
            btnType="transparent"
            isActive={false}
            onClick={() => scrollToSection('projects')}
          >
            {t('projects')}
          </Button>
          <Button
            btnType="transparent"
            isActive={false}
            onClick={() => scrollToSection('techs')}
          >
            {t('technologies')}
          </Button>
          <Button
            btnType="transparent"
            isActive={false}
            onClick={() => scrollToSection('career')}
          >
            {t('career')}
          </Button>
          <Button
            btnType="transparent"
            isActive={false}
            onClick={() => scrollToSection('contacts')}
          >
            {t('contact')}
          </Button>
        </S.LeftBtns>

        <S.RightBtns>
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
        </S.RightBtns>
      </S.Navigation>
    </S.Header>
  )
}
