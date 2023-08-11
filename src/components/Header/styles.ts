import styled from "styled-components"
import { colors } from "../../styles/GlobalStyle"

export const Header = styled.header`
  /* Cabeçalho */
  border-bottom: 0.4rem solid ${colors.primary};
  display: flex;
  height: 6rem;
  picture {
    margin-left: 0.5rem;
    padding: 0.5rem;
    img {
      height: 100%;
    }
  }
  background-color: ${colors.primary};
`

export const NavBar = styled.nav`
  /* Navegação */
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: right;
  ul {
    list-style-type: none;
    display: flex;
    align-items: center;
    li {
      padding: 1rem;
      height: 100%;
      a {
        text-decoration: none;
        color: var(--black);
        display: flex;
        align-items: center;
        img {
          height: 70px;
        }
      }
    }
    li:hover {
      background-color: ${colors.secondary};
    }
  }

`