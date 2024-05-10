import { onAddToCart } from "../lib/actions";

const TarjetaProducto = ({ producto }) => {
  const handleClick = () => {
    const storedPayload = JSON.parse(localStorage.getItem('payload'));
    onAddToCart(producto._id,storedPayload)
  }
    return (
      <div style={{ border: '1px solid #ccc', borderRadius: '5px', padding: '10px', margin: '10px', width: '200px' }}>
        <h3>{producto.title}</h3>
        <p>Precio: ${producto.price}</p>
        <p>Stock: {producto.stock}</p>
        <p>Descripción: {producto.description}</p>
        <button onClick={handleClick}>Añadir al carrito</button>
      </div>
    );
};

export default TarjetaProducto