import styled from 'styled-components'

export const Contacts = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  margin: 50px 0;
`

export const Buttons = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 25px;

  @media (max-width: 700px) {
    flex-direction: column;
    gap: 10px;
    align-items: center;
  }
`
