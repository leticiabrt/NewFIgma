import * as S from './styles'
import { dados } from "../../services/dados"
import Livro1 from "../../assets/livro1.png" 
import Livro4 from "../../assets/livro4.png"
import Livro5 from "../../assets/livro5.png"
import Avançar from "../../assets/avancar.png"
import Todos from "../../assets/todos.png"
import Lidos from "../../assets/lidos.png"
import Lendo from "../../assets/queroler.png"
import Queroler from "../../assets/queroler.png"


export function Estante() {
  return (
    <S.Section>
      <aside className='marcadores'>
        <div>
          <img src={Todos} alt="Todos" />
        </div>
        <div>
          <img src={Lidos} alt="Lidos" />
        </div>
        <div>
          <img src={Lendo} alt="Lendo" />
        </div>
        <div>
          <img src={Queroler} alt="Quero Ler" />
        </div>
      </aside>
      <aside className='livros'>
        <div>
          <img src={Livro1} alt="livro 1" />
        </div>
      
        <div>
          <img src={Livro4} alt="livro 4" />
        </div>

        <div>
          <img src={Livro5} alt="livro 5" />
        </div>

        <div>
          <img src={Avançar} alt="avançar" />
        </div>
      </aside>

    </S.Section>
  )
}
