import React from "react";
import InfoTableRow from "./InfoTableRow";

const InfoTable = ({ data }) => {
  let num = 1;

  if (typeof data === "string") {
    return (
      <div className="error-container">
        <h1 className="error-text">
          ⛔ Error con el servidor. Intente nuevamente. ⛔
        </h1>
        <h4 className="error-text">{data}</h4>
      </div>
    );
  } else {
    return (
      <div className="film-table">
        {data.length > 0 ? (
          data.map((el) => (
            <InfoTableRow key={el.id} el={el} num={num++}></InfoTableRow>
          ))
        ) : (
          <div>
            <h1 className="no-data">Sin Coincidencias</h1>
          </div>
        )}
      </div>
    );
  }
};

export default InfoTable;
