import {BrowserRouter, Routes, Route} from "react-router-dom";
import Sobre from "./pages/Sobre";
import Contato from "./pages/Contato";
import Inicio from "./pages/Home";
function App() {

  return (
    <div>
      <BrowserRouter>
 <Routes>
 <Route path="/" element={<Inicio/>}/>
 <Route path="/sobre" element={<Sobre/>}/>
 <Route path="/contato" element={<Contato/>}/>
 </Routes>
 </BrowserRouter>

    </div>
  )
}

export default App