import React from "react";

export const FormType = () => {
  return (
    <form id="tapes">
      <h2>Selecciona tipo de cinta</h2>
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
