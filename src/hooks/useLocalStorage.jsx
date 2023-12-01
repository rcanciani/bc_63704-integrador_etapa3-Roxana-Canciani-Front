import { useState } from "react"

export const useLocalStorage = (clave, valorInicial = []) => {

    const getValorAlmacenado = () => {
        try {
            const valorAlmacenadoLS = window.localStorage.getItem(clave)
            return valorAlmacenadoLS ? JSON.parse(valorAlmacenadoLS) : valorInicial
            
        } catch (error) {
            console.error(`Error al obtener ${clave} del LocalStorage ${error}`)
            return valorInicial
        }
    }

    const [valorAlmacenado, setValorAlmacenado] = useState(getValorAlmacenado())

    const guardarValor = (valorNuevo) => {

        try {
            const nuevoValorAlmacenado = [...valorAlmacenado, valorNuevo]
            setValorAlmacenado(nuevoValorAlmacenado)
            window.localStorage.setItem(clave, JSON.stringify(nuevoValorAlmacenado))
        } catch (error) {
            console.error(`Error al guardar ${clave} del localStorage: ${error}`)
        }

    }

    const eliminarValor = (id) => {
        
        try {
            const nuevoValorAlmacenado = [...valorAlmacenado]
            const indice = nuevoValorAlmacenado.findIndex(item => item.id === id)
            nuevoValorAlmacenado.splice(indice, 1)
            setValorAlmacenado(nuevoValorAlmacenado)
            window.localStorage.setItem(clave, JSON.stringify(nuevoValorAlmacenado))

        } catch (error) {
            console.error(`Error al eliminar ${clave} del localStorage: ${error}`)            
        }
    }

    const actualizarValores = (carrito) => {
        try {
            window.localStorage.setItem('carrito', JSON.stringify(carrito))
        } catch (error) {
            console.error(`Error al actualizar el carrito ${clave} del localStorage: ${error}`)
        }
    }

    const limpiarStorage = () => {
        try {
            window.localStorage.clear()
            window.localStorage.setItem(clave, JSON.stringify(valorInicial))
            setValorAlmacenado(valorInicial)
        } catch (error) {
            console.error(`Error al limpiar el storage ${clave} del localStorage: ${error}`)
        }
    }

    return [ guardarValor, eliminarValor, limpiarStorage, actualizarValores, valorAlmacenado, setValorAlmacenado ]
}