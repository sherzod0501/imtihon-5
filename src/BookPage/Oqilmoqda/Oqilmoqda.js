import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Context/AuthContext";
import { BookItem } from "../../components/BookItem";

export const Oqilmoqda = () => {
  const token = useContext(AuthContext);
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get(`https://book-service-layer.herokuapp.com/book/genreId/3`, {
        headers: {
          Authorization: token.token,
        },
      })
      .then((data) => setData(data.data))
      .catch((err) => console.log(err));
  }, [token]);
  console.log(data);
  return (
    <>
      {data?.length && (
        <ul className="list-map">
          {data.map((el) => (
            <BookItem dataa={el} key={el.id} />
          ))}
        </ul>
      )}
    </>
  );
};
