import "./Security.css";
import { useContext } from "react";
import { ThemeContext } from "../../Context/themeContext";

export const Security = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`${theme} security`}>
      <div className="container security__container">
        <div className="my-acc-right">
          <h4 className="acc-head">Change Or Recover Your Password:</h4>
          <div className="my-acc-input">
            <p className="acc-text">Email</p>
            <input className="acc-input" type="email" placeholder="Email" />
            <span className="acc-span">Please enter your Email adres.</span>
          </div>
          <div className="my-acc-input">
            <p className="acc-text">Current password</p>
            <input
              className="acc-input"
              type="password"
              placeholder="password..."
            />
            <span className="acc-span">Please enter your password.</span>
          </div>
          <div className="my-acc-input">
            <div className="acc-two-input">
              <div className="my-acc-input">
                <p className="acc-text">New Password</p>
                <input
                  className="acc-input-bottom"
                  type="password"
                  placeholder="newpassword..."
                />
                <span className="acc-span">
                  Please enter your phone number.
                </span>
              </div>
              <div className="my-acc-input">
                <p className="acc-text">Confirm Password</p>
                <input
                  className="acc-input-bottom"
                  type="password"
                  placeholder="Confirm Password..."
                />
                <span className="acc-span">
                  Please enter your email address.
                </span>
              </div>
            </div>
          </div>
          <div className="security-bottom">
            <button className="acc-btn"> Save Changes</button>
          </div>
        </div>
      </div>
    </div>
  );
};
