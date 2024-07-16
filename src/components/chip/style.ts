import styled from 'styled-components'

export const Chip = styled.div`
  background-color: ${({ theme }) => theme.secondary};
  padding: 5px 8px;
  border-radius: 10px;
  width: max-content;
  color: ${({ theme }) => theme.primary};
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`
