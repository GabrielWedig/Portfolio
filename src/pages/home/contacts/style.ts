import styled from 'styled-components'

export const Contacts = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 50px 0;

  h2 {
    font-size: 3rem;
    color: ${({ theme }) => theme.title};
    margin-bottom: 20px;
  }
`

export const Buttons = styled.div`
  display: flex;
  gap: 20px;
`
