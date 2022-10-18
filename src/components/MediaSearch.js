import React, { useState, useEffect } from "react";
import { helpHttp } from "../helpers/helpHttp";
import InfoTable from "./InfoTable";
import Loader from "./Loader";
import MediaForm from "./MediaForm";

export default function MediaSearch() {
  const [search, setSearch] = useState(null);
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (search === null) return;

    const fetchData = async () => {
      const { types, genres, minVotes, top } = search;

      let url = `${process.env.REACT_APP_API_URL}?title_type=${types}&genres=${genres}&sort=user_rating,desc&num_votes=${minVotes},999999999&count=${top}`;

      setLoading(true);

      const [data] = await Promise.all([helpHttp().get(url)]);

      console.log(data);

      if (data.errorMessage != null) {
        setData(data);
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

  return (
    <div>
      <article className="grid-1-2">
        <MediaForm handleSearch={handleSearch} />
        {loading && <Loader />}
        {search && !loading && <InfoTable data={data} />}
      </article>
    </div>
  );
}
