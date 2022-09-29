import React from "react";
import { useState } from "react";
import { App } from "../App";

export const FormGenres = () => {
  let genres = [];

  const handleChecked = (e) => {
    if (!genres.includes(e.target.value)) {
      genres.push(e.target.value);
      console.log(genres);
    } else {
      genres = genres.filter((item) => item !== e.target.value);
      console.log(genres);
    }
  };

  return (
    <form id="genre">
      <h2>
        <i>SELECCIONA GÉNERO</i>
      </h2>
      <hr />
      <div className="genre-slc">
        <input
          type="checkbox"
          value="action"
          id="genre-checkbox1"
          onChange={handleChecked}
        />
        <label for="genre-checkbox1">Acción</label>
      </div>
      <div className="genre-slc">
        <input
          type="checkbox"
          value="adventure"
          id="genre-checkbox2"
          onChange={handleChecked}
        />
        <label for="genre-checkbox2">Aventura</label>
      </div>
      <div className="genre-slc">
        <input
          type="checkbox"
          value="animation"
          id="genre-checkbox3"
          onChange={handleChecked}
        />
        <label for="genre-checkbox3">Animación</label>
      </div>
      <div className="genre-slc">
        <input
          type="checkbox"
          value="biography"
          id="genre-checkbox4"
          onChange={handleChecked}
        />
        <label for="genre-checkbox4">Biografía</label>
      </div>
      <div className="genre-slc">
        <input
          type="checkbox"
          value="comedy"
          id="genre-checkbox5"
          onChange={handleChecked}
        />
        <label for="genre-checkbox5">Comedia</label>
      </div>
      <div className="genre-slc">
        <input
          type="checkbox"
          value="crime"
          id="genre-checkbox6"
          onChange={handleChecked}
        />
        <label for="genre-checkbox6">Crimen</label>
      </div>
      <div className="genre-slc">
        <input
          type="checkbox"
          value="documentary"
          id="genre-checkbox7"
          onChange={handleChecked}
        />
        <label for="genre-checkbox7">Documental</label>
      </div>
      <div className="genre-slc">
        <input
          type="checkbox"
          value="drama"
          id="genre-checkbox8"
          onChange={handleChecked}
        />
        <label for="genre-checkbox8">Drama</label>
      </div>
      <div className="genre-slc">
        <input
          type="checkbox"
          value="family"
          id="genre-checkbox9"
          onChange={handleChecked}
        />
        <label for="genre-checkbox9">Familiar</label>
      </div>
      <div className="genre-slc">
        <input
          type="checkbox"
          value="film-noir"
          id="genre-checkbox10"
          onChange={handleChecked}
        />
        <label for="genre-checkbox10">Cine Negro</label>
      </div>
      <div className="genre-slc">
        <input
          type="checkbox"
          value="game-show"
          id="genre-checkbox11"
          onChange={handleChecked}
        />
        <label for="genre-checkbox11">Programa de Juegos</label>
      </div>
      <div className="genre-slc">
        <input
          type="checkbox"
          value="history"
          id="genre-checkbox12"
          onChange={handleChecked}
        />
        <label for="genre-checkbox12">Historia</label>
      </div>
      <div className="genre-slc">
        <input
          type="checkbox"
          value="horror"
          id="genre-checkbox13"
          onChange={handleChecked}
        />
        <label for="genre-checkbox13">Terror</label>
      </div>
      <div className="genre-slc">
        <input
          type="checkbox"
          value="musical"
          id="genre-checkbox14"
          onChange={handleChecked}
        />
        <label for="genre-checkbox14">Musical</label>
      </div>
      <div className="genre-slc">
        <input
          type="checkbox"
          value="mystery"
          id="genre-checkbox15"
          onChange={handleChecked}
        />
        <label for="genre-checkbox15">Misterio</label>
      </div>
      <div className="genre-slc">
        <input
          type="checkbox"
          value="reality-tv"
          id="genre-checkbox16"
          onChange={handleChecked}
        />
        <label for="genre-checkbox16">Reality</label>
      </div>
      <div className="genre-slc">
        <input
          type="checkbox"
          value="romance"
          id="genre-checkbox17"
          onChange={handleChecked}
        />
        <label for="genre-checkbox17">Romántica</label>
      </div>
      <div className="genre-slc">
        <input
          type="checkbox"
          value="sci-fi"
          id="genre-checkbox18"
          onChange={handleChecked}
        />
        <label for="genre-checkbox18">Ciencia Ficción</label>
      </div>
      <div className="genre-slc">
        <input
          type="checkbox"
          value="sport"
          id="genre-checkbox19"
          onChange={handleChecked}
        />
        <label for="genre-checkbox19">Deporte</label>
      </div>
      <div className="genre-slc">
        <input
          type="checkbox"
          value="thriller"
          id="genre-checkbox20"
          onChange={handleChecked}
        />
        <label for="genre-checkbox20">Thriller</label>
      </div>
      <div className="genre-slc">
        <input
          type="checkbox"
          value="war"
          id="genre-checkbox21"
          onChange={handleChecked}
        />
        <label for="genre-checkbox21">Bélica</label>
      </div>
      <div className="genre-slc">
        <input
          type="checkbox"
          value="western"
          id="genre-checkbox22"
          onChange={handleChecked}
        />
        <label for="genre-checkbox22">Western</label>
      </div>
    </form>
  );
};
