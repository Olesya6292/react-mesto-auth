import React from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function Card({ card, onCardClick, onCardLike, onCardDelete }) {
  const currentUser = React.useContext(CurrentUserContext);

  function handleClick() {
    onCardClick(card);
  }
  function handleLikeClick() {
    onCardLike(card);
  }

  function handleDeleteClick() {
    onCardDelete(card);
  }

  // Определяем, являемся ли мы владельцем текущей карточки
  const isOwn = card.owner._id === currentUser._id;

  // Определяем, есть ли у карточки лайк, поставленный текущим пользователем
  const isLiked = card.likes.some((i) => i._id === currentUser._id);
  const cardLikeButtonClassName = `card__like-button ${
    isLiked ? "card__like-button_active" : ""
  }`;

  return (
    <li className="card">
      <img
        className="card__image"
        src={card.link}
        alt={card.name}
        onClick={handleClick}
      />
      <button
        className="card__delete"
        hidden={!isOwn}
        onClick={handleDeleteClick}
      ></button>
      <div className="card__info">
        <h2 className="card__title">{card.name}</h2>
        <div className="card__like-section">
          <button
            onClick={handleLikeClick}
            className={cardLikeButtonClassName}
          ></button>
          <span className="card__like-button-count">{card.likes.length}</span>
        </div>
      </div>
    </li>
  );
}

export default Card;
