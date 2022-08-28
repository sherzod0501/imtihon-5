import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import LoginImg from "../../assets/image/Frame.png";
import "./Login.css";

export const Login = () => {
  const elEmail = useRef();
  const elPassword = useRef();
  const navigate = useNavigate();
  const handleForm = (evt) => {
    evt.preventDefault();
    fetch("https://book-service-layer.herokuapp.com/user/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: elEmail.current.value,
        password: elPassword.current.value,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          window.localStorage.setItem("token", data.token);
          navigate("/");
        }
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="login ">
      <img className="login-img" src={LoginImg} alt="login-img" />
      <form onSubmit={handleForm} className="login-form">
        <h1>Sign in</h1>
        <div className="login-top">
          <p>Do not youhave anaccount</p>
          <NavLink className="login-link" to="/signup">
            Sign Up
          </NavLink>
        </div>
        <input
          className="login-input"
          ref={elEmail}
          type="text"
          placeholder="Email"
        />
        <input
          className="login-input"
          ref={elPassword}
          type="password"
          placeholder="Password"
        />
        <button className="login-btn" type="submit">
          Next step
        </button>
      </form>
    </div>
  );
};
