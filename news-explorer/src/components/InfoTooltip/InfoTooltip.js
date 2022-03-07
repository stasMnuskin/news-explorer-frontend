function InfoTooltip({ isOpen, onClose, handleOpenLoginPopup }) {
  return (
    <div className={`modal modal_type_info ${isOpen ? "modal_open" : ""}`}>
      <div className="modal__frame">
        <button
          className="modal__close-button"
          type="button"
          aria-label="close"
          onClick={onClose}
        ></button>
        <h2 className="modal__text">Registration successfully completed!</h2>
        <button
          className="modal__link-button"
          aria-label="link"
          onClick={handleOpenLoginPopup}
        >
          Sign in
        </button>
      </div>
    </div>
  );
}

export default InfoTooltip;
