/* eslint-disable no-useless-escape */
import React, { useEffect } from "react";
// import { Link } from "react-router-dom";
import PopupWithForm from "../PopupWithForm/PopupWithForm";

export function Login({
  onSubmit,
  isOpen,
  onClose,
  onSwitch,
  isSuccess,
  setIsInfoTooltipOpen,
  isServerError,
}) {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");


  const [isEmailError, setIsEmailError] = React.useState(false);
  const [isPasswordError, setIsPasswordError] = React.useState(false);

  useEffect(() => {
    setEmail("");
    setPassword("");
  }, [isOpen]);

  function handleEmailChange(evt) {
    const {value} = evt.target;
    const regex = (/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/)

    if (value === regex){
      setIsEmailError(true);
    } else {
      setIsEmailError(false);
      setEmail(value);
    }
  }

  function handlePasswordChange(evt) {
    const {value} = evt.target;
    if (value) {
      setPassword(value);
      setIsPasswordError(false);
    } else {
      setIsPasswordError(true);
    }
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    onSubmit(email, password);
  }

  return (
    <PopupWithForm
      isServerError={isServerError}
      isSuccess={isSuccess}
      name="login"
      isOpen={isOpen}
      onClose={onClose}
      title="Sign in"
      buttonText="Sign in"
      link="Sign up"
      onSwitch={onSwitch}
      onSubmit={handleSubmit}
      setIsInfoTooltipOpen={setIsInfoTooltipOpen}
      // isServerError={isServerError}
      // email={email}
      // password={password}
    >
      <span className="modal__subtitle">Email</span>
      <input
        // onClick={handleTempEmailError}
        className="modal__input"
        placeholder="Enter email"
        name="email"
        type="email"
        value={email}
        onChange={handleEmailChange}
        noValidate
        required
      ></input>
      <span
        className={`modal__error ${
          isEmailError ? "modal__error_mode_active" : ""
        }`}
      >
        Invalid email address
      </span>
      <span className="modal__subtitle">Password</span>
      <input
        // onClick={handleTempPasswordError}
        className="modal__input"
        placeholder="Enter password"
        name="password"
        type="password"
        value={password}
        onChange={handlePasswordChange}
        noValidate
        required
      ></input>
      <span
        className={`modal__error ${
          isPasswordError ? "modal__error_mode_active" : ""
        }`}
      >
        Invalid password
      </span>
    </PopupWithForm>
  );
}
