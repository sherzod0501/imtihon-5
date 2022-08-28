import { useState } from "react";
import { useEffect } from "react";
import { PopularItem } from "../../components";

export const UpMovies = () => {
  const [data, setData] = useState();
  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/upcoming?api_key=377730aaf04b02ec942be0a20410e5bc"
    )
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  return (
    <>
      {data?.results && (
        <ul className="PopularList">
          {data.results.map((e) => (
            <PopularItem key={e.id} data={e} />
          ))}
        </ul>
      )}
    </>
  );
};
