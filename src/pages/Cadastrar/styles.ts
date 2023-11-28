import styled from "styled-components"
import { colors } from "../../styles/GlobalStyle"
import Fundo2 from "../../assets/fundo2.0.png"

export const Section = styled.section`
  background-image: url(${Fundo2});
  min-height: calc(100vh - 9rem);
  margin: 0 auto;
  
  height: 60vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  h1 {
    color: ${colors.primary};
    font-weight: 500;
    margin-bottom: 2rem;
    font-size: 2rem;
  }
  form {
    background-color: ${colors.thirdLight};
    border: 0.2rem solid ${colors.third};
    border-radius: 1rem;
    padding: 1.5rem;
    div {
      background-color: ${colors.white};
      border: 0.15rem solid ${colors.third};
      border-radius: 0.6rem;
      display: flex;
      margin: 0.5rem 0;
      svg {
        height: 3rem;
        width: 3rem;
        padding: 0.3rem;
        color: ${colors.third};
      }
      input {
        width: 100%;
        font-size: 1rem;
        border: 0;
        background-color: transparent;
      }
    }
    p {
      margin-top: 1rem;
      a {
        text-decoration: none;
        color: ${colors.black};
        font-weight: bold;
      }
    }
  }
`