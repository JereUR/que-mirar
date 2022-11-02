import React from "react";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import MediaSearch from "./components/MediaSearch";

const initialDb = [{}];

function App() {
  var $headline = document.querySelector(".headline"),
    $inner = document.querySelector(".inner");

  window.scroll(() => {
    var scrollTop = this.scrollTop(),
      headlineHeight = $headline.outerHeight();

    $headline.style.opacity = "1 - scrollTop / headlineHeight";

    $inner.children().style.transform = "translateY(" + scrollTop * 0.4 + "px)";
  });
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
