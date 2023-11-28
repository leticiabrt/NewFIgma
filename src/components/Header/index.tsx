import * as S from "./styles"
import Busca from "../../assets/busca.png"
import Estante from "../../assets/estante.png"
import Perfil from "../../assets/perfil.png"
import Home from "../../assets/home.png"
import logo from "../../assets/logo.png"

import { Link, useNavigate } from "react-router-dom"
import { GrLogout } from "react-icons/gr"
import { useContext } from "react"
import { AuthContext } from "../../contexts/authContext"


export function Header() {

  const { user, signOut } = useContext(AuthContext)
  const navigate = useNavigate();
  async function logout() {
    await signOut()
    navigate('/login')
  }

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
            <a href="/List"><img src={Estante} alt="Estante" /></a>
          </li>
          <li>
            <a href="/"><img src={Home} alt="Home" /></a>
          </li>
        </ul>

        {
          user ? (
            <ul>
              <li>
                <Link to="/adm/message">Mensagem</Link>
              </li>
              <li>
                <button onClick={logout}>{user.name} <GrLogout /></button>
              </li>
            </ul>
          ) : (
            <ul>
              <li>
                <Link to="/login"><img src={Perfil} alt="Login" /></Link>
              </li>
              <li>
                <Link to="/cadastrar">Cadastrar</Link>
              </li>
            </ul>
          )
        }

      </S.NavBar>
    </S.Header>
  )
}

