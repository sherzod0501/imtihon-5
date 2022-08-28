import axios from "axios";
import { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { BookItem } from "../../components/BookItem/BookItem";
import { AuthContext } from "../../Context/AuthContext";
import { ThemeContext } from "../../Context/themeContext";
import "./BookSingle.css";

export const BookSingle = () => {
  const { theme } = useContext(ThemeContext);
  const token = useContext(AuthContext);
  const [book, setBook] = useState([]);
  const [author, setAuthor] = useState([]);
  const [genre, setGenre] = useState([]);
  const [books, setBooks] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    axios
      .get(`https://book-service-layer.herokuapp.com/book/bookId/${id}`, {
        headers: {
          Authorization: token.token,
        },
      })
      .then((res) => setBook(res.data))
      .catch((err) => console.log(err));

    axios
      .get(`https://book-service-layer.herokuapp.com/genre`, {
        headers: {
          Authorization: token.token,
        },
      })
      .then((res) => setGenre(res.data));
  }, [id]);

  useEffect(() => {
    axios
      .get(
        `https://book-service-layer.herokuapp.com/book/genreId/${
          genre[book.genre_id - 1]?.id
        }`,
        {
          headers: {
            Authorization: token.token,
          },
        }
      )
      .then((data) => setBooks(data.data))
      .catch((err) => console.log(err));
    axios
      .get(
        `https://book-service-layer.herokuapp.com/author/authorId/${book.author_id}`,
        {
          headers: {
            Authorization: token.token,
          },
        }
      )
      .then((data) => setAuthor(data.data))
      .catch((err) => console.log(err));
  }, [genre[book.genre_id - 1]?.id, book.author_id]);

  return (
    <div className={`${theme} Movie`}>
      <div className="container movie-container">
        <div>
          <div className="single-imgs">
            <img
              className="Single-img"
              src={`https://book-service-layer.herokuapp.com/${book?.image}`}
              alt="card img"
            />
          </div>
          <div className="author_birth">
            <div className="author_texts">
              <p className="author-text"> Tavallud sanasi</p>
              <p className="author-text"> Vafot etgan sanasi</p>
            </div>
          </div>
        </div>
        <div className="movie-right">
          <h3 className="movie-title">{`${book?.title}`}</h3>
          <p className="movie-text">{`${author?.first_name} ${author?.last_name}`}</p>
          <div className="book-year">
            <p className="book-text">
              Sahifalar soni: <span className="book-span">{book?.page}</span>
            </p>
            <p className="book-text">
              Chop etilgan:
              <span className="book-span">{book?.year}</span>
            </p>
            <p className="book-text">
              Janri:
              <span className="book-span">
                {genre[book.genre_id - 1]?.name}
              </span>
            </p>
          </div>
          {/* <div className="movie-genres">
          <p className="movie-genre-text">Genres:</p>
          {data?.genres &&
            data?.genres.map((el) => <p key={el.name}>{el?.name}</p>)}
        </div> */}
          {/* <div className="movie-companies">
          <p className="movie-companies-text">Companies:</p>
          {data?.production_companies &&
            data?.production_companies.map((el) => (
              <p key={el.name}>{el?.name}</p>
            ))}
        </div> */}
          <div className="single-bottom">
            <div className="book-bottom">
              <h4 className="book-head">Toliq Malumot ↓</h4>
              <span className="book-line"></span>
            </div>
            <p className="book-text">{book?.description}</p>
          </div>
          <div className="single-bottom-top">
            <h4 className="single-head">Asarlar</h4>
            <Link to="/books" className="single-text">
              Barchasini ko'rish
            </Link>
          </div>
          <div className="kitob">
            {books.length && (
              <ul className="kitob-list">
                {books.map((e) => (
                  <BookItem key={e.id} dataa={e} />
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
