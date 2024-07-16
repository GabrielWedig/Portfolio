import { Button, Chip } from '../../../components'
import * as S from './style'
import { refs } from '../../../constants'
import { WhatsApp, GitHub, LinkedIn, Download } from '@mui/icons-material'
import Curriculum from '../../../public/curriculum.pdf'
import { useTranslation } from 'react-i18next'

export const About = () => {
  const { t } = useTranslation()

  return (
    <S.Presentation id="home">
      {/* <S.Photo src={Photo} alt="Gabriel's photo" /> */}
      <S.Infos>
        <Chip>👋 {t('greetings')}</Chip>
        <h1>Gabriel Garcia Wedig</h1>
        <S.Occupation>
          <span>{t('occupation')}</span>
          <a href={refs.github} target="_blank">
            <GitHub />
          </a>
          <a href={refs.linkedin} target="_blank">
            <LinkedIn />
          </a>
        </S.Occupation>
        <p>{t('description')}</p>
        <S.CV>
          <a href={refs.whatsApp} target="_blank">
            <Button>
              <WhatsApp />
              <span>{t('letsTalk')}</span>
            </Button>
          </a>
          <a href={Curriculum} download="Currículo - Gabriel Wedig">
            <Button>
              <Download />
              <span>{t('downloadCV')}</span>
            </Button>
          </a>
        </S.CV>
      </S.Infos>
    </S.Presentation>
  )
}
