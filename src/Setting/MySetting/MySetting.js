import "./MySetting.css";
import { ThemeContext } from "../../Context/themeContext";
import { useContext } from "react";

export const MySetting = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <div className={`${theme} my-setting`}>
      <div className="mySetting__container container">
        <div className="setting-main">
          <h3 className="setting-head"> Settings</h3>
          <p className="setting-text">Language</p>
          <select className="lang-select">
            <option value="english">English</option>
            <option value="uzbek">Uzbek</option>
            <option value="russia">Russia</option>
          </select>
          <span className="setting-span">Please enter your first name.</span>
          <p className="setting-theme">Theme</p>
          <select
            defaultValue={theme}
            className="theme-select"
            onChange={(evt) => {
              setTheme(evt.target.value);
            }}
          >
            <option value="light">light</option>
            <option value="dark">dark</option>
          </select>
        </div>
      </div>
    </div>
  );
};
