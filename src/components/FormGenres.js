import React from "react";

export const FormGenres = () => {
  return (
    <form id="genre">
      <h2>SELECCIONA GÉNERO</h2>
      <hr />
      <div className="genre-slc">
        <input
          type="checkbox"
          value="action"
          id="genre-checkbox1"
          onChange={prueba}
        />
        <label for="genre-checkbox1">Acción</label>
      </div>
      <div className="genre-slc">
        <input
          type="checkbox"
          value="adventure"
          id="genre-checkbox2"
          onChange={prueba}
        />
        <label for="genre-checkbox2">Aventura</label>
      </div>
      <div className="genre-slc">
        <input
          type="checkbox"
          value="animation"
          id="genre-checkbox3"
          onChange={prueba}
        />
        <label for="genre-checkbox3">Animación</label>
      </div>
      <div className="genre-slc">
        <input
          type="checkbox"
          value="biography"
          id="genre-checkbox4"
          onChange={prueba}
        />
        <label for="genre-checkbox4">Biografía</label>
      </div>
      <div className="genre-slc">
        <input
          type="checkbox"
          value="comedy"
          id="genre-checkbox5"
          onChange={prueba}
        />
        <label for="genre-checkbox5">Comedia</label>
      </div>
      <div className="genre-slc">
        <input
          type="checkbox"
          value="crime"
          id="genre-checkbox6"
          onChange={prueba}
        />
        <label for="genre-checkbox6">Crimen</label>
      </div>
      <div className="genre-slc">
        <input
          type="checkbox"
          value="documentary"
          id="genre-checkbox7"
          onChange={prueba}
        />
        <label for="genre-checkbox7">Documental</label>
      </div>
      <div className="genre-slc">
        <input
          type="checkbox"
          value="drama"
          id="genre-checkbox8"
          onChange={prueba}
        />
        <label for="genre-checkbox8">Drama</label>
      </div>
      <div className="genre-slc">
        <input
          type="checkbox"
          value="family"
          id="genre-checkbox9"
          onChange={prueba}
        />
        <label for="genre-checkbox9">Familiar</label>
      </div>
      <div className="genre-slc">
        <input
          type="checkbox"
          value="film-noir"
          id="genre-checkbox10"
          onChange={prueba}
        />
        <label for="genre-checkbox10">Cine Negro</label>
      </div>
      <div className="genre-slc">
        <input
          type="checkbox"
          value="game-show"
          id="genre-checkbox11"
          onChange={prueba}
        />
        <label for="genre-checkbox11">Programa de Juegos</label>
      </div>
      <div className="genre-slc">
        <input
          type="checkbox"
          value="history"
          id="genre-checkbox12"
          onChange={prueba}
        />
        <label for="genre-checkbox12">Historia</label>
      </div>
      <div className="genre-slc">
        <input
          type="checkbox"
          value="horror"
          id="genre-checkbox13"
          onChange={prueba}
        />
        <label for="genre-checkbox13">Terror</label>
      </div>
      <div className="genre-slc">
        <input
          type="checkbox"
          value="musical"
          id="genre-checkbox14"
          onChange={prueba}
        />
        <label for="genre-checkbox14">Musical</label>
      </div>
      <div className="genre-slc">
        <input
          type="checkbox"
          value="mystery"
          id="genre-checkbox15"
          onChange={prueba}
        />
        <label for="genre-checkbox15">Misterio</label>
      </div>
      <div className="genre-slc">
        <input
          type="checkbox"
          value="reality-tv"
          id="genre-checkbox16"
          onChange={prueba}
        />
        <label for="genre-checkbox16">Reality</label>
      </div>
      <div className="genre-slc">
        <input
          type="checkbox"
          value="romance"
          id="genre-checkbox17"
          onChange={prueba}
        />
        <label for="genre-checkbox17">Romántica</label>
      </div>
      <div className="genre-slc">
        <input
          type="checkbox"
          value="sci-fi"
          id="genre-checkbox18"
          onChange={prueba}
        />
        <label for="genre-checkbox18">Ciencia Ficción</label>
      </div>
      <div className="genre-slc">
        <input
          type="checkbox"
          value="sport"
          id="genre-checkbox19"
          onChange={prueba}
        />
        <label for="genre-checkbox19">Deporte</label>
      </div>
      <div className="genre-slc">
        <input
          type="checkbox"
          value="thriller"
          id="genre-checkbox20"
          onChange={prueba}
        />
        <label for="genre-checkbox20">Thriller</label>
      </div>
      <div className="genre-slc">
        <input
          type="checkbox"
          value="war"
          id="genre-checkbox21"
          onChange={prueba}
        />
        <label for="genre-checkbox21">Bélica</label>
      </div>
      <div className="genre-slc">
        <input
          type="checkbox"
          value="western"
          id="genre-checkbox22"
          onChange={prueba}
        />
        <label for="genre-checkbox22">Western</label>
      </div>
    </form>
  );
};

const prueba = (e) => {
  console.log(e.target.value);
};
