import React, { useState } from 'react'
import Formulario from '../components/Formulario'
import Tabla from '../components/Tabla'
import './Alta.scss'

const Alta = () => {

  const [productoAEditar, setProductoAEditar] = useState(null)

  return (
    <>
      <h1 className='alta-header'>Formulario de alta de productos</h1>
      <Formulario productoAEditar={productoAEditar} setProductoAEditar={setProductoAEditar} />
      <hr />
      <Tabla setProductoAEditar={setProductoAEditar} />
    </>
  )
}

export default Alta
