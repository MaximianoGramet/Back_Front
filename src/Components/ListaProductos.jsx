
import TarjetaProducto from "./TarjetaProducto";



const ListaProductos = ({ productos }) => {
  if (!Array.isArray(productos.data)) {
    return <div>No hay productos disponibles</div>;
  }
  return (
    <div>
      <h2>Lista de Productos:</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {productos.data.map((producto, index) => (
          <TarjetaProducto key={index} producto={producto} />
        ))}
      </div>
    </div>
  );
};

export default ListaProductos;
