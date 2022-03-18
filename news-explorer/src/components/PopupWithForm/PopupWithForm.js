import React from "react";
import { Link } from "react-router-dom";

export default function PopupWithForm({
  name,
  isOpen,
  onClose,
  onSubmit,
  title,
  children,
  buttonText,
  link,
  onSwitch,
  isSuccess,
  isServerError,
}) {

  return (
    <div className={`modal modal_type_${name} ${isOpen ? "modal_open" : ""}`}>
      <div className="modal__container">
        <button
          onClick={onClose}
          aria-label="close"
          type="button"
          className={`modal__close-button ${
            isSuccess && "modal__close-button_mode_success"
          }`}
        ></button>
        <form
          onSubmit={onSubmit}
          name={name}
          action="#"
          className="modal__form"
        >
          <h2 className="modal__title">{title}</h2>
          {children}
          {isServerError ? (
            <span className="modal__server-error modal__server-error_mode_active">
              This email is not available
            </span>
          ) : (
            ""
          )}
          <button
            // onClick={handleSubmit}
            type="submit"
            className={`modal__submit-button ${
              isServerError ? "modal__submit-button_active" : ""
            }`}
          >
            {buttonText}
          </button>
          <p className="modal__link">
            or{" "}
            <Link className="modal__link-text" to="/" onClick={onSwitch}>
              {link}
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
