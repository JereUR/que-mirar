import React from "react";

export const FormType = () => {
  return (
    <form id="type">
      <h2>
        <i>SELECCIONA TIPO DE FILM</i>
      </h2>
      <hr />
      <div className="type-slc">
        <input
          type="checkbox"
          value="feature"
          id="type-checkbox1"
          onChange={prueba}
        />
        <label for="type-checkbox1">Pelicula</label>
      </div>
      <div className="type-slc">
        <input
          type="checkbox"
          value="tv_serie"
          id="type-checkbox2"
          onChange={prueba}
        />
        <label for="type-checkbox2">Serie</label>
      </div>
      <div className="type-slc">
        <input
          type="checkbox"
          value="tv_movie"
          id="type-checkbox3"
          onChange={prueba}
        />
        <label for="type-checkbox3">Pelicula de TV</label>
      </div>
      <div className="type-slc">
        <input
          type="checkbox"
          value="tv_special"
          id="type-checkbox4"
          onChange={prueba}
        />
        <label for="type-checkbox4">Especial de TV</label>
      </div>
      <div className="type-slc">
        <input
          type="checkbox"
          value="mini-serie"
          id="type-checkbox5"
          onChange={prueba}
        />
        <label for="type-checkbox5">Mini-Serie</label>
      </div>
      <div className="type-slc">
        <input
          type="checkbox"
          value="documentary"
          id="type-checkbox6"
          onChange={prueba}
        />
        <label for="type-checkbox6">Documental</label>
      </div>
      <div className="type-slc">
        <input
          type="checkbox"
          value="short_film"
          id="type-checkbox7"
          onChange={prueba}
        />
        <label for="type-checkbox7">Cortometraje</label>
      </div>
    </form>
  );
};

const prueba = (e) => {
  console.log(e.target.value);
};
