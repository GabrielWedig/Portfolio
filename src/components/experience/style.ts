import styled from 'styled-components'

export const Experience = styled.div`
  border-radius: 20px;
  border: 1px solid ${(props) => props.theme.main50};
  width: 600px;
  height: max-content;
  padding: 30px;
  display: flex;
  flex-direction: column;
  gap: 15px;

  h4 {
    font-size: 1.5rem;
    color: ${(props) => props.theme.main};
  }

  p {
    color: ${(props) => props.theme.main5};
  }
`

export const Period = styled.div`
  display: flex;
  justify-content: space-between;

  span {
    color: ${(props) => props.theme.main50};
    font-weight: 700;
  }
`
