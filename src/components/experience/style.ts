import styled from 'styled-components'

export const Experience = styled.div`
  border-radius: 20px;
  border: 1px solid ${({ theme }) => theme.primary};
  width: 600px;
  height: max-content;
  padding: 30px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  transition: all 0.3s ease;

  h4 {
    font-size: 1.5rem;
    color: ${({ theme }) => theme.title};
  }

  p {
    color: ${({ theme }) => theme.text};
  }

  &:hover {
    background-color: ${({ theme }) => theme.secondary};;
  }
`

export const Period = styled.div`
  display: flex;
  justify-content: space-between;

  span {
    color: ${({ theme }) => theme.primary};
    font-weight: 700;
  }
`
