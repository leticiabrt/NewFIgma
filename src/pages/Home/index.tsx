import * as S from './styles'
import Livro1 from "../../assets/livro1.png"
import Livro2 from "../../assets/livro2.png"
import Livro3 from "../../assets/livro3.png"
import MenuLivro from "../../assets/menulivros.png"
import MenuLivro2 from "../../assets/menulivros2.png"
import Mais from "../../assets/mais.png"

export function Home() {
  return (
    <S.Section>
      <div>
        <img src={Livro1} alt="livro 1" />
        <aside><img src={MenuLivro} alt="menu 1" /></aside>
      </div>
      
      <div>
        <img src={Livro2} alt="livro 2" />
        <aside><img src={MenuLivro2} alt="menu 2" /></aside>
      </div>

      <div>
        <img src={Livro3} alt="livro 3" />
        <aside><img src={MenuLivro2} alt="menu 2" /></aside>
      </div>
      
      <button><img src={Mais} alt="mais" /></button>
    </S.Section>
  )
}
