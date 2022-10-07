import React from "react";

const InfoTableRow = ({ el }) => {
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
    <div>
      <tr>
        <td>{imDbRating}</td>
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
    </div>
  );
};

export default InfoTableRow;
