import { NavLink, Outlet } from "react-router-dom";
import { SearchBook } from "../../components/SearchBook/SearchBook";
import hiro from "../../assets/image/hiro.png";
import { useContext } from "react";
import { ThemeContext } from "../../Context/themeContext";
import "./Book.css";

export const Book = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={`${theme} home`}>
      <div className="container hiro-container">
        <img className="hiro-img" src={hiro} alt="hiro image" />
        <SearchBook />
        <div className="category">
          <div className="container category-container">
            <h3 className="category-head">Asosiy kategoriyalar</h3>
            <div className="category-nav">
              <NavLink
                className={({ isActive }) =>
                  isActive ? `active-links` : `category-link`
                }
                to=""
              >
                Temuriylar davri{" "}
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  isActive ? `active-links` : `category-link`
                }
                to="oqishnixox"
              >
                {" "}
                Jadid adabiyoti{" "}
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  isActive ? `active-links` : `category-link`
                }
                to="oqishmoqda"
              >
                Sovet davri{" "}
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  isActive ? `active-links` : `category-link`
                }
                to="adiblar"
              >
                Mustaqillik davri{" "}
              </NavLink>
            </div>
          </div>
        </div>
        <Outlet />
      </div>
    </div>
  );
};
