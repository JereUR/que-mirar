import React from "react";
import { FormGenres } from "./components/FormGenres";
import { FormType } from "./components/FormType";
import { Header } from "./components/Header";
import { Loader } from "./components/Loader";
import { SubmitButton } from "./components/SubmitButton";

function App() {
  return (
    <div className="container">
      <Header></Header>
      <section className="selection">
        <FormType></FormType>
        <FormGenres></FormGenres>
      </section>
      <section className="btn-section">
        <SubmitButton></SubmitButton>
      </section>
      <hr />
      <section className="loader none">
        <Loader></Loader>
      </section>
    </div>
  );
}
export default App;
