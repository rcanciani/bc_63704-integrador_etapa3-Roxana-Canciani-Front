import React, { useContext, useEffect, useState } from 'react'
import ProductoContext from '../contexts/ProductoContext'
import { useForm } from '../hooks/useForm'
import './Formulario.scss'
import { DragDrop } from './DragDrop'

const formInicial = {
  id: null,
  nombre: '',
  precio: '',
  stock: '',
  marca: '',
  categoria: '',
  detalles: '',
  foto: '',
  envio: false,
}

const Formulario = ( { productoAEditar, setProductoAEditar } ) => {
  const [form, setForm, handleChange] = useForm(formInicial)
  const { crearProductoContext, actualizarProductoContext } = useContext(ProductoContext)
  const [foto, setFoto] = useState("");
  const [srcImagen, setSrcImagen] = useState("");


  useEffect(() => {
    if (productoAEditar) {
      setForm(productoAEditar);
      setSrcImagen(productoAEditar.foto);
    } else {
      setForm(formInicial);
    }
  }, [productoAEditar, setProductoAEditar]);
  
  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      if (form.id === null) {
        const productoNuevoConImagen = { ...form, ...foto };
        await crearProductoContext(productoNuevoConImagen);
      } else {
        const productoNuevoConImagen = { ...form, ...foto };
        await actualizarProductoContext(productoNuevoConImagen);
      }
      handleReset();
    } catch (error) {
      console.error("Algo ocurrió en el handleSubmit", error);
    }

  }

  const handleReset = () => {
    setForm(formInicial)
    setFoto("");
    setSrcImagen("");
  }

  return (
    <>
      <h2 className='alta-form-title'>Agregar (Editar) productos</h2>
      <form className='alta-form' onSubmit={handleSubmit}>
        <div className='alta-form__container nombre'>
          <label className='alta-form__label' htmlFor="lbl-nombre">Nombre</label>
          <input 
            className='alta-form__input'
            type="text"
            name='nombre'
            id='lbl-nombre'
            placeholder='Ingrese un nombre'
            value={form.nombre}
            onChange={handleChange} />
        </div>
        <div className='alta-form__container precio'>
          <label className='alta-form__label' htmlFor="lbl-precio">Precio</label>
          <input 
            className='alta-form__input'
            type="text"
            name='precio'
            id='lbl-precio'
            placeholder='Ingrese un precio'
            value={form.precio}
            onChange={handleChange} />
        </div>
        <div className='alta-form__container stock'>
          <label className='alta-form__label' htmlFor="lbl-stock">Stock</label>
          <input 
            className='alta-form__input'
            type="text"
            name='stock'
            id='lbl-stock'
            placeholder='Ingrese un stock'
            value={form.stock}
            onChange={handleChange} />
        </div>
        <div className='alta-form__container marca'>
          <label className='alta-form__label' htmlFor="lbl-marca">Marca</label>
          <input 
            className='alta-form__input'
            type="text"
            name='marca'
            id='lbl-marca'
            placeholder='Ingrese un marca'
            value={form.marca}
            onChange={handleChange} />
        </div>
        <div className='alta-form__container categoria'>
          <label className='alta-form__label' htmlFor="lbl-categoria">Categoría</label>
          <input 
            className='alta-form__input'
            type="text"
            name='categoria'
            id='lbl-categoria'
            placeholder='Ingrese un categoria'
            value={form.categoria}
            onChange={handleChange} />
        </div>
        <div className='alta-form__container detalles'>
          <label className='alta-form__label' htmlFor="lbl-detalles">Detalles</label>
          <input 
            className='alta-form__input'
            type="text"
            name='detalles'
            id='lbl-detalles'
            placeholder='Ingrese un detalles'
            value={form.detalles}
            onChange={handleChange} />
        </div>
        <div className='alta-form__container foto'>
        <DragDrop
              setFoto={setFoto}
              srcImagen={srcImagen}
              setSrcImagen={setSrcImagen}
            />
        </div>
        <div className='alta-form__container envio'>
          <label className='alta-form__label' htmlFor="lbl-envio">Envío</label>
          <input 
            /* className='alta-form__input' */
            type="checkbox"
            name='envio'
            id='lbl-envio'
            placeholder='Ingrese un envio'
            checked={form.envio}
            onChange={handleChange} />
        </div>
        <div className="boton">
          <button type="submit">Enviar</button>
        </div>
        <div className="boton">
          <button type="reset" onClick={handleReset}>Limpiar</button>
        </div>
        
      </form>
    </>
  )
}

export default Formulario