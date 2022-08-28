import "./PopularItem.css";
import { Link } from "react-router-dom";

export const PopularItem = ({ data }) => {
  return (
    <div className="them">
      <Link className="popular-link" to={`/single/${data.id}`}>
        <li className="PopularItem">
          <img
            className="card-img"
            width="300"
            height="400"
            src={`https://book-service-layer.herokuapp.com/${data?.image}`}
            alt="Author img"
          />
          <div className={"card-bottom"}>
            <h4 className="card-head">{`${data?.first_name} ${data?.last_name}`}</h4>
            <p>
              <span className="card-span">{`${data?.date_of_birth} - ${data?.date_of_death} `}</span>
            </p>
          </div>
        </li>
      </Link>
    </div>
  );
};
