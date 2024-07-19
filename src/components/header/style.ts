import styled from 'styled-components'

export const Header = styled.header`
  padding: 25px 200px;

  @media (max-width: 475px) {
    padding: 25px 50px;
  }

  @media (min-width: 476px) and (max-width: 768px) {
    padding: 25px 100px;
  }

  @media (min-width: 769px) and (max-width: 1280px) {
    padding: 25px 150px;
  }
`

export const Navigation = styled.nav`
  background-color: ${({ theme }) => theme.secondary};
  display: flex;
  justify-content: space-between;
  padding: 12px 20px;
  border-radius: 10px;

  @media (max-width: 1000px) {
    flex-direction: column;
    align-items: center;
    gap: 10px;
  }
`

export const RightBtns = styled.div`
  display: flex;

  span {
    font-weight: 800;
    font-size: 1.1rem;
  }
`

export const LeftBtns = styled.div`
  display: flex;

  @media (max-width: 1000px) {
    flex-wrap: wrap;
    justify-content: center;
    gap: 5px;
  }
`
