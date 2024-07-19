import styled from 'styled-components'

export const Container = styled.section`
  padding: 0 200px;

  @media (max-width: 475px) {
    padding: 0 50px;
  }

  @media (min-width: 476px) and (max-width: 768px) {
    padding: 0 100px;
  }

  @media (min-width: 769px) and (max-width: 1280px) {
    padding: 0 150px;
  }
`
