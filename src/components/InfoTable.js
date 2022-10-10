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
            <th>Rating</th>
            <th>Portada</th>
            <th>Nombre</th>
            <th>Género/s</th>
            <th>Año</th>
            <th>Descripción</th>
            <th>Total de votos</th>
            <th>Elenco principal</th>
          </tr>
        </thead>
        <tbody>
          {data.length > 0 ? (
            data.map((el) => (
              <InfoTableRow key={el.id} el={el} num={num++}></InfoTableRow>
            ))
          ) : (
            <tr>
              <td colSpan="8">Sin Datos</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default InfoTable;
