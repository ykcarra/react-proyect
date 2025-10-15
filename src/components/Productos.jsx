import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './Productos.module.css'

const Productos = ({ agregarAlCarrito }) => {
  
  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  const URL = 'https://fakestoreapi.com/products';

  useEffect(() => {
    fetch(URL)
      .then((respuesta) => respuesta.json())
      .then((datos) => {
        setProductos(datos);
        setCargando(false);
      })
      .catch((error) => {
        setError('Error al cargar productos');
        setCargando(false);
      });
  },[]);

  if (cargando) return 'Cargando productos....';
  if (error) return error;

  return(
    <div >
      <h2>Productos</h2>

      <ul className={styles.container}>

        {productos.map((producto) => (
          <li key={producto.id} className={styles.items}>
            {producto.title} : {producto.price}$
            <img src={producto.image} height={120} width={120}/>

            <button onClick={() => agregarAlCarrito(producto)}>Agregar</button>
            <Link to={`/productos/${producto.id}`} >+info</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Productos;
