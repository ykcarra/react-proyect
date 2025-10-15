import { useState } from 'react';
import Productos from '../components/Productos';
import Carrito from '../components/Carrito';

const Inicio = () => {
  const [carrito, setCarrito] = useState([]);
  
  const agregarAlCarrito = (producto) => {
    setCarrito([...carrito, producto]);
  };
  
  const eliminarDelCarrito = (indiceAEliminar) => {
    setCarrito(carrito.filter((_, indice) => indice !== indiceAEliminar));
  };

  return(
    <>
      <Productos agregarAlCarrito={agregarAlCarrito}/>
      <hr/>
      <Carrito 
        carrito={carrito}
        eliminarDelCarrito={eliminarDelCarrito}
      />
    </>
  );
}

export default Inicio;