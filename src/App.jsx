import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './paginas/home'
import Listado from './paginas/listado'
import Register from './paginas/registro'
import Login from './paginas/login'


function App() {
  return (
    <BrowserRouter>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/Listado' element={<Listado/>}/>
      <Route path='/Registro' element={<Register/>}/>
      <Route path='/Login' element={<Login/>}/>
     </Routes>
    </BrowserRouter>
  )
}

export default App
