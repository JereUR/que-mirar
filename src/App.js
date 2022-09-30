import React from "react";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Loader } from "./components/Loader";
import SearchForm from "./components/SearchForm";

function App() {
  return (
    <div className="container">
      <Header></Header>
      <section className="selection">
        <SearchForm></SearchForm>
      </section>
      <hr />
      <section className="loader none">
        <Loader></Loader>
      </section>
      <Footer></Footer>
    </div>
  );
}
export default App;
