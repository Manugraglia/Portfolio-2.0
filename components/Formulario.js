import React, { useState } from "react";
import useStyle from "../utils/formulario";

export default function Formulario() {
  const formulario = useStyle();
  const [form, setForm] = useState({
    nombre: "",
    correo: "",
    telefono: "",
    mensaje: "",
  });
  const [error, setError] = useState(false);
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  const { nombre, telefono, correo, mensaje } = form;

  const submitCita = (e) => {
    e.preventDefault();

    // Validar
    if (
      nombre.trim() === "" ||
      correo.trim() === "" ||
      mensaje.trim() === "" ||
      telefono.trim() === ""
    ) {
      setError(true);
      return;
    }

    // Eliminar msj Erorr

    setError(false);

    // Reiniciar form
    setForm({
      nombre: "",
      correo: "",
      telefono: "",
      mensaje: "",
    });
  };
  return (
    <>
      <div className={formulario.principal} id="contact">
        <div className={formulario.contact}>
          <div className={formulario.cardcontact}>
            <h1>Contact</h1>
            <div className={formulario.icon}>
              <i className="fas fa-phone-square-alt">+54 3412562918</i>
              <i className="fab fa-github-square">
                <a
                  href="https://github.com/Manugraglia?tab=repositories"
                  target="_blank"
                >
                  GitHub
                </a>
              </i>

              <i className="fab fa-linkedin">
                <a
                  href="https://www.linkedin.com/in/manuel-graglia-0a8a3320a/"
                  target="_blank"
                >
                  Linkedin
                </a>
              </i>
            </div>
          </div>
        </div>
        <div className={formulario.register}>
          {error ? (
            <p className={formulario.error}>
              Todos los campos son obligatorios
            </p>
          ) : null}
          <form onSubmit={submitCita} className={formulario.boton}>
            <label htmlFor="nombre"></label>
            <input
              onChange={handleChange}
              className={formulario.control}
              type="text"
              name="nombre"
              value={nombre}
              placeholder="Username"
            ></input>
            <label htmlFor="correo"></label>
            <input
              onChange={handleChange}
              className={formulario.control}
              type="email"
              value={correo}
              name="correo"
              placeholder="E-mail"
            ></input>
            <label htmlFor="phone"></label>
            <input
              onChange={handleChange}
              className={formulario.control}
              type="number"
              value={telefono}
              name="telefono"
              placeholder="Phone"
            ></input>
            <label className={formulario.mensaje} htmlFor="mensaje">
              <textarea
                className={formulario.mensaje}
                name="mensaje"
                onChange={handleChange}
                placeholder="Message"
                value={mensaje}
              ></textarea>
            </label>
            <input
              onChange={handleChange}
              className={formulario.button}
              type="submit"
              value="Send Message"
            ></input>
          </form>
        </div>
      </div>
    </>
  );
}
