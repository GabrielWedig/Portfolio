import { Chip } from '../../../components'
import * as S from './style'
import {
  Arduino,
  AzureDevops,
  Bootstrap,
  CSharp,
  CSS,
  Docker,
  Git,
  GitHub,
  HTML,
  Java,
  JavaScript,
  MongoDB,
  PHP,
  PostgresSQL,
  Python,
  ReactIcon,
  Sass,
  TypeScript
} from '../../../img/icons'

export const Skills = () => {
  return (
    <S.Skills>
      <Chip>🧑‍💻 Skills</Chip>
      <h2>Tecnologias e habilidades</h2>
      <span>Uso no dia a dia</span>
      <S.Techs>
        <img src={ReactIcon} />
        <img src={TypeScript} />
        <img src={AzureDevops} />
        <img src={CSharp} />
        <img src={CSS} />
        <img src={Git} />
        <img src={GitHub} />
        <img src={HTML} />
        <img src={JavaScript} />
        <img src={PostgresSQL} />
      </S.Techs>
      <span>Já realizei projetos</span>
      <S.Techs>
        <img src={Arduino} />
        <img src={Bootstrap} />
        <img src={Docker} />
        <img src={Java} />
        <img src={MongoDB} />
        <img src={PHP} />
        <img src={Python} />
        <img src={Sass} />
      </S.Techs>
    </S.Skills>
  )
}
