import React, { useState } from "react";
import styled from "styled-components";
import Modal from "./Modal";

const initialParams = null;

const MediaForm = ({ handleSearch }) => {
  const [urlParams, setUrlParams] = useState(initialParams);

  const [filmTypeState, setFilmTypeState] = useState(false);
  const [genreState, setGenreState] = useState(false);
  const [extraOptionsState, setExtraOptionsState] = useState(false);
  const [votes, setVotes] = useState(10000);
  const [top, setTop] = useState(100);

  const [types, setTypes] = useState([]);
  const [genres, setGenres] = useState([]);

  const handleFilmModal = () => {
    setFilmTypeState(!filmTypeState);
    setTypes([]);
  };

  const handleGenreModal = () => {
    setGenreState(!genreState);
    setGenres([]);
  };

  const handleExtraOptionsModal = () => {
    setExtraOptionsState(!extraOptionsState);
    setVotes(10000);
    setTop(100);
  };

  const typesHandleChecked = (e) => {
    if (!types.includes(e.target.value)) {
      types.push(e.target.value);
    } else {
      setTypes(types.filter((item) => item !== e.target.value));
    }
  };

  const genresHandleChecked = (e) => {
    if (!genres.includes(e.target.value)) {
      genres.push(e.target.value);
    } else {
      setGenres(genres.filter((item) => item !== e.target.value));
    }
  };

  /* const cleanForm = () => {
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
  }; */

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

    console.log("Types: ", typesFilter);
    console.log("Genres: ", genresFilter);
    console.log("Votes: ", votes);
    console.log("Top: ", top);

    const info = {
      types: typesFilter,
      genres: genresFilter,
      minVotes: votes,
      top: top,
    };

    setUrlParams(info);
    handleSearch(info);
    setUrlParams(initialParams);
    /* cleanForm(); */
    document.querySelector(".footer").scrollIntoView({ behavior: "smooth" });
  };

  return (
    /* <div className="container">
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
        <h3 id="popup-text" className="none">
          Cuanto mayor sea la cantidad mínima, más confiable serán los títulos
          mostrados en cuanto a su calidad.
        </h3>
      </div>
      <div className="top-section">
        <select id="top-number">
          <option defaultValue="100" value="100">
            Seleccione cantidad de títulos a mostrar (100 por defecto)
          </option>
          <option value="50">Top 50</option>
          <option value="100">Top 100</option>
          <option value="150">Top 150</option>
          <option value="200">Top 200</option>
          <option value="250">Top 250</option>
        </select>
      </div>
      <hr /> */
    <div className="container">
      <ButtonContainer>
        <Button onClick={handleFilmModal}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-camera-reels modal-icon"
            viewBox="0 0 16 16"
          >
            <path d="M6 3a3 3 0 1 1-6 0 3 3 0 0 1 6 0zM1 3a2 2 0 1 0 4 0 2 2 0 0 0-4 0z" />
            <path d="M9 6h.5a2 2 0 0 1 1.983 1.738l3.11-1.382A1 1 0 0 1 16 7.269v7.462a1 1 0 0 1-1.406.913l-3.111-1.382A2 2 0 0 1 9.5 16H2a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h7zm6 8.73V7.27l-3.5 1.555v4.35l3.5 1.556zM1 8v6a1 1 0 0 0 1 1h7.5a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1z" />
            <path d="M9 6a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM7 3a2 2 0 1 1 4 0 2 2 0 0 1-4 0z" />
          </svg>
          SELECCIONE TIPO DE FILM
        </Button>
        <Button onClick={handleGenreModal}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-film modal-icon"
            viewBox="0 0 16 16"
          >
            <path d="M0 1a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V1zm4 0v6h8V1H4zm8 8H4v6h8V9zM1 1v2h2V1H1zm2 3H1v2h2V4zM1 7v2h2V7H1zm2 3H1v2h2v-2zm-2 3v2h2v-2H1zM15 1h-2v2h2V1zm-2 3v2h2V4h-2zm2 3h-2v2h2V7zm-2 3v2h2v-2h-2zm2 3h-2v2h2v-2z" />
          </svg>
          SELECCIONE GÉNERO/S
        </Button>
        <Button onClick={handleExtraOptionsModal}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-tools modal-icon"
            viewBox="0 0 16 16"
          >
            <path d="M1 0 0 1l2.2 3.081a1 1 0 0 0 .815.419h.07a1 1 0 0 1 .708.293l2.675 2.675-2.617 2.654A3.003 3.003 0 0 0 0 13a3 3 0 1 0 5.878-.851l2.654-2.617.968.968-.305.914a1 1 0 0 0 .242 1.023l3.27 3.27a.997.997 0 0 0 1.414 0l1.586-1.586a.997.997 0 0 0 0-1.414l-3.27-3.27a1 1 0 0 0-1.023-.242L10.5 9.5l-.96-.96 2.68-2.643A3.005 3.005 0 0 0 16 3c0-.269-.035-.53-.102-.777l-2.14 2.141L12 4l-.364-1.757L13.777.102a3 3 0 0 0-3.675 3.68L7.462 6.46 4.793 3.793a1 1 0 0 1-.293-.707v-.071a1 1 0 0 0-.419-.814L1 0Zm9.646 10.646a.5.5 0 0 1 .708 0l2.914 2.915a.5.5 0 0 1-.707.707l-2.915-2.914a.5.5 0 0 1 0-.708ZM3 11l.471.242.529.026.287.445.445.287.026.529L5 13l-.242.471-.026.529-.445.287-.287.445-.529.026L3 15l-.471-.242L2 14.732l-.287-.445L1.268 14l-.026-.529L1 13l.242-.471.026-.529.445-.287.287-.445.529-.026L3 11Z" />
          </svg>
          OPCIONES EXTRAS
        </Button>
      </ButtonContainer>

      {/* Type Modal */}

      <Modal
        state={filmTypeState}
        setState={setFilmTypeState}
        title="SELECCIONA TIPO DE FILM"
      >
        <Content className="type-content">
          <div className="type">
            <div className="type-section-1">
              <div className="type-slc">
                <input
                  type="checkbox"
                  value="feature"
                  id="type-checkbox1"
                  onChange={typesHandleChecked}
                  className="type-input"
                />
                <label className="type-label" htmlFor="type-checkbox1">
                  Película
                </label>
              </div>
              <div className="type-slc">
                <input
                  type="checkbox"
                  value="tv_series"
                  id="type-checkbox2"
                  onChange={typesHandleChecked}
                  className="type-input"
                />
                <label className="type-label" htmlFor="type-checkbox2">
                  Serie
                </label>
              </div>
              <div className="type-slc">
                <input
                  type="checkbox"
                  value="tv_movie"
                  id="type-checkbox3"
                  onChange={typesHandleChecked}
                  className="type-input"
                />
                <label className="type-label" htmlFor="type-checkbox3">
                  Película de TV
                </label>
              </div>
            </div>
            <div className="type-section-2">
              <div className="type-slc">
                <input
                  type="checkbox"
                  value="tv_miniseries"
                  id="type-checkbox4"
                  onChange={typesHandleChecked}
                  className="type-input"
                />
                <label className="type-label" htmlFor="type-checkbox4">
                  Mini-Serie
                </label>
              </div>
              <div className="type-slc">
                <input
                  type="checkbox"
                  value="documentary"
                  id="type-checkbox5"
                  onChange={typesHandleChecked}
                  className="type-input"
                />
                <label className="type-label" htmlFor="type-checkbox5">
                  Documental
                </label>
              </div>
              <div className="type-slc">
                <input
                  type="checkbox"
                  value="short"
                  id="type-checkbox6"
                  onChange={typesHandleChecked}
                  className="type-input"
                />
                <label className="type-label" htmlFor="type-checkbox6">
                  Cortometraje
                </label>
              </div>
            </div>
          </div>
          <AcceptButton onClick={() => setFilmTypeState(!filmTypeState)}>
            ACEPTAR
          </AcceptButton>
        </Content>
      </Modal>

      {/* Genre Modal */}

      <Modal
        state={genreState}
        setState={setGenreState}
        title="SELECCIONE GÉNERO/S"
      >
        <Content className="genre-content">
          <div className="genre">
            <div className="genre-slc">
              <input
                type="checkbox"
                value="action"
                id="genre-checkbox1"
                onChange={genresHandleChecked}
                className="genre-input"
              />
              <label className="genre-label" htmlFor="genre-checkbox1">
                Acción
              </label>
            </div>
            <div className="genre-slc">
              <input
                type="checkbox"
                value="adventure"
                id="genre-checkbox2"
                onChange={genresHandleChecked}
                className="genre-input"
              />
              <label className="genre-label" htmlFor="genre-checkbox2">
                Aventura
              </label>
            </div>
            <div className="genre-slc">
              <input
                type="checkbox"
                value="animation"
                id="genre-checkbox3"
                onChange={genresHandleChecked}
                className="genre-input"
              />
              <label className="genre-label" htmlFor="genre-checkbox3">
                Animación
              </label>
            </div>
            <div className="genre-slc">
              <input
                type="checkbox"
                value="biography"
                id="genre-checkbox4"
                onChange={genresHandleChecked}
                className="genre-input"
              />
              <label className="genre-label" htmlFor="genre-checkbox4">
                Biografía
              </label>
            </div>
            <div className="genre-slc">
              <input
                type="checkbox"
                value="comedy"
                id="genre-checkbox5"
                onChange={genresHandleChecked}
                className="genre-input"
              />
              <label className="genre-label" htmlFor="genre-checkbox5">
                Comedia
              </label>
            </div>

            <div className="genre-slc">
              <input
                type="checkbox"
                value="crime"
                id="genre-checkbox6"
                onChange={genresHandleChecked}
                className="genre-input"
              />
              <label className="genre-label" htmlFor="genre-checkbox6">
                Crimen
              </label>
            </div>
            <div className="genre-slc">
              <input
                type="checkbox"
                value="documentary"
                id="genre-checkbox7"
                onChange={genresHandleChecked}
                className="genre-input"
              />
              <label className="genre-label" htmlFor="genre-checkbox7">
                Documental
              </label>
            </div>
            <div className="genre-slc">
              <input
                type="checkbox"
                value="drama"
                id="genre-checkbox8"
                onChange={genresHandleChecked}
                className="genre-input"
              />
              <label className="genre-label" htmlFor="genre-checkbox8">
                Drama
              </label>
            </div>
            <div className="genre-slc">
              <input
                type="checkbox"
                value="family"
                id="genre-checkbox9"
                onChange={genresHandleChecked}
                className="genre-input"
              />
              <label className="genre-label" htmlFor="genre-checkbox9">
                Familiar
              </label>
            </div>
            <div className="genre-slc">
              <input
                type="checkbox"
                value="fantasy"
                id="genre-checkbox10"
                onChange={genresHandleChecked}
                className="genre-input"
              />
              <label className="genre-label" htmlFor="genre-checkbox10">
                Fantasía
              </label>
            </div>

            <div className="genre-slc">
              <input
                type="checkbox"
                value="film_noir"
                id="genre-checkbox11"
                onChange={genresHandleChecked}
                className="genre-input"
              />
              <label className="genre-label" htmlFor="genre-checkbox11">
                Cine Negro
              </label>
            </div>
            <div className="genre-slc">
              <input
                type="checkbox"
                value="game_show"
                id="genre-checkbox12"
                onChange={genresHandleChecked}
                className="genre-input"
              />
              <label className="genre-label" htmlFor="genre-checkbox12">
                Programa de iuegos
              </label>
            </div>
            <div className="genre-slc">
              <input
                type="checkbox"
                value="history"
                id="genre-checkbox13"
                onChange={genresHandleChecked}
                className="genre-input"
              />
              <label className="genre-label" htmlFor="genre-checkbox13">
                Historia
              </label>
            </div>
            <div className="genre-slc">
              <input
                type="checkbox"
                value="horror"
                id="genre-checkbox14"
                onChange={genresHandleChecked}
                className="genre-input"
              />
              <label className="genre-label" htmlFor="genre-checkbox14">
                Terror
              </label>
            </div>
            <div className="genre-slc">
              <input
                type="checkbox"
                value="music"
                id="genre-checkbox15"
                onChange={genresHandleChecked}
                className="genre-input"
              />
              <label className="genre-label" htmlFor="genre-checkbox15">
                Música
              </label>
            </div>

            <div className="genre-slc">
              <input
                type="checkbox"
                value="musical"
                id="genre-checkbox16"
                onChange={genresHandleChecked}
                className="genre-input"
              />
              <label className="genre-label" htmlFor="genre-checkbox16">
                Musical
              </label>
            </div>
            <div className="genre-slc">
              <input
                type="checkbox"
                value="mystery"
                id="genre-checkbox17"
                onChange={genresHandleChecked}
                className="genre-input"
              />
              <label className="genre-label" htmlFor="genre-checkbox17">
                Misterio
              </label>
            </div>
            <div className="genre-slc">
              <input
                type="checkbox"
                value="reality_tv"
                id="genre-checkbox18"
                onChange={genresHandleChecked}
                className="genre-input"
              />
              <label className="genre-label" htmlFor="genre-checkbox18">
                Reality
              </label>
            </div>
            <div className="genre-slc">
              <input
                type="checkbox"
                value="romance"
                id="genre-checkbox19"
                onChange={genresHandleChecked}
                className="genre-input"
              />
              <label className="genre-label" htmlFor="genre-checkbox19">
                Romántica
              </label>
            </div>
            <div className="genre-slc">
              <input
                type="checkbox"
                value="sci_fi"
                id="genre-checkbox20"
                onChange={genresHandleChecked}
                className="genre-input"
              />
              <label className="genre-label" htmlFor="genre-checkbox20">
                Ciencia Ficción
              </label>
            </div>

            <div className="genre-slc">
              <input
                type="checkbox"
                value="sport"
                id="genre-checkbox21"
                onChange={genresHandleChecked}
                className="genre-input"
              />
              <label className="genre-label" htmlFor="genre-checkbox21">
                Deporte
              </label>
            </div>
            <div className="genre-slc">
              <input
                type="checkbox"
                value="talk_show"
                id="genre-checkbox22"
                onChange={genresHandleChecked}
                className="genre-input"
              />
              <label className="genre-label" htmlFor="genre-checkbox22">
                Talk-Show
              </label>
            </div>
            <div className="genre-slc">
              <input
                type="checkbox"
                value="thriller"
                id="genre-checkbox23"
                onChange={genresHandleChecked}
                className="genre-input"
              />
              <label className="genre-label" htmlFor="genre-checkbox23">
                Thriller
              </label>
            </div>
            <div className="genre-slc">
              <input
                type="checkbox"
                value="war"
                id="genre-checkbox24"
                onChange={genresHandleChecked}
                className="genre-input"
              />
              <label className="genre-label" htmlFor="genre-checkbox24">
                Bélica
              </label>
            </div>
            <div className="genre-slc">
              <input
                type="checkbox"
                value="western"
                id="genre-checkbox25"
                onChange={genresHandleChecked}
                className="genre-input"
              />
              <label className="genre-label" htmlFor="genre-checkbox25">
                Western
              </label>
            </div>
          </div>

          <AcceptButton onClick={() => setGenreState(!genreState)}>
            ACEPTAR
          </AcceptButton>
        </Content>
      </Modal>

      {/* Extra Options Modal */}

      <Modal
        state={extraOptionsState}
        setState={setExtraOptionsState}
        title="OPCIONES EXTRAS"
      >
        <Content>
          <div className="extra-options">
            <div className="votes-section">
              <select
                className="num-votes"
                onClick={(e) => {
                  setVotes(e.target.value);
                }}
              >
                <option defaultValue="10000" value="10000">
                  Seleccione mínima cantidad de reseñas (+10.000 por defecto)
                </option>
                <option value="0">0 Reseñas+</option>
                <option value="250">+250 Reseñas</option>
                <option value="500">+500 Reseñas</option>
                <option value="1000">+1.000 Reseñas</option>
                <option value="2000">+2.000 Reseñas</option>
                <option value="4000">+4.000 Reseñas</option>
                <option value="8000">+8.000 Reseñas</option>
                <option value="16000">+16.000 Reseñas</option>
                <option value="32000">+32.000 Reseñas</option>
                <option value="64000">+64.000 Reseñas</option>
                <option value="100000">+100.000 Reseñas</option>
              </select>
            </div>
            <div className="top-section">
              <select
                className="top-number"
                onClick={(e) => {
                  setTop(e.target.value);
                }}
              >
                <option defaultValue="100" value="100">
                  Seleccione cantidad de títulos a mostrar (100 por defecto)
                </option>
                <option value="50">Top 50</option>
                <option value="100">Top 100</option>
                <option value="150">Top 150</option>
                <option value="200">Top 200</option>
                <option value="250">Top 250</option>
              </select>
            </div>
          </div>

          <AcceptButton
            onClick={() => setExtraOptionsState(!extraOptionsState)}
          >
            ACEPTAR
          </AcceptButton>
        </Content>
      </Modal>

      <section className="btn-section">
        <form onSubmit={handleSubmit}>
          <input
            type="submit"
            id="btn-submit"
            value="<<<  QUE MIRAR  >>>"
          ></input>
        </form>
      </section>
    </div>
  );
};

