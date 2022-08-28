import { useEffect, useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { ThemeContext } from "../../Context/themeContext";
import "./AddSetting.css";

export const AddSetting = () => {
  const { theme } = useContext(ThemeContext);
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/addsetting/myacc");
  }, []);
  return (
    <>
      <div className={`${theme} add-setting`}>
        <NavLink
          className={({ isActive }) =>
            isActive ? `setting-active` : `setting-link`
          }
          to="myacc"
        >
          <span
            className={({ isActive }) =>
              isActive ? `span-active` : `span-link`
            }
          >
            1
          </span>{" "}
          My Account
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? `setting-active` : `setting-link`
          }
          to="security"
        >
          <span
            className={({ isActive }) =>
              isActive ? `span-active` : `span-link`
            }
          >
            2
          </span>{" "}
          Security
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? `setting-active` : `setting-link`
          }
          to="mysetting"
        >
          <span
            className={({ isActive }) =>
              isActive ? `span-active` : `span-link`
            }
          >
            3
          </span>{" "}
          Settings
        </NavLink>
      </div>
      <Outlet />
    </>
  );
};
