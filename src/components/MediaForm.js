import React, { useState } from "react";

const initialParams = null;

const MediaForm = ({ handleSearch }) => {
  const [urlParams, setUrlParams] = useState(initialParams);

  let types = [];
  let genres = [];

  const typesHandleChecked = (e) => {
    if (!types.includes(e.target.value)) {
      types.push(e.target.value);
    } else {
      types = types.filter((item) => item !== e.target.value);
    }
  };

  const genresHandleChecked = (e) => {
    if (!genres.includes(e.target.value)) {
      genres.push(e.target.value);
    } else {
      genres = genres.filter((item) => item !== e.target.value);
    }
  };

  const popText = () => {
    document.getElementById("popup-text").classList.toggle("none");

    var finger = document.querySelector(".popup-container").querySelector("p");

    if (!document.getElementById("popup-text").classList.contains("none")) {
      finger.style.transform = "rotate(-90deg)";
    } else {
      finger.style.transform = "rotate(180deg)";
    }
  };

  const cleanForm = () => {
    const typesOption = document
      .getElementById("type")
      .querySelectorAll(".type-slc");
    for (let i = 1; i < typesOption.length + 1; i++) {
      if (document.getElementById(`type-checkbox${i}`).checked) {
        var inputType = document.getElementById(`type-checkbox${i}`);

        inputType.checked = false;
      }
    }

    const genresOption = document
      .getElementById("genre")
      .querySelectorAll(".genre-slc");
    for (let i = 1; i < genresOption.length + 1; i++) {
      if (document.getElementById(`genre-checkbox${i}`).checked) {
        var inputGenre = document.getElementById(`genre-checkbox${i}`);

        inputGenre.checked = false;
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let tf = "";
    let gf = "";

    types.forEach((e) => {
      tf = tf + e + ",";
    });
    const typesFilter = tf.substring(0, tf.length - 1);

    genres.forEach((e) => {
      gf = gf + e + ",";
    });

    const genresFilter = gf.substring(0, gf.length - 1);

    const minVotes = document.getElementById("num-votes").value;

    const top = document.getElementById("top-number").value;

    const info = {
      types: typesFilter,
      genres: genresFilter,
      minVotes: minVotes,
      top: top,
    };

    setUrlParams(info);
    handleSearch(info);
    setUrlParams(initialParams);
    cleanForm();
  };

  return (
    <div className="container">
      <div className="selection">
        <div className="selection-type">
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
                onChange={typesHandleChecked}
              />
              <label htmlFor="type-checkbox1">Película</label>
            </div>
            <div className="type-slc">
              <input
                type="checkbox"
                value="tv_series"
                id="type-checkbox2"
                onChange={typesHandleChecked}
              />
              <label htmlFor="type-checkbox2">Serie</label>
            </div>
            <div className="type-slc">
              <input
                type="checkbox"
                value="tv_movie"
                id="type-checkbox3"
                onChange={typesHandleChecked}
              />
              <label htmlFor="type-checkbox3">Película de TV</label>
            </div>
            <div className="type-slc">
              <input
                type="checkbox"
                value="tv_miniseries"
                id="type-checkbox4"
                onChange={typesHandleChecked}
              />
              <label htmlFor="type-checkbox4">Mini-Serie</label>
            </div>
            <div className="type-slc">
              <input
                type="checkbox"
                value="documentary"
                id="type-checkbox5"
                onChange={typesHandleChecked}
              />
              <label htmlFor="type-checkbox5">Documental</label>
            </div>
            <div className="type-slc">
              <input
                type="checkbox"
                value="short"
                id="type-checkbox6"
                onChange={typesHandleChecked}
              />
              <label htmlFor="type-checkbox6">Cortometraje</label>
            </div>
          </form>
        </div>
        <div className="selection-genre">
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
                onChange={genresHandleChecked}
              />
              <label htmlFor="genre-checkbox1">Acción</label>
            </div>
            <div className="genre-slc">
              <input
                type="checkbox"
                value="adventure"
                id="genre-checkbox2"
                onChange={genresHandleChecked}
              />
              <label htmlFor="genre-checkbox2">Aventura</label>
            </div>
            <div className="genre-slc">
              <input
                type="checkbox"
                value="animation"
                id="genre-checkbox3"
                onChange={genresHandleChecked}
              />
              <label htmlFor="genre-checkbox3">Animación</label>
            </div>
            <div className="genre-slc">
              <input
                type="checkbox"
                value="biography"
                id="genre-checkbox4"
                onChange={genresHandleChecked}
              />
              <label htmlFor="genre-checkbox4">Biografía</label>
            </div>
            <div className="genre-slc">
              <input
                type="checkbox"
                value="comedy"
                id="genre-checkbox5"
                onChange={genresHandleChecked}
              />
              <label htmlFor="genre-checkbox5">Comedia</label>
            </div>
            <div className="genre-slc">
              <input
                type="checkbox"
                value="crime"
                id="genre-checkbox6"
                onChange={genresHandleChecked}
              />
              <label htmlFor="genre-checkbox6">Crimen</label>
            </div>
            <div className="genre-slc">
              <input
                type="checkbox"
                value="documentary"
                id="genre-checkbox7"
                onChange={genresHandleChecked}
              />
              <label htmlFor="genre-checkbox7">Documental</label>
            </div>
            <div className="genre-slc">
              <input
                type="checkbox"
                value="drama"
                id="genre-checkbox8"
                onChange={genresHandleChecked}
              />
              <label htmlFor="genre-checkbox8">Drama</label>
            </div>
            <div className="genre-slc">
              <input
                type="checkbox"
                value="family"
                id="genre-checkbox9"
                onChange={genresHandleChecked}
              />
              <label htmlFor="genre-checkbox9">Familiar</label>
            </div>
            <div className="genre-slc">
              <input
                type="checkbox"
                value="fantasy"
                id="genre-checkbox10"
                onChange={genresHandleChecked}
              />
              <label htmlFor="genre-checkbox10">Fantasía</label>
            </div>
            <div className="genre-slc">
              <input
                type="checkbox"
                value="film_noir"
                id="genre-checkbox11"
                onChange={genresHandleChecked}
              />
              <label htmlFor="genre-checkbox11">Cine Negro</label>
            </div>
            <div className="genre-slc">
              <input
                type="checkbox"
                value="game_show"
                id="genre-checkbox12"
                onChange={genresHandleChecked}
              />
              <label htmlFor="genre-checkbox12">Programa de iuegos</label>
            </div>
            <div className="genre-slc">
              <input
                type="checkbox"
                value="history"
                id="genre-checkbox13"
                onChange={genresHandleChecked}
              />
              <label htmlFor="genre-checkbox13">Historia</label>
            </div>
            <div className="genre-slc">
              <input
                type="checkbox"
                value="horror"
                id="genre-checkbox14"
                onChange={genresHandleChecked}
              />
              <label htmlFor="genre-checkbox14">Terror</label>
            </div>
            <div className="genre-slc">
              <input
                type="checkbox"
                value="music"
                id="genre-checkbox15"
                onChange={genresHandleChecked}
              />
              <label htmlFor="genre-checkbox15">Música</label>
            </div>
            <div className="genre-slc">
              <input
                type="checkbox"
                value="musical"
                id="genre-checkbox16"
                onChange={genresHandleChecked}
              />
              <label htmlFor="genre-checkbox16">Musical</label>
            </div>
            <div className="genre-slc">
              <input
                type="checkbox"
                value="mystery"
                id="genre-checkbox17"
                onChange={genresHandleChecked}
              />
              <label htmlFor="genre-checkbox17">Misterio</label>
            </div>
            <div className="genre-slc">
              <input
                type="checkbox"
                value="reality_tv"
                id="genre-checkbox18"
                onChange={genresHandleChecked}
              />
              <label htmlFor="genre-checkbox18">Reality</label>
            </div>
            <div className="genre-slc">
              <input
                type="checkbox"
                value="romance"
                id="genre-checkbox19"
                onChange={genresHandleChecked}
              />
              <label htmlFor="genre-checkbox19">Romántica</label>
            </div>
            <div className="genre-slc">
              <input
                type="checkbox"
                value="sci_fi"
                id="genre-checkbox20"
                onChange={genresHandleChecked}
              />
              <label htmlFor="genre-checkbox20">Ciencia Ficción</label>
            </div>
            <div className="genre-slc">
              <input
                type="checkbox"
                value="sport"
                id="genre-checkbox21"
                onChange={genresHandleChecked}
              />
              <label htmlFor="genre-checkbox21">Deporte</label>
            </div>
            <div className="genre-slc">
              <input
                type="checkbox"
                value="talk_show"
                id="genre-checkbox22"
                onChange={genresHandleChecked}
              />
              <label htmlFor="genre-checkbox22">Talk-Show</label>
            </div>
            <div className="genre-slc">
              <input
                type="checkbox"
                value="thriller"
                id="genre-checkbox23"
                onChange={genresHandleChecked}
              />
              <label htmlFor="genre-checkbox23">Thriller</label>
            </div>
            <div className="genre-slc">
              <input
                type="checkbox"
                value="war"
                id="genre-checkbox24"
                onChange={genresHandleChecked}
              />
              <label htmlFor="genre-checkbox24">Bélica</label>
            </div>
            <div className="genre-slc">
              <input
                type="checkbox"
                value="western"
                id="genre-checkbox25"
                onChange={genresHandleChecked}
              />
              <label htmlFor="genre-checkbox25">Western</label>
            </div>
          </form>
        </div>
      </div>
      <h1 className="extra-options">
        <i>OPCIONES EXTRAS</i>
      </h1>
      <hr />
      <div className="votes-section">
        <select id="num-votes">
          <option defaultValue="10000" value="10000">
            Seleccione mínima cantidad de reseñas (10000 por defecto)
          </option>
          <option value="0">0 Reseñas+</option>
          <option value="250">250 Reseñas+</option>
          <option value="500">500 Reseñas+</option>
          <option value="1000">1000 Reseñas+</option>
          <option value="2000">2000 Reseñas+</option>
          <option value="4000">4000 Reseñas+</option>
          <option value="8000">8000 Reseñas+</option>
          <option value="16000">16000 Reseñas+</option>
          <option value="32000">32000 Reseñas+</option>
          <option value="64000">64000 Reseñas+</option>
          <option value="100000">100000 Reseñas+</option>
        </select>
      </div>
      <div className="popup-container">
        <p className="clarification" onClick={popText}>
          ☟
        </p>
        <hr />
        <h3 id="popup-text" className="none">
          Cuanto mayor sea la cantidad mínima, más confiable serán los títulos
          mostrados en cuanto a su calidad.
        </h3>
      </div>
      <div className="top-section">
        <select id="top-number">
          <option defaultValue="50" value="50">
            Top 50
          </option>
          <option value="100">Top 100</option>
          <option value="150">Top 150</option>
          <option value="200">Top 200</option>
          <option value="250">Top 250</option>
        </select>
      </div>
      <hr />
      <section className="btn-section">
        <form onSubmit={handleSubmit}>
          <input type="submit" id="btn-submit" value="QUÉ MIRAR  >>>"></input>
        </form>
      </section>
    </div>
  );
};

export default MediaForm;
