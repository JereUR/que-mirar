import React from "react";

export const Form = () => {
  return (
    <div>
      <table>
        <td>
          <h1>Seleccione que quiere ver</h1>
          <input type="checkbox" id="type" value="se"></input>
          <label>Serie</label>
          <input type="checkbox" id="type" value="pe"></input>
          <label>Pelicula</label>
        </td>
        <td>
          <h1>Seleccione género/s</h1>
          <tr>
            <input type="checkbox" id="gender" value="co"></input>
            <label>Comedia</label>
            <input type="checkbox" id="gender" value="cf"></input>
            <label>Ciencia Ficción</label>
            <input type="checkbox" id="gender" value="te"></input>
            <label>Terror</label>
          </tr>
          <tr>
            <input type="checkbox" id="gender" value="ro"></input>
            <label>Románctica</label>
            <input type="checkbox" id="gender" value="ac"></input>
            <label>Acción</label>
            <input type="checkbox" id="gender" value="th"></input>
            <label>Thriller</label>
          </tr>
          <tr>
            <input type="checkbox" id="gender" value="dr"></input>
            <label>Drama</label>
            <input type="checkbox" id="gender" value="mi"></input>
            <label>Misterio</label>
            <input type="checkbox" id="gender" value="cr"></input>
            <label>Criminal</label>
          </tr>
          <tr>
            <input type="checkbox" id="gender" value="an"></input>
            <label>Animada</label>
            <input type="checkbox" id="gender" value="av"></input>
            <label>Aventura</label>
            <input type="checkbox" id="gender" value="fa"></input>
            <label>Fantasía</label>
          </tr>
          <tr>
            <input type="checkbox" id="gender" value="cor"></input>
            <label>Comedia-Romántica</label>
            <input type="checkbox" id="gender" value="aco"></input>
            <label>Acción Cómica</label>
            <input type="checkbox" id="gender" value="su"></input>
            <label>Superheroes</label>
          </tr>
        </td>
      </table>
      <input type="submit" id="search" value="search"></input>
      <label>Buscar Títulos</label>
    </div>
  );
};
