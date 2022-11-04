import React from "react";
import { helpHttp } from "../helpers/helpHttp";
import imdbLogo from "../assets/imdb-logo.png";

const InfoTableRow = ({ el, num }) => {
  let {
    imDbRating,
    image,
    title,
    genres,
    description,
    plot,
    imDbRatingVotes,
    stars,
    id,
  } = el;

  const handleTrailer = async (e) => {
    e.preventDefault();

    let url = `${process.env.REACT_APP_API_HREF}${id}`;

    const [data] = await Promise.all([helpHttp().get(url)]);

    if (data.videoUrl === null || data.videoUrl === "") {
      var content = document.createElement("p");
      content.innerHTML = "Trailer no disponible 😞";
      content.classList.add("trailer-text");

      if (e.target.querySelector(".trailer-text") === null) {
        e.target.appendChild(content);
      }
    } else {
      window.open(data.videoUrl, "_blank");
    }
  };

  const handleTitle = async (e) => {
    e.preventDefault();

    let url = `${process.env.REACT_APP_API_TITLE}${id}`;

    const [dataTitle] = await Promise.all([helpHttp().get(url)]);

    if (dataTitle.url === null || dataTitle.url === "") {
      var content = document.createElement("p");
      content.innerHTML = "Información no disponible 😞";
      content.classList.add("title-text");

      if (e.target.querySelector(".title-text") === null) {
        e.target.appendChild(content);
      }
    } else {
      window.open(dataTitle.url, "_blank");
    }
  };

  return (
    /* <tr className="table-row">
      <td className="num-data">
        <p>{num}</p>
      </td>
      <td className="rating-data">⭐{imDbRating}</td>
      <td>
        <figure>
          <img className="front-page" src={image} alt="front-page" />
        </figure>
      </td>
      <td>
        <p className="title-name">{title}</p>
        <section className="btn-title">
          <form onSubmit={handleTitle}>
            <input type="submit" id="btn-title" value="[Más info...]"></input>
          </form>
        </section>
      </td>
      <td>{genres}</td>
      <td>{description}</td>
      <td>{plot}</td>
      <td>{imDbRatingVotes}</td>
      <td>{stars}</td>
      <td>
        <section className="btn-trailer">
          <form onSubmit={handleTrailer}>
            <input
              type="submit"
              id="btn-trailer"
              value="VER TRAILER..."
            ></input>
          </form>
        </section>
      </td>
    </tr> */

    <div className="film-container">
      <div className="film-section-1">
        <div className="film-index">
          <p>#{num}</p>
        </div>
        <div className="film-image">
          <img src={image} alt="film-img" className="film-img" />
        </div>
      </div>
      <div className="film-section-2">
        <div className="film-info">
          <div className="film-title-info">
            <p className="film-title">
              {title} <i>{description}</i>
            </p>
            <div className="btn-title-div">
              <form className="btn-title-form" onSubmit={handleTitle}>
                <input
                  type="submit"
                  className="btn-title"
                  value="Más info..."
                ></input>
              </form>
            </div>
          </div>
          <div className="film-calification">
            <img src={imdbLogo} alt="imdb-logo" className="imdb-logo" />
            <p className="calification">
              ⭐{imDbRating} - <i>{imDbRatingVotes} Reseñas</i>
            </p>
          </div>
          <p className="film-genre">{genres}</p>
          <i className="film-synopsis">{plot}</i>
          <br />
          <br />
          <hr />
          <br />
          <br />
          <p className="film-cast">
            <u>Elenco principal:</u> {stars}
          </p>
          <div className="film-trailer">
            <form className="trailer-form" onSubmit={handleTrailer}>
              <input
                type="submit"
                className="trailer"
                value="VER TRAILER>>>"
              ></input>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoTableRow;
