/* eslint-disable no-useless-escape */
import React from "react";
import PopupWithForm from "../PopupWithForm/PopupWithForm";
import { useFormWithValidation } from "../formValidation/formValidation";

export function Signup({
  isOpen,
  onClose,
  onSwitch,
  onSubmit,
  isSuccess,
  isServerError,
}) {
  // states and functions
  const { values, handleChange, errors, isValid, resetForm } =
    useFormWithValidation();

  function handleSignup(evt) {
    evt.preventDefault();
    onSubmit(values, resetForm);
  }

  return (
    <PopupWithForm
      isValid={isValid}
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
        className="modal__input"
        placeholder="Enter email"
        name="email"
        type="email"
        value={values.email || ""}
        onChange={handleChange}
        noValidate
        required
      ></input>
      <span
        className={`modal__error ${
          errors.email ? "modal__error_mode_active" : ""
        }`}
      >
        Invalid email address
      </span>
      <span className="modal__subtitle">Password</span>
      <input
        className="modal__input"
        placeholder="Enter password"
        name="password"
        type="password"
        value={values.password || ""}
        onChange={handleChange}
        required
      ></input>
      <span
        className={`modal__error ${
          errors.password ? "modal__error_mode_active" : ""
        }`}
      >
        Invalid password
      </span>
      <span className="modal__subtitle">Username</span>
      <input
        className="modal__input"
        placeholder="Enter your username"
        name="name"
        value={values.name || ""}
        onChange={handleChange}
        required
      ></input>
      <span
        className={`modal__error ${
          errors.name ? "modal__error_mode_active" : ""
        }`}
      >
        Invalid username
      </span>
    </PopupWithForm>
  );
}
