import React from "react";
import { FormGenres } from "./components/FormGenres";
import { FormType } from "./components/FormType";
import { Header } from "./components/Header";
import { Loader } from "./components/Loader";
import { SubmitButton } from "./components/SubmitButton";

function App() {
  return (
    <div>
      <Header></Header>
      <section class="selection">
        <FormType></FormType>
        <FormGenres></FormGenres>
      </section>
      <SubmitButton></SubmitButton>
      <hr />
      <div class="loader none">
        <Loader></Loader>
      </div>
    </div>
  );
}
export default App;
