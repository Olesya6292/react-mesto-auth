import React from "react";
import PopupWithForm from "./PopupWithForm";
import { useFormAndValidation } from '../hooks/useFormAndValidation';

export default function EditAvatarPopup({
  isOpen,
  onClose,
  onUpdateAvatar,
  isLoading,
}) {
  const {values, handleChange, errors, isValid, resetForm} = useFormAndValidation();

  function handleSubmit(evt) {
    evt.preventDefault();

    onUpdateAvatar({
      avatar: values.avatar,
    });
  }
  React.useEffect(() => {
    resetForm();
  }, [isOpen, resetForm]);
  return (
    <PopupWithForm
      name="avatar"
      title="Обновить аватар"
      buttonText="Сохранить"
      loadingButtonText="Сохранение..."
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      isLoading={isLoading}
      isDisabled={!isValid}
    >
      <input
        type="url"
        name="avatar"
        value={values.avatar ?? ''}
        id="link-input-avatar"
        placeholder="Ссылка на картинку"
        className={`popup__input ${errors.avatar && "popup__input_type_error"}`}
        onChange={handleChange}
        required
      />
      <span className={`popup__input-error ${errors.avatar && "popup__input-error_active"}`}>{errors.avatar ?? ''}</span>
    </PopupWithForm>
  );
}
