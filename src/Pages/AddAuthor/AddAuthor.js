import axios from "axios";
import { useRef } from "react";
import { useContext } from "react";
import { AuthContext } from "../../Context/AuthContext";

export const AddAuthor = () => {
  const token = useContext(AuthContext);

  const elFrist = useRef("");
  const elLast = useRef("");
  const elBirth = useRef("");
  const elDeath = useRef("");
  const elCountry = useRef("");
  const elSelect = useRef("");
  const elBio = useRef("");
  const elImage = useRef("");

  const handelForm = (evt) => {
    evt.preventDefault();
    const formdata = new FormData();

    formdata.append("first_name", elFrist.current.value);
    formdata.append("last_name", elLast.current.value);
    formdata.append("date_of_birth", elBirth.current.value);
    formdata.append("date_of_death", elDeath.current.value);
    formdata.append("country", elCountry.current.value);
    formdata.append("genre_id", elSelect.current.value);
    formdata.append("bio", elBio.current.value);
    formdata.append("image", elImage.current.files[0]);

    axios
      .post("https://book-service-layer.herokuapp.com/author", formdata, {
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
        <h1> Add Author</h1>
        <input
          ref={elImage}
          className="login-input"
          type="file"
          placeholder="Description"
          required
        />
        <input
          ref={elFrist}
          className="login-input"
          type="text"
          placeholder="First name"
          required
        />
        <input
          ref={elLast}
          className="login-input"
          type="text"
          placeholder="Last name"
          required
        />
        <input
          ref={elBirth}
          className="login-input"
          type="text"
          placeholder="Date of birth"
          required
        />
        <input
          ref={elDeath}
          className="login-input"
          type="text"
          placeholder="Date of death"
          required
        ></input>
        <input
          ref={elCountry}
          className="login-input"
          type="text"
          placeholder="Country"
          required
        />
        <select ref={elSelect}>
          <option value="1">Temuriylar davri </option>
          <option value="2">Jadid adabiyoti </option>
          <option value="3">Sovet davri </option>
          <option value="4">Mustaqillik davri</option>
        </select>

        <textarea ref={elBio} type="text" placeholder="bio" />

        <button type="submit" className="login-btn">
          Create
        </button>
      </form>
    </div>
  );
};
