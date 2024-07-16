import styled from 'styled-components'

export const Header = styled.header`
  background-color: ${({ theme }) => theme.secondary};
  display: flex;
  justify-content: space-between;
  padding: 10px 20px;
  border-radius: 10px;
  font-size: 18px;
  margin: 20px 0;
`

export const Navigation = styled.header`
  display: flex;
  gap: 10px;
  padding: 5px;
`

export const Buttons = styled.div`
  display: flex;

  span {
    font-weight: 800;
    font-size: 1.1rem;
  }
`

export const Divide = styled.div`
  width: 1px;
  background-color: ${({ theme }) => theme.text};
`
