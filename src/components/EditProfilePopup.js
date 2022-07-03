import React from "react";
import PopupWithForm from "./PopupWithForm";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import { useFormAndValidation } from '../hooks/useFormAndValidation';

export default function EditProfilePopup({
  isOpen,
  onClose,
  onUpdateUser,
  isLoading,
}) {
  const currentUser = React.useContext(CurrentUserContext);
  const {values, handleChange, errors, isValid, setIsValid, resetForm} = useFormAndValidation();

   function handleSubmit(e) {
    e.preventDefault();

    onUpdateUser({
      name: values.name,
      about: values.about,
    });
  }

  React.useEffect(() => {
    if(currentUser) {
      resetForm ({
        name: currentUser.name,
        about: currentUser.about
        })
        setIsValid(true);
    }
  }, [currentUser, isOpen, resetForm, setIsValid]);

  return (
    <PopupWithForm
      name="edit"
      title="Редактировать профиль"
      buttonText="Сохранить"
      loadingButtonText="Сохранение..."
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      isLoading={isLoading}
      isDisabled={!isValid}
    >
      <input
        type="text"
        value={values.name ?? ""}
        name="name"
        id="name-input"
        placeholder="Ваше имя"
        className={`popup__input ${errors.name && "popup__input_type_error"}`}
        onChange={handleChange}
        required
        minLength="2"
        maxLength="40"
      />
      <span className={`popup__input-error ${errors.name && "popup__input-error_active"}`}>{errors.name ?? ''}</span>
      <input
        type="text"
        value={values.about ?? ""}
        name="about"
        id="profession-input"
        placeholder="Вид деятельности"
        className={`popup__input ${errors.about && "popup__input_type_error"}`}
        onChange={handleChange}
        required
        minLength="2"
        maxLength="200"
      />
      <span className={`popup__input-error ${errors.about && "popup__input-error_active"}`}>{errors.about ?? ''}</span>
    </PopupWithForm>
  );
}
