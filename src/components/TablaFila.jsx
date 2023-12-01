import { useContext } from 'react'
import './TablaFila.scss'
import ProductoContext from '../contexts/ProductoContext'
import Swal from 'sweetalert2'

const TablaFila = ({ producto, setProductoAEditar }) => {
  const { eliminarProductoContext } = useContext(ProductoContext)

  const handleDelete = (id) => {
    Swal.fire({
      title: '¿Seguro que quieres eliminar este producto?',
      text: "No lo podrás recuperar",
      color: '#000',
      icon: 'warning',
      iconColor: '#d33',
      showCancelButton: true,
      confirmButtonColor: '#172573',
      cancelButtonColor: '#d33',
      cancelButtonText: 'Cancelar',
      confirmButtonText: 'Si, seguro'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title:'Eliminado!',
          text:'El producto ha sido completamente eliminado',
          color: '#000',
          confirmButtonText: 'OK',
          confirmButtonColor: '#172573'
          
        })
        eliminarProductoContext(id)
      } else {
        return
      }
    })
  }

  const handleUpdate = (producto) => {
    setProductoAEditar(producto)
  }

  return (
    <tr>
          <td>{producto.nombre}</td>
          <td>{producto.precio}</td>
          <td>{producto.stock}</td>
          <td>{producto.categoria}</td>
          <td>{producto.detalles}</td>
          <td>
            <img className='img-row' src={producto.foto} alt={producto.nombre} />
          </td>
          <td>{producto.envio ? 'Si' : 'No'}</td>
          <td>
            <button onClick={() => handleUpdate(producto)}>Editar</button>
            <button onClick={() => handleDelete(producto.id)}>Eliminar</button>
          </td>
        </tr>
  )
}

export default TablaFila