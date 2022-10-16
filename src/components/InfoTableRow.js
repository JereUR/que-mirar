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
      var content = document.createTextNode("Trailer no disponible 😞");

      e.target.appendChild(document.createElement("br"));
      e.target.appendChild(document.createElement("br"));

      e.target.appendChild(content);
    } else {
      window.open(data.videoUrl, "_blank");
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
      <td>{title}</td>
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
              value="Ver trailer..."
            ></input>
          </form>
        </section>
      </td>
    </tr>
  );
};

export default InfoTableRow;
