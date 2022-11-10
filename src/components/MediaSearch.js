import React, { useState, useEffect } from "react";

import { helpHttp } from "../helpers/helpHttp";
import InfoTable from "./InfoTable";
import Loader from "./Loader";
import MediaForm from "./MediaForm";

export default function MediaSearch() {
  const [search, setSearch] = useState(null);
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);
  const [y, setY] = useState(window.scrollY);

  const handleNavigation = () => {
    const $scrollBtn = document.querySelector(".scroll-top-btn");
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > 1200) {
      if ($scrollBtn.classList.contains("hidden")) {
        $scrollBtn.classList.remove("hidden");
      }
    } else {
      if (!$scrollBtn.classList.contains("hidden")) {
        $scrollBtn.classList.add("hidden");
      }
    }
  };

  useEffect(() => {
    setY(window.scrollY);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", (e) => handleNavigation(e));

    return () => {
      // Return a cleanup function to unregister our function since its gonna run multiple times
      window.removeEventListener("scroll", (e) => handleNavigation(e));
    };
  }, [y]);

  useEffect(() => {
    if (search === null) return;

    const fetchData = async () => {
      const { types, genres, minVotes, top } = search;

      let url = `${process.env.REACT_APP_API_URL}?title_type=${types}&genres=${genres}&sort=user_rating,desc&num_votes=${minVotes},999999999&count=${top}`;

      setLoading(true);

      const [data] = await Promise.all([helpHttp().get(url)]);

      /* console.log(data); */

      if (data.errorMessage) {
        setData(data.errorMessage);
        if (data != null) {
          setLoading(false);
        }
      } else {
        setData(data.results);
        if (data != null) {
          setLoading(false);
        }
      }
    };

    fetchData();
  }, [search]);

  const handleSearch = (url) => {
    setSearch(url);
  };

  const handleClickScroll = () => {
    document.querySelector(".header").scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <article className="grid-1-2">
        <MediaForm handleSearch={handleSearch} />
        {loading && <Loader />}
        {search && !loading && <InfoTable data={data} />}
      </article>
      <button onClick={handleClickScroll} className="scroll-top-btn hidden">
        &#11014;
      </button>
    </div>
  );
}
