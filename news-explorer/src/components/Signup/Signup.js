/* eslint-disable no-useless-escape */
import React, { useEffect } from "react";
import PopupWithForm from "../PopupWithForm/PopupWithForm";

export function Signup({ isOpen, onClose, onSwitch, onSubmit, isSuccess, isServerError }) {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [username, setUsername] = React.useState("");

  //stage-2 states and functions
  const [isEmailError, setIsEmailError] = React.useState(false);
  const [isPasswordError, setIsPasswordError] = React.useState(false);
  const [isUsernameError, setIsUsernameError] = React.useState(false);

  useEffect(() => {
    setEmail("");
    setPassword("");
    setUsername("");
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

  function handleUserNameChange(evt) {
    const {value} = evt.target;
    if (value) {
      setUsername(value);
      setIsUsernameError(false);
    } else {
      setIsUsernameError(true);
    }
  }

  function handleSignup(evt) {
    evt.preventDefault();
    onSubmit(email, password, username);
  }

  return (
    <PopupWithForm
      name="signup"
      isOpen={isOpen}
      onClose={onClose}
      title="Sign up"
      buttonText="Sign up"
      link="Sign in"
      onSwitch={onSwitch}
      onSubmit={handleSignup}
      isSuccess={isSuccess}
      isServerError={isServerError}
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
      <span className="modal__subtitle">Username</span>
      <input
        // onClick={handleTempUsernameError}
        className="modal__input"
        placeholder="Enter your username"
        name="user-name"
        type="user-name"
        value={username}
        onChange={handleUserNameChange}
        noValidate
        required
      ></input>
      <span
        className={`modal__error ${
          isUsernameError ? "modal__error_mode_active" : ""
        }`}
      >
        Invalid username
      </span>
    </PopupWithForm>
  );
}
