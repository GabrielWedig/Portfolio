import styled from 'styled-components'

export const Project = styled.div`
  border-radius: 20px;
  border: 1px solid ${({ theme }) => theme.primary};
  width: 360px;
  height: max-content;
  padding: 30px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  transition: all 0.3s ease;

  h3 {
    font-size: 1.5rem;
    color: ${({ theme }) => theme.title};
  }

  p {
    color: ${({ theme }) => theme.text};
  }

  img {
    border-radius: 10px;
  }

  &:hover {
    background-color: ${({ theme }) => theme.secondary};;
  }
`

export const Technologies = styled.div`
  display: flex;
  gap: 5px;
  flex-wrap: wrap;
`

export const Buttons = styled.div`
  display: flex;
  justify-content: space-between;
`
