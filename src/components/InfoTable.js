import React from "react";
import CrudTableRow from "./CrudTableRow";

const CrudTable = ({ data, setDataToEdit, deleteData }) => {
  return (
    <div>
      <h3>Resultados</h3>
      <table>
        <thread>
          <tr>
            <th>Rating</th>
            <th>Portada</th>
            <th>Nombre</th>
            <th>Género</th>
            <th>Tipo</th>
            <th>Descripción</th>
            <th>URL</th>
            <th>Total de reviews</th>
          </tr>
        </thread>
        <tbody>
          {data.length > 0 ? (
            data.map((el) => <CrudTableRow el={el}></CrudTableRow>)
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

export default CrudTable;
