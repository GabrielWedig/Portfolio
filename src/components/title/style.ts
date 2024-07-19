import styled from 'styled-components'

export const Title = styled.h2`
  font-size: 3rem;
  color: ${({ theme }) => theme.title};

  @media (max-width: 475px) {
    font-size: 2.2rem;
  }

  @media (min-width: 476px) and (max-width: 768px) {
    font-size: 2.5rem;
  }
`
