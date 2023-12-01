import { faFaceFrown, faFaceSmileBeam } from '@fortawesome/free-regular-svg-icons'
import './Contacto.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Contacto = () => {
  return (
    <main>
    <section className="section-contact">
      <header className="contact-header">
        <h1>Hola!</h1>
        <p>QUEREMOS ESCUCHARTE
Tu opinión nos interesa. Comunicate para realizar consultas sobre los productos, hacer sugerencias, despejar tus dudas, conocer los beneficios que te ofrecemos.

¡ESCRIBINOS POR INSTAGRAM!</p>
      </header>

      <div className="form-container">
        <form action="#" className="form-container__form">
          <label htmlFor="motivo" className="form-container__label">Motivo</label>
          <select name="motivo" id="motivo" className="form-container__select" required>
            <option value="" className="form-container__option" disabled /* selected */ hidden>- Seleccionar - </option>
            <option value="" className="form-container__option">Cancelar compra</option>
            <option value="" className="form-container__option">Cambios y devoluciones</option>
            <option value="" className="form-container__option">Envío de pedido</option>
            <option value="" className="form-container__option">Otra información</option>
          </select>

          <label htmlFor="name" className="form-container__label">Nombre completo</label>
          <input type="text" id="name" className="form-container__input" required />
          <label htmlFor="mail" className="form-container__label">Email</label>
          <input type="email" id="mail" className="form-container__input" required />
          <label htmlFor="telefono" className="form-container__label">Teléfono</label>
          <input type="number" id="telefono" className="form-container__input" required />
          <label htmlFor="comentarios" className="form-container__label">Comentarios</label>
          <textarea name="comentarios" id="comentarios" cols="30" rows="10" className="form-container__textarea"></textarea>

          <button type="submit" className="form-container__button">Enviar</button>
        </form>
      </div>

      <div className="final-form-container">
        <form action="#" className="final-form-container__form">
          <h2 className="final-form-container__title">¿Te resultó útil la información?</h2>
          <div className="final-form-container__icon-container">
            <label htmlFor="positivo" className="final-form-container__icono"><FontAwesomeIcon icon={faFaceSmileBeam} /></label>
            <input type="radio" name="opinion" id="positivo" className="final-form-container__input" value="positivo" />
            <label htmlFor="negativo" className="final-form-container__icono"><FontAwesomeIcon icon={faFaceFrown} /></label>
            <input type="radio" name="opinion" id="negativo" className="final-form-container__input" value="negativo" />
          </div>
            <input type="submit" className="final-form-container__submit" />
        </form>
      </div>

    </section>
  </main>
  )
}

export default Contacto