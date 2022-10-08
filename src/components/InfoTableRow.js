import React from "react";

const InfoTableRow = ({ el, id }) => {
  let {
    imDbRating,
    image,
    title,
    genres,
    description,
    plot,
    imDbRatingVotes,
    stars,
  } = el;

  return (
    <tr className="table-row">
      <td className="id-data">
        <p>{id}</p>
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
    </tr>
  );
};

export default InfoTableRow;
