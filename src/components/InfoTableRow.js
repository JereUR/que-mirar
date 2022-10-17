import React from "react";
import { helpHttp } from "../helpers/helpHttp";

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

      e.target.appendChild(document.createElement("br"));
      e.target.appendChild(document.createElement("br"));

      e.target.appendChild(content);
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

      e.target.appendChild(document.createElement("br"));
      e.target.appendChild(document.createElement("br"));

      e.target.appendChild(content);
    } else {
      window.open(dataTitle.url, "_blank");
    }
  };

  return (
    <tr className="table-row">
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
    </tr>
  );
};

export default InfoTableRow;
