import React, { useContext, useState } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import arrow_icon from "../../assets/arrow_icon.png";
import { CoinContext } from "../../context/CoinContext";
import { Link } from "react-router-dom";
import LoginSignup from "../../LoginSignup/LoginSignup";

const Navbar = () => {
  const { setCurrency } = useContext(CoinContext);
  const [showLogin, setShowLogin] = useState(false); 

  const currencyHandler = (event) => {
    switch (event.target.value) {
      case "usd":
        setCurrency({ name: "usd", symbol: "$" });
        break;
      case "eur":
        setCurrency({ name: "eur", symbol: "€" });
        break;
      case "inr":
        setCurrency({ name: "inr", symbol: "₹" });
        break;
      default:
        setCurrency({ name: "usd", symbol: "$" });
        break;
    }
  };

  React.useEffect(() => {
    if (showLogin) {
      document.body.classList.add("modal-open");
    } else {
      document.body.classList.remove("modal-open");
    }
  }, [showLogin]);

  return (
    <>
      <div className="navbar">
        <Link to={'/'}>
          <img src={logo} alt="" className="logo" />
        </Link>
        <ul>
          <Link to={'/'}><li>Home</li></Link>
          <Link to={'/features'}><li>Features</li></Link> 
          <Link to={'/privacy-policy'}><li>Privacy Policy</li></Link>
          <Link to={'/blog'}><li>Blog</li></Link>
        </ul>
        <div className="nav-right">
          <select onChange={currencyHandler}>
            <option value="usd">USD</option>
            <option value="eur">EUR</option>
            <option value="inr">INR</option>
          </select>
          <button onClick={() => setShowLogin(true)}>Sign up <img src={arrow_icon} alt="" /></button>
        </div>
      </div>

      {showLogin && (
      <div className="modal-background open" onClick={() => setShowLogin(false)}>
        <div className="modal-container open" onClick={(e) => e.stopPropagation()}>
          <LoginSignup closeModal={() => setShowLogin(false)} />
        </div>
      </div>
      )}
    </>
  );
};

export default Navbar; 