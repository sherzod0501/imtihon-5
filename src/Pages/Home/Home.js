import hiro from "../../assets/image/hiro.png";
import { SearchBook } from "../../components/SearchBook/SearchBook";
import { Category } from "../../components/Category/Category";
import { Outlet } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../../Context/themeContext";
import "./Home.css";

export const Home = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`${theme} home`}>
      <div className="container hiro-container">
        <img className="hiro-img" src={hiro} alt="hiro image" />
        <SearchBook />
        <Category />
        <Outlet />
        <div className="Cards"></div>
      </div>
    </div>
  );
};
