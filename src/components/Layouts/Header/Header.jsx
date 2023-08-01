import React from "react";
import classes from "./header.module.css";

const Header = () => {
  return (
    <header className={classes.root}>
      <div className={classes.logoComponent}>
        <img src="" alt="Logo" />
      </div>
      <div className={classes.menuButtonComponent}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="12"
          viewBox="0 0 18 12"
          fill="none"
          onClick={() => {
            
          }}
        >
          <path
            d="M0 12V10H18V12H0ZM0 7V5H18V7H0ZM0 2V0H18V2H0Z"
            fill="#1C1B1F"
          />
        </svg>
      </div>
      <div className={`${classes.navigationPopUp} ${classes.active}`}>
        <div>
          <h5>eeee</h5>
        </div>
        <div>
          <h5>eeee</h5>
        </div>
        <div>
          <h5>eeee</h5>
        </div>
      </div>
    </header>
  );
};

export default Header;
