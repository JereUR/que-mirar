import React from "react";

const CrudTableRow = ({ el }) => {
  let { rating, photo, name, genres, types, description, url, reviews } = el;

  return (
    <div>
      <tr>
        <td>{el.rating}</td>
        <td>{el.photo}</td>
        <td>{el.name}</td>
        <td>{el.genres}</td>
        <td>{el.types}</td>
        <td>{el.description}</td>
        <td>{el.url}</td>
        <td>{el.reviews}</td>
      </tr>
    </div>
  );
};

export default CrudTableRow;
