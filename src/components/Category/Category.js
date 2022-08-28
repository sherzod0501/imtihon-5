import { NavLink } from "react-router-dom";
import "./Category.css";

export const Category = () => {
  return (
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
            to="jadid"
          >
            {" "}
            Jadid adabiyoti{" "}
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? `active-links` : `category-link`
            }
            to="sovet"
          >
            Sovet davri{" "}
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? `active-links` : `category-link`
            }
            to="mustaqilik"
          >
            Mustaqillik davri{" "}
          </NavLink>
        </div>
      </div>
    </div>
  );
};
