import styled from 'styled-components'
import Fundo2 from "../../assets/fundo2.0.png"

export const Section = styled.section`
  @media (max-width: 1010px) {
    grid-template-columns: auto auto auto;
  }
  @media (max-width: 768px) {
    grid-template-columns: auto auto;
    font-size: 0.9rem;
  }
  @media (max-width: 500px) {
    grid-template-columns: auto;
  }

  background-image: url(${Fundo2});
  min-height: calc(100vh - 9rem);
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  align-content: stretch;
  img {
    width: 100%;
  }
`

