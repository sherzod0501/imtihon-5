import search from "../../assets/image/search.png";
import "./SearchBook.css";
import { useContext } from "react";
import { ThemeContext } from "../../Context/themeContext";

export const SearchBook = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <>
      <div className={`${theme} Search`}>
        <h3 className="search-haed">Qidirish</h3>
        <div className="search-botttom">
          <input
            className="search-input"
            type="search"
            placeholder="Adiblar, kitoblar, audiolar, maqolalar..."
          />
          <button className="search-btn">
            <img src={search} alt="Search" />
            Izlash
          </button>
        </div>
      </div>
    </>
  );
};
