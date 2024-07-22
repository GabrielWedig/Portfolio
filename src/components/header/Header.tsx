import { DarkMode, LightMode, Menu, Close } from '@mui/icons-material'
import { useTheme, useWindowWidth } from '../../hooks'
import { useTranslation } from 'react-i18next'
import { scrollToSection } from '../../utils'
import { Button, Visible } from '..'
import { useState } from 'react'
import * as S from './style'

export const Header = () => {
  const [isPortuguese, setIsPortuguese] = useState<boolean>(true)
  const [showMenu, setShowMenu] = useState<boolean>(false)

  const { t, i18n } = useTranslation()
  const { isDark, changeTheme } = useTheme()
  const { isDesktop } = useWindowWidth()

  const changeLanguage = (toPortuguese: boolean) => {
    i18n.changeLanguage(toPortuguese ? 'pt' : 'en')
    setIsPortuguese(toPortuguese)
  }

  const onMenuClick = (section: string) => {
    scrollToSection(section)
    setShowMenu(false)
  }

  return (
    <S.Header>
      <S.Navigation>
        <Visible when={isDesktop || showMenu}>
          <S.LeftBtns showMenu={showMenu}>
            <Button
              btnType="transparent"
              isActive={false}
              onClick={() => onMenuClick('home')}
            >
              {t('home')}
            </Button>
            <Button
              btnType="transparent"
              isActive={false}
              onClick={() => onMenuClick('projects')}
            >
              {t('projects')}
            </Button>
            <Button
              btnType="transparent"
              isActive={false}
              onClick={() => onMenuClick('techs')}
            >
              {t('technologies')}
            </Button>
            <Button
              btnType="transparent"
              isActive={false}
              onClick={() => onMenuClick('career')}
            >
              {t('career')}
            </Button>
            <Button
              btnType="transparent"
              isActive={false}
              onClick={() => onMenuClick('contacts')}
            >
              {t('contact')}
            </Button>
          </S.LeftBtns>
        </Visible>
        <S.RightBtns>
          <Visible when={!isDesktop}>
            <Button
              btnType="transparent"
              onClick={() => setShowMenu((current) => !current)}
              isActive={false}
            >
              {showMenu ? <Close /> : <Menu />}
            </Button>
          </Visible>
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
