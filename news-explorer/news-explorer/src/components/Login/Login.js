/* eslint-disable no-useless-escape */
import React from "react";
import { useFormWithValidation } from "../formValidation/formValidation";

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
  const { values, handleChange, errors, isValid, resetForm } =
    useFormWithValidation();

  function handleSubmit(evt) {
    evt.preventDefault();
    onSubmit(values, resetForm);
  }

  return (
    <PopupWithForm
      isValid={isValid}
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
    >
      <span className="modal__subtitle">Email</span>
      <input
        className="modal__input"
        placeholder="Enter email"
        name="email"
        type="email"
        value={values.email || ""}
        onChange={handleChange}
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
    </PopupWithForm>
  );
}
