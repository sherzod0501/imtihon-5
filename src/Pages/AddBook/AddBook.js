import axios from "axios";
import { useRef } from "react";
import { useContext } from "react";
import { AuthContext } from "../../Context/AuthContext";

export const AddBook = () => {
  const token = useContext(AuthContext);

  const elTitle = useRef("");
  const elPage = useRef("");
  const elYear = useRef("");
  const elPrice = useRef("");
  const elAuthor = useRef("");
  const elGenre = useRef("");
  const elDesc = useRef("");
  const elImg = useRef("");

  const handelForm = (evt) => {
    evt.preventDefault();
    const formdata = new FormData();

    formdata.append("title", elTitle.current.value);
    formdata.append("page", elPage.current.value);
    formdata.append("year", elYear.current.value);
    formdata.append("price", elPrice.current.value);
    formdata.append("genre_id", elGenre.current.value);
    formdata.append("author_id", elAuthor.current.value);
    formdata.append("description", elDesc.current.value);
    formdata.append("image", elImg.current.files[0]);

    axios
      .post("https://book-service-layer.herokuapp.com/book", formdata, {
        headers: {
          Authorization: token.token,
        },
      })
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  };

  return (
    <div className="login">
      <form className="login-form" onSubmit={handelForm}>
        <h1> Add Book</h1>
        <input
          ref={elImg}
          className="login-input"
          type="file"
          placeholder="image"
          required
        />
        <input
          ref={elTitle}
          className="login-input"
          type="text"
          placeholder="Title"
          required
        />
        <input
          ref={elPage}
          className="login-input"
          type="text"
          placeholder="Pages"
          required
        />
        <input
          ref={elYear}
          className="login-input"
          type="text"
          placeholder="Year"
          required
        />
        <input
          ref={elPrice}
          className="login-input"
          type="text"
          placeholder="Price"
          required
        ></input>

        <input
          ref={elAuthor}
          className="login-input"
          type="text"
          placeholder="Author"
          required
        />
        <select ref={elGenre}>
          <option value="1">Temuriylar davri </option>
          <option value="2">Jadid adabiyoti </option>
          <option value="3">Sovet davri </option>
          <option value="4">Mustaqillik davri</option>
        </select>

        <textarea ref={elDesc} type="text" placeholder="Description" />

        <button type="submit" className="login-btn">
          Create
        </button>
      </form>
    </div>
  );
};
