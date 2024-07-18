import styled from 'styled-components'

export const Header = styled.header`
  padding: 0 200px;
  padding-top: 25px;
`

export const Navigation = styled.header`
  background-color: ${({ theme }) => theme.secondary};
  display: flex;
  justify-content: space-between;
  padding: 12px 20px;
  border-radius: 10px;
`

export const RightBtns = styled.div`
  display: flex;

  span {
    font-weight: 800;
    font-size: 1.1rem;
  }
`

export const LeftBtns = styled.div`
  display: flex;
`
