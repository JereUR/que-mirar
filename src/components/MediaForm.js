import React, { useState } from "react";
import styled from "styled-components";

import { TYPES, GENRES, EXTRAS_VOTES, EXTRAS_TOP } from "./MediaForm.constants";
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
  };

  const handleGenreModal = () => {
    setGenreState(!genreState);
  };

  const handleExtraOptionsModal = () => {
    setExtraOptionsState(!extraOptionsState);
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

    const info = {
      types: typesFilter,
      genres: genresFilter,
      minVotes: votes,
      top: top,
    };

    setUrlParams(info);
    handleSearch(info);
    setUrlParams(initialParams);
    document.querySelector(".footer").scrollIntoView({ behavior: "smooth" });
  };

  const handleClickReset = () => {
    setTypes([]);
    setGenres([]);
    setVotes(EXTRAS_VOTES[10000]);
    setTop(EXTRAS_TOP[100]);
  };

  return (
    <div className="container">
      <ButtonContainer>
        <Button className="btn-film-type" onClick={handleFilmModal}>
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

      <section class="btn-reset-section">
        <button className="btn-reset" onClick={handleClickReset}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-recycle modal-icon"
            viewBox="0 0 16 16"
          >
            <path d="M9.302 1.256a1.5 1.5 0 0 0-2.604 0l-1.704 2.98a.5.5 0 0 0 .869.497l1.703-2.981a.5.5 0 0 1 .868 0l2.54 4.444-1.256-.337a.5.5 0 1 0-.26.966l2.415.647a.5.5 0 0 0 .613-.353l.647-2.415a.5.5 0 1 0-.966-.259l-.333 1.242-2.532-4.431zM2.973 7.773l-1.255.337a.5.5 0 1 1-.26-.966l2.416-.647a.5.5 0 0 1 .612.353l.647 2.415a.5.5 0 0 1-.966.259l-.333-1.242-2.545 4.454a.5.5 0 0 0 .434.748H5a.5.5 0 0 1 0 1H1.723A1.5 1.5 0 0 1 .421 12.24l2.552-4.467zm10.89 1.463a.5.5 0 1 0-.868.496l1.716 3.004a.5.5 0 0 1-.434.748h-5.57l.647-.646a.5.5 0 1 0-.708-.707l-1.5 1.5a.498.498 0 0 0 0 .707l1.5 1.5a.5.5 0 1 0 .708-.707l-.647-.647h5.57a1.5 1.5 0 0 0 1.302-2.244l-1.716-3.004z" />
          </svg>
          <p>RESETEAR VALORES</p>
        </button>
      </section>

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
                  defaultChecked={types.includes(TYPES.FEATURE)}
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
                  defaultChecked={types.includes(TYPES.TV_SERIES)}
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
                  defaultChecked={types.includes(TYPES.TV_MOVIES)}
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
                  defaultChecked={types.includes(TYPES.TV_MINISERIES)}
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
                  defaultChecked={types.includes(TYPES.DOCUMENTARY)}
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
                  defaultChecked={types.includes(TYPES.SHORT)}
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
                defaultChecked={genres.includes(GENRES.ACTION)}
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
                defaultChecked={genres.includes(GENRES.ADVENTURE)}
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
                defaultChecked={genres.includes(GENRES.ANIMATION)}
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
                defaultChecked={genres.includes(GENRES.BIOGRAPHY)}
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
                defaultChecked={genres.includes(GENRES.COMEDY)}
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
                defaultChecked={genres.includes(GENRES.CRIME)}
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
                defaultChecked={genres.includes(GENRES.DOCUMENTARY)}
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
                defaultChecked={genres.includes(GENRES.DRAMA)}
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
                defaultChecked={genres.includes(GENRES.FAMILY)}
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
                defaultChecked={genres.includes(GENRES.FANTASY)}
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
                defaultChecked={genres.includes(GENRES.FILM_NOIR)}
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
                defaultChecked={genres.includes(GENRES.GAME_SHOW)}
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
                defaultChecked={genres.includes(GENRES.HISTORY)}
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
                defaultChecked={genres.includes(GENRES.HORROR)}
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
                defaultChecked={genres.includes(GENRES.MUSIC)}
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
                defaultChecked={genres.includes(GENRES.MUSICAL)}
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
                defaultChecked={genres.includes(GENRES.MYSTERY)}
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
                defaultChecked={genres.includes(GENRES.REALITY_TV)}
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
                defaultChecked={genres.includes(GENRES.ROMANCE)}
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
                defaultChecked={genres.includes(GENRES.SCI_FI)}
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
                defaultChecked={genres.includes(GENRES.SPORT)}
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
                defaultChecked={genres.includes(GENRES.TALK_SHOW)}
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
                defaultChecked={genres.includes(GENRES.THRILLER)}
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
                defaultChecked={genres.includes(GENRES.WAR)}
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
                defaultChecked={genres.includes(GENRES.WESTERN)}
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
                <option
                  defaultValue="10000"
                  value="10000"
                  selected={votes === EXTRAS_VOTES[10000]}
                >
                  Seleccione mínima cantidad de reseñas (+10.000 por defecto)
                </option>
                <option value="0" selected={votes === EXTRAS_VOTES[0]}>
                  0 Reseñas+
                </option>
                <option value="250" selected={votes === EXTRAS_VOTES[250]}>
                  +250 Reseñas
                </option>
                <option value="500" selected={votes === EXTRAS_VOTES[500]}>
                  +500 Reseñas
                </option>
                <option value="1000" selected={votes === EXTRAS_VOTES[1000]}>
                  +1.000 Reseñas
                </option>
                <option value="2000" selected={votes === EXTRAS_VOTES[2000]}>
                  +2.000 Reseñas
                </option>
                <option value="4000" selected={votes === EXTRAS_VOTES[4000]}>
                  +4.000 Reseñas
                </option>
                <option value="8000" selected={votes === EXTRAS_VOTES[8000]}>
                  +8.000 Reseñas
                </option>
                <option value="10000" selected={votes === EXTRAS_VOTES[10000]}>
                  +10.000 Reseñas
                </option>
                <option value="16000" selected={votes === EXTRAS_VOTES[16000]}>
                  +16.000 Reseñas
                </option>
                <option value="32000" selected={votes === EXTRAS_VOTES[32000]}>
                  +32.000 Reseñas
                </option>
                <option value="64000" selected={votes === EXTRAS_VOTES[64000]}>
                  +64.000 Reseñas
                </option>
                <option
                  value="100000"
                  selected={votes === EXTRAS_VOTES[100000]}
                >
                  +100.000 Reseñas
                </option>
              </select>
            </div>
            <div className="top-section">
              <select
                className="top-number"
                onClick={(e) => {
                  setTop(e.target.value);
                }}
              >
                <option
                  defaultValue="100"
                  value="100"
                  selected={top === EXTRAS_TOP[100]}
                >
                  Seleccione cantidad de títulos a mostrar (100 por defecto)
                </option>
                <option value="50" selected={top === EXTRAS_TOP[50]}>
                  Top 50
                </option>
                <option value="100" selected={top === EXTRAS_TOP[100]}>
                  Top 100
                </option>
                <option value="150" selected={top === EXTRAS_TOP[150]}>
                  Top 150
                </option>
                <option value="200" selected={top === EXTRAS_TOP[200]}>
                  Top 200
                </option>
                <option value="250" selected={top === EXTRAS_TOP[250]}>
                  Top 250
                </option>
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
  margin-top: 1.3rem;
  margin-bottom: 1.3rem;

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
