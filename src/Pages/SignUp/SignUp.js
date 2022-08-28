import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";
import { NavLink } from "react-router-dom";
import "./SignUp.css";
import SignUpp from "../../assets/image/signup.png";

export const SignUp = () => {
  const navigete = useNavigate();
  const elFrist = useRef("");
  const elLast = useRef("");
  const elPhone = useRef("");
  const elEmail = useRef("");
  const elPassword = useRef("");

  const handelForm = (evt) => {
    evt.preventDefault();
    const formdata = new FormData();
    console.log(elPassword.current.value);

    formdata.append("first_name", elFrist.current.value);
    formdata.append("last_name", elLast.current.value);
    formdata.append("phone", elPhone.current.value);
    formdata.append("email", elEmail.current.value);
    formdata.append("password", elPassword.current.value);

    axios
      .post("https://book-service-layer.herokuapp.com/user/register", formdata)
      .then((data) => {
        if (data) {
          navigete("/");
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="login">
      <img className="login-img" src={SignUpp} alt="login-img" />
      <form className="login-form" onSubmit={handelForm}>
        <h1>Sign up</h1>
        <div className="login-top">
          <p>Already have an anaccount</p>
          <NavLink
            className="login-link"
            to="/login
          "
          >
            Sign In
          </NavLink>
        </div>
        <input
          ref={elFrist}
          className="login-input"
          type="text"
          placeholder="Enter  FristName"
          required
        />
        <input
          ref={elLast}
          className="login-input"
          type="text"
          placeholder="Enter LastName"
          required
        />
        <input
          ref={elPhone}
          className="login-input"
          type="number"
          placeholder="Enter phone"
          required
        />
        <input
          ref={elEmail}
          className="login-input"
          type="email"
          placeholder="EnterEmail"
          required
        ></input>
        <input
          ref={elPassword}
          className="login-input"
          type="password"
          placeholder="EnterPassword"
          required
        />

        <button type="submit" className="login-btn">
          Upload cover
        </button>
      </form>
    </div>
  );
};
