import NavBar from "../componentes/Nav"
import Cabecalho from "../componentes/Header"
import Slide from "../componentes/Slides"
import Rodape from "../componentes/Footer"
import Item from "../componentes/Itens"

function Inicio() {

  return (
    <div>
      <Cabecalho></Cabecalho>
      <NavBar></NavBar>
      <Slide></Slide>
      <br/>
      <h2>Produtos</h2>
      <Item></Item>
      <Rodape></Rodape>
    </div>
  )
}

export default Inicio