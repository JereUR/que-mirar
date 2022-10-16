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

  let rowNumber = `td-${num}`;

  const handleTrailer = async (e) => {
    e.preventDefault();

    console.log(id);

    let url = `${process.env.REACT_APP_API_HREF}${id}`;

    const [data] = await Promise.all([helpHttp().get(url)]);

    console.log(data);

    if (data.videoUrl === null || data.videoUrl === "") {
      var content = document.createTextNode("Trailer no disponible...");

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
              value="QUÉ MIRAR  >>>"
            ></input>
          </form>
        </section>
      </td>
    </tr>
  );
};

export default InfoTableRow;
