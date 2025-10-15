
import styles from './Carrito.module.css'

const Carrito = ({ carrito, eliminarDelCarrito }) => {
  return (
    <div>
      
      <h2>Carro de compras</h2>

      <div className={styles.container}>
      {carrito.map((prod, id) => (

        <div key={id} className={styles.items}>
          <img src={prod.image} alt={prod.title} height={100} width={100} />
          <p> {prod.title} : {prod.price}$ </p>
          <div>
            <button onClick={() => eliminarDelCarrito(id)} className={styles.boton}>Eliminar</button>
          </div>
        </div>

      ))}
      </div>
    </div>
  );
};

export default Carrito;