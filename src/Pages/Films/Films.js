import { NavLink } from "react-router-dom";
import Badiiyat from "../../assets/image/Badiiyat.svg";
import brat from "../../assets/image/myacc.png";
import "./Films.css";

export const Films = () => {
  const handleOut = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };

  return (
    <div className="films">
      <div className="films-main container ">
        <div className="films-left">
          <div>
            <img src={Badiiyat} alt="Badiyat" />
          </div>
          <div className="books-nav">
            <NavLink
              className={({ isActive }) =>
                isActive ? `active-link` : `films-link`
              }
              to="/"
            >
              Bosh sahifa{" "}
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? `active-link` : `films-link`
              }
              to="/movies"
            >
              Nasr{" "}
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? `active-link` : `films-link`
              }
              to="/top"
            >
              Nazm{" "}
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? `active-link` : `films-link`
              }
              to="/up"
            >
              Maqolalar{" "}
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? `active-link` : `films-link`
              }
              to="/tvshow"
            >
              Forum{" "}
            </NavLink>
          </div>
        </div>

        <div className="dropdown">
          <img className="brat-img" src={brat} alt="okaxon" />
          <a
            className="btn btn-secondary dropdown-toggle"
            href="#"
            role="button"
            id="dropdownMenuLink"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          ></a>

          <ul
            className="dropdown-menu  add-link"
            aria-labelledby="dropdownMenuLink"
          >
            <li>
              <NavLink className="image-user" to="/addbook">
                Add Book
              </NavLink>
            </li>
            <li>
              <NavLink className="image-user" to="/addauthor">
                Add Author
              </NavLink>
            </li>
            <li>
              <NavLink className="image-user" to="/addsetting">
                Add Settings
              </NavLink>
            </li>
            <li>
              <button refresh="true" className="image-btn" onClick={handleOut}>
                LogOut
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
