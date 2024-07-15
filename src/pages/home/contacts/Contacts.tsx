import { ArrowUpward, ContentCopy, Email, WhatsApp } from '@mui/icons-material'
import { Button, Chip } from '../../../components'
import { refs } from '../../../constants'
import * as S from './style'
import { scrollToSection } from '../../../utils'

export const Contacts = () => {
  const handleCopyContent = () => {
    navigator.clipboard.writeText(refs.email)
    //fazer um alert
  }

  return (
    <S.Contacts id='contacts'>
      <Chip>📬 Contatos</Chip>
      <h2>Vamos conversar!</h2>
      <S.Buttons>
        <a href={refs.whatsApp} target="_blank">
          <Button>
            <WhatsApp />
            <span>Vamos conversar!</span>
          </Button>
        </a>
        <Button onClick={handleCopyContent}>
          <Email />
          <span>{refs.email}</span>
          <ContentCopy />
        </Button>
      </S.Buttons>
      <Button btnType="transparent" onClick={() => scrollToSection('top')}>
        <span>Voltar ao topo</span>
        <ArrowUpward />
      </Button>
    </S.Contacts>
  )
}
