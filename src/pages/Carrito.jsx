import { useContext } from 'react'
import './Carrito.scss'
import CarritoContext from '../contexts/CarritoContext'

const Carrito = () => {
  const { carrito, setCarrito, actualizarCarrito, eliminarCarritoContext, guardarCarritoContext } = useContext(CarritoContext)
  console.log(carrito)

  const handleEliminar = (id) => {
    eliminarCarritoContext(id)
  }

  const handleComprar = () => {
    guardarCarritoContext()
  }

  const calcularTotal = () => {
    let sumaTotal = carrito.reduce((total, prod) => {
      return total + (prod.precio * prod.cantidad)
    }, 0)
    return sumaTotal
  }

  function handleCambiarCantidad(e, productoId) {
    const nuevoValor = e.target.value

    const carritoActualizado = carrito.map((producto) => {
      if (producto.id === productoId) {
        return { ...producto, cantidad: nuevoValor}
      }
      return producto
    })

    setCarrito(carritoActualizado)
    actualizarCarrito(carritoActualizado)

  }

  return (
    <>
      <h1 className='carrito-header'>Listado de productos en el carrito</h1>
      {
        !carrito.length <= 0 && <button className='carrito-boton' onClick={handleComprar}>Comprar</button>
      }
      <table className='tabla-carrito'>
        <thead>
          <tr>
            <th>Foto</th>
            <th>Nombre</th>
            <th>Cantidad</th>
            <th>Precio</th>
            <th>Subtotal</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
        {
            carrito.length <= 0 ? (
              <tr>
                <td colSpan={6}><strong>No hay productos</strong></td>
              </tr>
            ) : (
              carrito.map((producto, idx) => (
                <tr key={idx}>
                  <td className='td-producto'>
                    <img src={producto.foto} alt={producto.nombre} />
                  </td>
                  <td className='td-producto'>{producto.nombre}</td>
                  <td className='td-producto'>
                    <input className='input-carrito' type="number" value={producto.cantidad} onChange={(e) => handleCambiarCantidad(e, producto.id)} min="1" />
                  </td>
                  <td className='td-producto'>{producto.precio}</td>
                  <td className='td-producto'>{producto.cantidad * producto.precio}</td>
                  <td className='td-producto'>
                    <button onClick={() => handleEliminar(producto.id)}>Eliminar</button>
                  </td>
                </tr>
              ))
            )
          }
          <tr>
            <td colSpan={3}><strong>Total</strong></td>
            <td><strong>{parseFloat(calcularTotal()).toFixed(2)}</strong></td>
            <td colSpan={2}></td>
          </tr>
        </tbody>
      </table>
    </>
  )
}

export default Carrito
Carrito