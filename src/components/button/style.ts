import styled from 'styled-components'

interface ButtonProps {
  $isActive: boolean
}

export const TransparentBtn = styled.button<ButtonProps>`
  background-color: transparent;
  border: none;
  color: ${({ theme, $isActive }) => ($isActive ? theme.primary : theme.text)};
  font-size: 1rem;
  font-weight: 500;
  transition: color 0.5s ease;
  display: flex;
  align-items: center;
  justify-content: space-between;

  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`

export const PrimaryBtn = styled.button<ButtonProps>`
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.secondary};
  border-radius: 12px;
  width: max-content;
  padding: 10px 20px;
  display: flex;
  align-items: center;
  gap: 10px;
  transition: all 0.3s ease;
  color: ${({ theme }) => theme.secondary};
  font-size: 0.95rem;
  font-weight: 600;

  svg {
    color: ${({ theme }) => theme.secondary};
    font-size: 1.2rem;
  }

  &:hover {
    color: ${({ theme }) => theme.primary};
    background-color: ${({ theme }) => theme.secondary};
  }
`
