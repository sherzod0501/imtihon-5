import axios from "axios";
import { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { AuthContext } from "../../Context/AuthContext";
import { BookItem } from "../../components/BookItem/BookItem";
import { ThemeContext } from "../../Context/themeContext";
import "./Movie.css";

export const Movie = () => {
  const { theme } = useContext(ThemeContext);
  const token = useContext(AuthContext);
  const [data, setData] = useState();
  const [books, setBooks] = useState([]);

  const { id } = useParams();
  useEffect(() => {
    axios
      .get(`https://book-service-layer.herokuapp.com/author/authorId/${id}`, {
        headers: {
          Authorization: token.token,
        },
      })
      .then((data) => setData(data.data))
      .catch((err) => console.log(err));
  }, [id]);

  useEffect(() => {
    axios
      .get(`https://book-service-layer.herokuapp.com/book/genreId/1`, {
        headers: {
          Authorization: token.token,
        },
      })
      .then((data) => setBooks(data.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className={`${theme} Movie`}>
      <div className="container movie-container">
        <div>
          <div className="single-imgs">
            <img
              className="Single-img"
              src={`https://book-service-layer.herokuapp.com/${data?.image}`}
              alt="card img"
            />
          </div>
          <div className="author_birth">
            <div className="author_texts">
              <p className="author-text"> Tavallud sanasi</p>
              <p className="author-text"> Vafot etgan sanasi</p>
            </div>
            <div className="author-year">
              <span className="author-span">{data?.date_of_birth}</span> -{" "}
              <span className="author-span">{data?.date_of_death}</span>
            </div>
          </div>
        </div>
        <div className="movie-right">
          <h3 className="movie-title">{`${data?.first_name} ${data?.last_name}`}</h3>
          <p className="movie-text">{data?.bio}</p>

          <div className="single-bottom">
            <div className="single-bottom-top">
              <h4 className="single-head">Asarlar</h4>
              <Link to="/books" className="single-text">
                Barchasini ko’rish
              </Link>
            </div>
          </div>
          <div className="kitob">
            {books.length && (
              <ul className="kitob-list">
                {books.map(
                  (e) => (console.log(e), (<BookItem key={e.id} dataa={e} />))
                )}
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
