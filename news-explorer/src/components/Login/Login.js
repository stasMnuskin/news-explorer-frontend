import React, { useEffect } from "react";
// import { Link } from "react-router-dom";
import PopupWithForm from "../PopupWithForm/PopupWithForm";

export function Login({ isOpen, onClose, onLogin, onSwitch, isSuccess }) {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  //stage-2 states and functions
  const [isEmailError, setIsEmailError] = React.useState(false);
  const [isPasswordError, setIsPasswordError] = React.useState(false);

  function handleTempEmailError() {
    setIsEmailError((error) => !error);
    setTimeout(() => {
      setIsEmailError(false);
    }, 5000);
  }

  function handleTempPasswordError() {
    setIsPasswordError((error) => !error);
    setTimeout(() => {
      setIsPasswordError(false);
    }, 5000);
  }

  useEffect(() => {
    setEmail("");
    setPassword("");
  }, [isOpen]);

  function handleEmailChange(evt) {
    setEmail(evt.target.value);
  }

  function handlePasswordChange(evt) {
    setPassword(evt.target.value);
  }

  return (
    <PopupWithForm
      isSuccess={isSuccess}
      name="login"
      isOpen={isOpen}
      onClose={onClose}
      title="Sign in"
      buttonText="Sign in"
      link="Sign up"
      onSwitch={onSwitch}
      onLogin={onLogin}
    >
      <span className="modal__subtitle">Email</span>
      <input
        onClick={handleTempEmailError}
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
        onClick={handleTempPasswordError}
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
