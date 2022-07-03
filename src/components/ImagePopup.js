import React from "react";

function ImagePopup({ card, onClose }) {
  React.useEffect(() => {
    if (!card) return;
    const handleEscClose = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    document.addEventListener("keydown", handleEscClose);
    return () => {
      document.removeEventListener("keydown", handleEscClose);
    };
  }, [card, onClose]);

  const handleOverlayClose = (e) => {
    if (e.target === e.currentTarget && card) {
      onClose();
    }
  };
  return (
    <div
      className={`popup popup_type_image ${card && "popup_opened"}`}
      onClick={handleOverlayClose}
    >
      <div className="popup__image-container">
        <figure className="popup__figure">
          <img
            src={card?.link}
            alt={card?.name}
            className="popup__image"
          />
          <figcaption className="popup__caption">
          {card?.name}
          </figcaption>
        </figure>
        <button
          onClick={onClose}
          type="button"
          className="popup__close popup__close_type_image"
          aria-label="Закрыть"
        ></button>
      </div>
    </div>
  );
}

export default ImagePopup;
