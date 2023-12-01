import React from "react";
import "./DragDrop.scss";
import { post } from "../utils/http";


export const DragDrop = ({ setFoto, srcImagen, setSrcImagen}) => {
  //! Cancelando comportamiento por defelto del navegador

  const arrayEventos = ["dragenter", "gragleave", "dragover", "drop"];

  arrayEventos.forEach((eventName) => {
    document.body.addEventListener(eventName, (e) => e.preventDefault());
  });

  const handleDrop = async (e) => {
    const dataTransfer = e.dataTransfer;
    const files = dataTransfer.files;

    await handleFiles(files);
  };
  const handleChange = async (e) => {
    const files = e.target.files;
    await handleFiles(files);
  };
  const handleFiles = async (files) => {
    try {
      const file = files[0];
      await uploadFile(file);
      previewFile(file);
    } catch (error) {
      console.error("[handleFiles]", error);
    }
  };
  const previewFile = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.addEventListener("loadend", () => {
      setSrcImagen(reader.result);
    });
  };
  const uploadFile = async (file) => {
    const formData = new FormData();
    try {
      formData.append("foto", file);

      const url = import.meta.env.VITE_URL_UPLOAD;
      console.log(url)
      const imagenUp = await post(url, formData);

      setFoto(imagenUp);
    } catch (error) {
      console.error("[uploadFile]", error);
    }
  };


  return (
    <>
      <h5>Subir imagen del producto</h5>
    <div className="drag-area" onDrop={handleDrop}>
      <input
        type="file"
        id="lbl-foto"
        accept="image/*"
        onChange={handleChange}
      />
      <label className="drag-area-button" htmlFor="lbl-foto">
       Subir Archivo
      </label>

      <div className="drag-area-image">
        <img src={srcImagen} alt="" />
      </div>
    </div>
    </>

  );
};
