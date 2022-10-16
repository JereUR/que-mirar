import React from "react";
import InfoTableRow from "./InfoTableRow";

const InfoTable = ({ data }) => {
  let num = 1;
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
            <th>Trailer (Solo disponible para algunas películas)</th>
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
                Sin Resultados
              </td>
            </tr>
          )}
        </tbody>
      </table>
      <hr className="hr-search" />
    </div>
  );
};

export default InfoTable;
