import React from "react";
import InfoTableRow from "./InfoTableRow";

const InfoTable = ({ data }) => {
  let num = 1;

  if (data === null) {
    return (
      <div className="error-container">
        <h1 className="error-text">
          ⛔ Error con el servidor. Intente nuevamente. ⛔
        </h1>
        <h4 className="error-text">
          *Puede ocurrir que se haya alcanzado el límite de requerimientos por
          día.
        </h4>
      </div>
    );
  } else {
    return (
      <div>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>#</th>
              <th>Calificación</th>
              <th>Portada</th>
              <th>Título</th>
              <th>Género/s</th>
              <th>Año</th>
              <th>Descripción</th>
              <th>Reseñas</th>
              <th>Elenco principal</th>
              <th>Trailer (Solo disponible para algunos títulos)</th>
            </tr>
          </thead>
          <tbody>
            {data.length > 0 ? (
              data.map((el) => (
                <InfoTableRow key={el.id} el={el} num={num++}></InfoTableRow>
              ))
            ) : (
              <tr>
                <td className="no-data" colSpan="10">
                  Sin Coincidencias
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    );
  }
};

export default InfoTable;
