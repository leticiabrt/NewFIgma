import * as S from "./styles"
import Instagram from "../../assets/insta.png"
import Twitter from "../../assets/twitter.png"
import Tiktok from "../../assets/tiktok.png"
import Whats from "../../assets/whats.png"


export function Footer() {
  return (
    <S.Footer>
      <a href="#"><img src={Instagram} alt="Instagram" /></a>
      <a href="#"><img src={Twitter} alt="Twitter" /></a>
      <a href="#"><img src={Tiktok} alt="Tiktok" /></a>
      <a href="#"><img src={Whats} alt="Whats" /></a>
    </S.Footer>
  )
}