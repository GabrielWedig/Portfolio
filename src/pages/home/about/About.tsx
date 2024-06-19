import { Button, Chip } from '../../../components'
import * as S from './style'
import { refs } from '../../../constants'
import { WhatsApp, GitHub, LinkedIn, Download } from '@mui/icons-material'
import Curriculum from '../../../public/curriculum.pdf'

export const About = () => {
  return (
    <S.Presentation>
      {/* <S.Photo src={Photo} alt="Gabriel's photo" /> */}
      <S.Infos>
        <Chip>👋 Saudações!</Chip>
        <S.Name>Gabriel Garcia Wedig</S.Name>
        <S.Occupation>
          <span>Desenvolvedor Full-Stack</span>
          <a href={refs.github} target="_blank">
            <GitHub />
          </a>
          <a href={refs.linkedin} target="_blank">
            <LinkedIn />
          </a>
        </S.Occupation>
        <p>
          Tenho trabalhado como desenvolvedor <strong>desde 2022</strong>,
          inicialmente fazendo projetos pessoais e posteriormente como
          Desenvolvedor Full-Stack, onde pude contribuir para o desenvolvimento
          de um projeto por completo. Minhas especialidades incluem:
          <strong>React, TypeScript, JavaScript, .NET, C# e PostgreSQL.</strong>
        </p>
        <S.CV>
          <a href={refs.whatsApp} target="_blank">
            <Button>
              <WhatsApp />
              <span>Vamos conversar!</span>
            </Button>
          </a>
          <a href={Curriculum} download="Currículo - Gabriel Wedig">
            <Button>
              <Download />
              <span>Baixar CV</span>
            </Button>
          </a>
        </S.CV>
      </S.Infos>
    </S.Presentation>
  )
}
