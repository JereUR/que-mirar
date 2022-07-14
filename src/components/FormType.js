import React from "react";

export const FormType = () => {
  return (
    <form id="type">
      <h2>SELECCIONA TIPO DE CINTA</h2>
      <hr />
      <br />
      <input type="checkbox" id="movie" />
      <label>Pelicula</label>
      <br />
      <input type="checkbox" id="serie" />
      <label>Serie</label>
    </form>
  );
};
