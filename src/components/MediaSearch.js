import React, { useState, useEffect } from "react";
import { helpHttp } from "../helpers/helpHttp";
import InfoTable from "./InfoTable";
import Loader from "./Loader";
import MediaForm from "./MediaForm";

export default function MediaSearch() {
  const [search, setSearch] = useState(null);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (search === null) return;

    const fetchData = async () => {
      const { types, genres, minVotes } = search;

      let tf = "";
      let gf = "";

      types.forEach((e) => {
        tf = tf + e + ",";
      });
      let typesFilter = tf.substring(0, tf.length - 1);

      genres.forEach((e) => {
        gf = gf + e + ",";
      });

      let genresFilter = gf.substring(0, gf.length - 1);

      let url = `${process.env.REACT_APP_API_URL}?title_type=${typesFilter}&genres=${genresFilter}&sort=user_rating,desc&num_votes=${minVotes},999999999`;

      //console.log(artistUrl, songUrl);

      setLoading(true);

      const [data] = await Promise.all([helpHttp().get(url)]);

      //console.log(artistRes, songRes);

      setData(data);
      setLoading(false);
    };

    fetchData();
  }, [search]);

  const handleSearch = (data) => {
    setSearch(data);
  };

  return (
    <div>
      <article>
        <MediaForm handleSearch={handleSearch} />
        {loading && <Loader />}
        {search && !loading && <InfoTable search={search} data={data} />}
      </article>
    </div>
  );
}
