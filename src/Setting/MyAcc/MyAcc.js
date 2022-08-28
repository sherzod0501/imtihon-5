import myAcc from "../../assets/image/myacc.png";
import "./MyAcc.css";
import { useContext } from "react";
import { ThemeContext } from "../../Context/themeContext";

export const MyAcc = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={`${theme} Myaccount`}>
      <div className={` My-acc container`}>
        <img className="acc-img" src={myAcc} alt="MY Account" />
        <div className="my-acc-right">
          <h4 className="acc-head">My profile</h4>
          <div className="my-acc-input">
            <p className="acc-text">First Name</p>
            <input className="acc-input" type="text" placeholder="Username" />
            <span className="acc-span">Please enter your first name.</span>
          </div>
          <div className="my-acc-input">
            <p className="acc-text">Last Name</p>
            <input className="acc-input" type="text" placeholder="Lastname" />
            <span className="acc-span">Please enter your last name.</span>
          </div>
          <div className="my-acc-input">
            <div className="acc-two-input">
              <div className="my-acc-input">
                <p className="acc-text">Phone</p>
                <input
                  className="acc-input-bottom"
                  type="number"
                  placeholder="Phone"
                />
                <span className="acc-span">
                  Please enter your phone number.
                </span>
              </div>
              <div className="my-acc-input">
                <p className="acc-text">Email</p>
                <input
                  className="acc-input-bottom"
                  type="email"
                  placeholder="Email"
                />
                <span className="acc-span">Please enter your Email adres.</span>
              </div>
            </div>
          </div>
          <div className="acc-bottom">
            <button className="acc-btn"> Save Changes</button>
          </div>
        </div>
      </div>
    </div>
  );
};
