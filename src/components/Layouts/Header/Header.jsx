import React from "react";
import classes from "./header.module.css";
import Hamburger from "hamburger-react";
import { useState } from "react";

const Header = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <header className={classes.root}>
      <div className={classes.logoComponent}>
        <img src="" alt="Logo" />
      </div>
      <div className={classes.menuButtonComponent}>
        <Hamburger toggled={isOpen} toggle={setOpen} />
      </div>
    </header>
  );
};

export default Header;
