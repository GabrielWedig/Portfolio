import { Button } from '..'
import * as S from './style'

export const Header = () => {
  return (
    <S.Header>
      <img src="" alt="" />
      <S.Navigation>
        <Button onClick={() => console.log('Home')}>Home</Button>
        <Button onClick={() => console.log('Projetos')}>Projetos</Button>
        <Button onClick={() => console.log('Tecnologias')}>Tecnologias</Button>
        <Button onClick={() => console.log('Carreira')}>Carreira</Button>
        <Button onClick={() => console.log('Contato')}>Contato</Button>
      </S.Navigation>
    </S.Header>
  )
}
