import { Button } from '..'
import * as S from './style'

export const Header = () => {
  return (
    <S.Header>
      <img src="" alt="" />
      <S.Navigation>
        <Button buttonType="transparent" onClick={() => console.log('Home')}>
          Home
        </Button>
        <Button
          buttonType="transparent"
          onClick={() => console.log('Projetos')}
        >
          Projetos
        </Button>
        <Button
          buttonType="transparent"
          onClick={() => console.log('Tecnologias')}
        >
          Tecnologias
        </Button>
        <Button
          buttonType="transparent"
          onClick={() => console.log('Carreira')}
        >
          Carreira
        </Button>
        <Button buttonType="transparent" onClick={() => console.log('Contato')}>
          Contato
        </Button>
      </S.Navigation>
    </S.Header>
  )
}
