import * as S from "./styles"
import Busca from "../../assets/busca.png"
import Estante from "../../assets/estante.png"
import Perfil from "../../assets/perfil.png"
import Home from "../../assets/home.png"
import logo from "../../assets/logo.png"
import { useHref } from "react-router-dom"

export function Header() {
  return (
    <S.Header>
      <picture>
        <img src={logo} alt="logo" />
      </picture>
      <S.NavBar>
        <ul>
          <li>
            <a href="#"><img src={Busca} alt="Busca" /></a>
          </li>
          <li>
            <a href="#"><img src={Estante} alt="Estante" /></a>
          </li>
          <li>
            <a href="#"><img src={Perfil} alt="Perfil" /></a>
          </li>
          <li>
            <a href="#"><img src={Home} alt="Home" /></a>
          </li>
        </ul>
      </S.NavBar>
    </S.Header>
  )
}

