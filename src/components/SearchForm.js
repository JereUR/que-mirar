import { useFetch } from "../hooks/useFetch";

export default function SearchForm() {
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

  const handleButton = (e) => {
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

    const url = `${process.env.REACT_APP_API_URL}?title_type=${typesFilter}&genres=${genresFilter}&sort=user_rating,desc&num_votes=${minVotes},999999999`;

    //Test
    fetch(url)
      .then((res) => (res.ok ? res.json() : Promise.reject()))
      .then((json) => console.log(json));
  };

  const popText = (e) => {
    if (document.getElementById("popup-text").classList.length === 0) {
      document.getElementById("popup-text").classList.add("none");
    } else {
      document.getElementById("popup-text").classList.remove("none");
    }
  };

  return (
    <div className="container">
      <div className="selection">
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
            <label for="type-checkbox1">Pelicula</label>
          </div>
          <div className="type-slc">
            <input
              type="checkbox"
              value="tv_serie"
              id="type-checkbox2"
              onChange={typesHandleChecked}
            />
            <label for="type-checkbox2">Serie</label>
          </div>
          <div className="type-slc">
            <input
              type="checkbox"
              value="tv_movie"
              id="type-checkbox3"
              onChange={typesHandleChecked}
            />
            <label for="type-checkbox3">Pelicula de TV</label>
          </div>
          <div className="type-slc">
            <input
              type="checkbox"
              value="tv_special"
              id="type-checkbox4"
              onChange={typesHandleChecked}
            />
            <label for="type-checkbox4">Especial de TV</label>
          </div>
          <div className="type-slc">
            <input
              type="checkbox"
              value="mini-serie"
              id="type-checkbox5"
              onChange={typesHandleChecked}
            />
            <label for="type-checkbox5">Mini-Serie</label>
          </div>
          <div className="type-slc">
            <input
              type="checkbox"
              value="documentary"
              id="type-checkbox6"
              onChange={typesHandleChecked}
            />
            <label for="type-checkbox6">Documental</label>
          </div>
          <div className="type-slc">
            <input
              type="checkbox"
              value="short_film"
              id="type-checkbox7"
              onChange={typesHandleChecked}
            />
            <label for="type-checkbox7">Cortometraje</label>
          </div>
        </form>
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
            <label for="genre-checkbox1">Acción</label>
          </div>
          <div className="genre-slc">
            <input
              type="checkbox"
              value="adventure"
              id="genre-checkbox2"
              onChange={genresHandleChecked}
            />
            <label for="genre-checkbox2">Aventura</label>
          </div>
          <div className="genre-slc">
            <input
              type="checkbox"
              value="animation"
              id="genre-checkbox3"
              onChange={genresHandleChecked}
            />
            <label for="genre-checkbox3">Animación</label>
          </div>
          <div className="genre-slc">
            <input
              type="checkbox"
              value="biography"
              id="genre-checkbox4"
              onChange={genresHandleChecked}
            />
            <label for="genre-checkbox4">Biografía</label>
          </div>
          <div className="genre-slc">
            <input
              type="checkbox"
              value="comedy"
              id="genre-checkbox5"
              onChange={genresHandleChecked}
            />
            <label for="genre-checkbox5">Comedia</label>
          </div>
          <div className="genre-slc">
            <input
              type="checkbox"
              value="crime"
              id="genre-checkbox6"
              onChange={genresHandleChecked}
            />
            <label for="genre-checkbox6">Crimen</label>
          </div>
          <div className="genre-slc">
            <input
              type="checkbox"
              value="documentary"
              id="genre-checkbox7"
              onChange={genresHandleChecked}
            />
            <label for="genre-checkbox7">Documental</label>
          </div>
          <div className="genre-slc">
            <input
              type="checkbox"
              value="drama"
              id="genre-checkbox8"
              onChange={genresHandleChecked}
            />
            <label for="genre-checkbox8">Drama</label>
          </div>
          <div className="genre-slc">
            <input
              type="checkbox"
              value="family"
              id="genre-checkbox9"
              onChange={genresHandleChecked}
            />
            <label for="genre-checkbox9">Familiar</label>
          </div>
          <div className="genre-slc">
            <input
              type="checkbox"
              value="film-noir"
              id="genre-checkbox10"
              onChange={genresHandleChecked}
            />
            <label for="genre-checkbox10">Cine Negro</label>
          </div>
          <div className="genre-slc">
            <input
              type="checkbox"
              value="game-show"
              id="genre-checkbox11"
              onChange={genresHandleChecked}
            />
            <label for="genre-checkbox11">Programa de Juegos</label>
          </div>
          <div className="genre-slc">
            <input
              type="checkbox"
              value="history"
              id="genre-checkbox12"
              onChange={genresHandleChecked}
            />
            <label for="genre-checkbox12">Historia</label>
          </div>
          <div className="genre-slc">
            <input
              type="checkbox"
              value="horror"
              id="genre-checkbox13"
              onChange={genresHandleChecked}
            />
            <label for="genre-checkbox13">Terror</label>
          </div>
          <div className="genre-slc">
            <input
              type="checkbox"
              value="musical"
              id="genre-checkbox14"
              onChange={genresHandleChecked}
            />
            <label for="genre-checkbox14">Musical</label>
          </div>
          <div className="genre-slc">
            <input
              type="checkbox"
              value="mystery"
              id="genre-checkbox15"
              onChange={genresHandleChecked}
            />
            <label for="genre-checkbox15">Misterio</label>
          </div>
          <div className="genre-slc">
            <input
              type="checkbox"
              value="reality-tv"
              id="genre-checkbox16"
              onChange={genresHandleChecked}
            />
            <label for="genre-checkbox16">Reality</label>
          </div>
          <div className="genre-slc">
            <input
              type="checkbox"
              value="romance"
              id="genre-checkbox17"
              onChange={genresHandleChecked}
            />
            <label for="genre-checkbox17">Romántica</label>
          </div>
          <div className="genre-slc">
            <input
              type="checkbox"
              value="sci-fi"
              id="genre-checkbox18"
              onChange={genresHandleChecked}
            />
            <label for="genre-checkbox18">Ciencia Ficción</label>
          </div>
          <div className="genre-slc">
            <input
              type="checkbox"
              value="sport"
              id="genre-checkbox19"
              onChange={genresHandleChecked}
            />
            <label for="genre-checkbox19">Deporte</label>
          </div>
          <div className="genre-slc">
            <input
              type="checkbox"
              value="thriller"
              id="genre-checkbox20"
              onChange={genresHandleChecked}
            />
            <label for="genre-checkbox20">Thriller</label>
          </div>
          <div className="genre-slc">
            <input
              type="checkbox"
              value="war"
              id="genre-checkbox21"
              onChange={genresHandleChecked}
            />
            <label for="genre-checkbox21">Bélica</label>
          </div>
          <div className="genre-slc">
            <input
              type="checkbox"
              value="western"
              id="genre-checkbox22"
              onChange={genresHandleChecked}
            />
            <label for="genre-checkbox22">Western</label>
          </div>
        </form>
      </div>
      <div className="votes-section">
        <select id="num-votes" onfocus="3">
          <option value="1000" selected>
            Seleccione mínima cantidad de reseñas (1000 por defecto)
          </option>
          <option value="0">0</option>
          <option value="250">250</option>
          <option value="500">500</option>
          <option value="1000">1000</option>
          <option value="2000">2000</option>
          <option value="4000">4000</option>
          <option value="8000">8000</option>
          <option value="16000">16000</option>
          <option value="32000">32000</option>
          <option value="64000">64000</option>
          <option value="100000">100000</option>
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
      <section class="btn-section">
        <input
          type="submit"
          id="btn-submit"
          value="QUÉ MIRAR  >>>"
          onClick={handleButton}
        ></input>
      </section>
    </div>
  );
}
