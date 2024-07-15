import styled from 'styled-components'

export const Chip = styled.div`
  background-color: ${(props) => props.theme.main5};
  padding: 5px 10px;
  border-radius: 10px;
  width: max-content;
  color: ${(props) => props.theme.main};
  font-weight: 600;
`
