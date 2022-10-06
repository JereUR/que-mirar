import React from "react";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Loader } from "./components/Loader";
import MediaSearch from "./components/MediaSearch";

const initialDb = [{}];

function App() {
  return (
    <div className="container">
      <Header></Header>
      <section className="selection">
        <MediaSearch></MediaSearch>
      </section>
      <Footer></Footer>
    </div>
  );
}
export default App;
