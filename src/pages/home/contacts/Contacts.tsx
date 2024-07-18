import { ArrowUpward, ContentCopy, WhatsApp } from '@mui/icons-material'
import { Button, Chip } from '../../../components'
import { scrollToSection } from '../../../utils'
import { useTranslation } from 'react-i18next'
import { references } from '../../../public'
import { Snackbar } from '@mui/material'
import { useState } from 'react'
import * as S from './style'

export const Contacts = () => {
  const [copied, setCopied] = useState<boolean>(false)

  const { t } = useTranslation()

  const handleCopyContent = () => {
    navigator.clipboard.writeText(references.email)
    setCopied(true)
  }

  return (
    <S.Contacts id="contacts">
      <Chip>📬 {t('contacts')}</Chip>
      <h2>{t('letsTalk')}</h2>
      <S.Buttons>
        <a href={references.whatsApp} target="_blank">
          <Button>
            <WhatsApp />
            <span>{t('letsTalk')}</span>
          </Button>
        </a>
        <Button onClick={handleCopyContent}>
          <ContentCopy />
          <span>{references.email}</span>
        </Button>
      </S.Buttons>
      <Button btnType="transparent" onClick={() => scrollToSection('top')}>
        <span>{t('backTop')}</span>
        <ArrowUpward />
      </Button>
      <Snackbar
        open={copied}
        autoHideDuration={5000}
        onClose={() => setCopied(false)}
        message={t('copied')}
      />
    </S.Contacts>
  )
}
