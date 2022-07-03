import React from "react";

function InfoTooltip({ isOpen, onClose, image, title }) {
  React.useEffect(() => {
    if (!isOpen) return;
    const handleEscClose = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    document.addEventListener("keydown", handleEscClose);
    return () => {
      document.removeEventListener("keydown", handleEscClose);
    };
  }, [isOpen, onClose]);

  const handleOverlayClose = (e) => {
    if (e.target === e.currentTarget && isOpen) {
      onClose();
    }
  };

  return (
    <div
      className={`popup popup_type_info ${isOpen && "popup_opened"}`}
      onClick={handleOverlayClose}
    >
      <div className="popup__container">
        <img
          src={image}
          className="popup-info__logo"
          alt="Информация о результате выполнения операции"
        />
        <h2 className="popup-info__title">{title}</h2>
        <button
          className="popup__close"
          type="button"
          onClick={onClose}
          aria-label="Закрыть"
        ></button>
      </div>
    </div>
  );
}

export default InfoTooltip;
