import React, { useState } from "react";
import classes from "./passRegistr.module.css";

const PassRegistration = () => {
  const [errors, setErrors] = useState({});
  const persones = [];
  const [state, setState] = useState({
    fullname: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form submitted:", state);
    }
    persones.push(state);
    console.log(persones);
    setState({
      fullname: "",
      password: "",
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };
  const validateForm = () => {
    let errors = {};

    const nameRegex = /^[a-zA-Z\s]+$/;
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

    if (!state.fullname.match(nameRegex)) {
      errors.fullName = "Error Name";
    }

    if (!state.password.match(passwordRegex)) {
      errors.password = "Error Password";
    }

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };
  return (
    <div className={classes.general}>
      <form className={classes.resepList} onSubmit={handleSubmit}>
        <div className={classes.context}>
          <h1>Register</h1>
        </div>
        <div className={classes.info}>
          <div className={classes.inpname}>
            <label htmlFor="fullname">Full name</label>
            <input
              id="fullname"
              name="fullname"
              type="text"
              placeholder="Enter your full name"
              value={state.fullname}
              onChange={handleChange}
            />
            <br />
            {errors.fullname && (
              <span className="error">{errors.fullname}</span>
            )}
          </div>
          <div className={classes.inppassword}>
            <label htmlFor="myPassword">Password</label>
            <input
              id="myPassword"
              name="password"
              type="password"
              placeholder="Enter your password"
              value={state.password}
              onChange={handleChange}
            />
            <br />
            {errors.password && (
              <span className="error">{errors.password}</span>
            )}
          </div>
        </div>
        <div className={classes.setbtn}>
          <button type="submit" id="mybtn">
            Login
          </button>
        </div>
      </form>
      
    </div>
  );
};

export default PassRegistration;
