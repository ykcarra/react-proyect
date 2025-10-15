import Header from './components/Header';
import Inicio from './pages/Inicio';
import Ofertas from './pages/Ofertas';
import SupermerK2 from './pages/SupermerK2';

import { Routes, Route } from 'react-router-dom';
import ProductoDetalle from './pages/ProductoDetalle';
import Footer from './components/Footer';


function App() {
  return (
    <>
      <Header/>
      <Routes>          
          <Route path='/' element={<Inicio/>}/>
          <Route path='/Ofertas' element={<Ofertas/>}/>
          <Route path='/SupermerK2' element={<SupermerK2/>}/>
          <Route path='/productos/:id' element={<ProductoDetalle/>}/>            
      </Routes> 
      <Footer/>     
    </>
  )
}

export default App