export default MediaForm;

const ButtonContainer = styled.div`
  padding: 50px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 20px;
`;

const Button = styled.button`
  width: 120vh;
  display: block;
  padding: 20px 30px;
  border-radius: 100px;
  color: var(--main-color);
  border: none;
  background: transparent;
  box-shadow: 0 0 3px 3px var(--main-color);
  cursor: pointer;
  font-family: var(--main-font);
  font-size: 2.5rem;
  letter-spacing: 0.3rem;
  font-weight: 800;
  transition: 0.5s ease all;
  margin-top: 1.4rem;
  margin-bottom: 1.4rem;

  &:hover {
    transform: scale(1.04);
  }
`;

const AcceptButton = styled.button`
  display: block;
  padding: 10px 20px;
  border-radius: 100px;
  color: var(--header-words);
  border: none;
  background: var(--main-color);
  cursor: pointer;
  font-family: "Roboto", sans-serif;
  font-weight: 800;
  font-size: 2rem;
  transition: 0.5s ease all;
  margin-top: 3rem;
  width: 100%;
  letter-spacing: 0.4rem;

  &:hover {
    transform: scale(1.01);
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    font-size: 42px;
    font-weight: 700;
    margin-bottom: 10px;
  }

  p {
    font-size: 18px;
    margin-bottom: 20px;
  }

  img {
    width: 100%;
    vertical-align: top;
    border-radius: 3px;
  }
`;
