import { WhatsApp, GitHub, LinkedIn, Download } from '@mui/icons-material'
import { curriculum, references } from '../../../public'
import { Button, Chip, Title } from '../../../components'
import { useTranslation } from 'react-i18next'
import { photo } from '../../../img'
import * as S from './style'

export const About = () => {
  const { t } = useTranslation()

  return (
    <S.Presentation id="home">
      <S.Photo src={photo} alt="Gabriel's photo" />
      <S.Infos>
        <Chip>👋 {t('greetings')}</Chip>
        <Title>Gabriel Garcia Wedig</Title>
        <S.Occupation>
          <span>{t('occupation')}</span>
          <a href={references.github} target="_blank">
            <GitHub />
          </a>
          <a href={references.linkedin} target="_blank">
            <LinkedIn />
          </a>
        </S.Occupation>
        <p>{t('description')}</p>
        <S.CV>
          <a href={references.whatsApp} target="_blank">
            <Button>
              <WhatsApp />
              <span>{t('letsTalk')}</span>
            </Button>
          </a>
          <a href={curriculum} download="Currículo - Gabriel Wedig">
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
