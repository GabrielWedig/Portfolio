import styled from 'styled-components'

export const Footer = styled.footer`
  padding: 30px 200px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.secondary};

  span,
  svg {
    color: ${({ theme }) => theme.text};
  }

  a:hover > svg {
    transition: all 0.3s ease;
    color: ${({ theme }) => theme.primary};
  }
`

export const Social = styled.div`
  display: flex;
  gap: 10px;
`
