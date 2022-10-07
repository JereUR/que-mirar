import React from "react";
import InfoTableRow from "./InfoTableRow";

const InfoTable = ({ data }) => {
  return (
    <div>
      <h3>Resultados</h3>
      <table>
        <thread>
          <tr>
            <th>Rating</th>
            <th>Portada</th>
            <th>Nombre</th>
            <th>Género/s</th>
            <th>Año</th>
            <th>Descripción</th>
            <th>Total de votos</th>
            <th>Elenco principal</th>
          </tr>
        </thread>
        <tbody>
          {data.length > 0 ? (
            data.map((el) => <InfoTableRow el={el}></InfoTableRow>)
          ) : (
            <tr>
              <td colSpan="3">Sin Datos</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default InfoTable;
