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
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;

  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`

export const PrimaryBtn = styled.button<ButtonProps>`
  background-color: transparent;
  border: 1px solid
    ${({ theme, $isActive }) => ($isActive ? theme.primary : 'transparent')};
  color: ${({ theme }) => theme.primary};
  border-radius: 12px;
  width: max-content;
  padding: 10px 20px;
  display: flex;
  align-items: center;
  gap: 10px;
  transition: all 0.3s ease;
  font-size: 0.95rem;
  font-weight: 600;

  svg {
    color: ${({ theme }) => theme.primary};
    font-size: 1.2rem;
  }

  &:hover {
    color: ${({ theme }) => theme.primary};
    background-color: ${({ theme }) => theme.secondary};
  }
`
