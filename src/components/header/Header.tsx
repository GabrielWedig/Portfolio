import { Button } from '..'
import * as S from './style'

export const Header = () => {
  return (
    <S.Header>
      <img src="" alt="" />
      <S.Navigation>
        <Button onClick={() => console.log('Test')}>Test</Button>
        <Button onClick={() => console.log('Test')}>Test</Button>
        <Button onClick={() => console.log('Test')}>Test</Button>
        <Button onClick={() => console.log('Test')}>Test</Button>
        <Button onClick={() => console.log('Test')}>Test</Button>
        <Button onClick={() => console.log('Test')}>Test</Button>
      </S.Navigation>
    </S.Header>
  )
}
