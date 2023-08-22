import styled from 'styled-components'
import Fundo from "../../assets/fundo.png"


export const Section = styled.section`
  margin: 0 auto;
  width:100%;
  height: 100%;
  background-image: url(${Fundo});
  background-repeat:no-repeat;
  background-size:cover;
  min-height: calc(100vh - 9rem);

  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  align-content: stretch;
  img {
    width: 100%;
  }
  div{
    width: 20%;
  }
  button{
    width: 90px;
    background-color: rgba(0,0,0,0);
    position: absolute;
    bottom: 5rem;
    right:30px
  }
`



