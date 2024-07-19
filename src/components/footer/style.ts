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

  @media (max-width: 475px) {
    padding: 30px 50px;
    flex-direction: column;
    gap: 10px;
  }

  @media (min-width: 476px) and (max-width: 768px) {
    padding: 30px 100px;
  }

  @media (min-width: 769px) and (max-width: 1280px) {
    padding: 25px 150px;
  }
`

export const Social = styled.div`
  display: flex;
  gap: 10px;
`
