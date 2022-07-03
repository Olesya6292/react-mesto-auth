import React from "react";
import PopupWithForm from "./PopupWithForm";
import { useFormAndValidation } from '../hooks/useFormAndValidation';

export default function AddPlacePopup({
  isOpen,
  onClose,
  onAddPlace,
  isLoading,
}) {
  const {values, handleChange, errors, isValid, resetForm} = useFormAndValidation();
  

  function handleSubmit(e) {
    e.preventDefault();

    onAddPlace({
      name: values.name,
      link: values.link,
    });
  }
  React.useEffect(() => {
   resetForm();
  }, [isOpen, resetForm]);

  return (
    <PopupWithForm
      name="add"
      title="Новое место"
      buttonText="Создать"
      loadingButtonText="Сохранение..."
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      isLoading={isLoading}
      isDisabled={!isValid}
    >
      <input
        type="text"
        name="name"
        id="title-input"
        placeholder="Название"
        className={`popup__input ${errors.name && "popup__input_type_error"}`}
        required
        value={values.name ?? ''}
        onChange={handleChange}
        minLength="2"
        maxLength="30"
      />
      <span className={`popup__input-error ${errors.name && "popup__input-error_active"}`}>{errors.name ?? ''}</span>

      <input
        type="url"
        name="link"
        id="link-input"
        placeholder="Ссылка на картинку"
        className={`popup__input ${errors.link && "popup__input_type_error"}`}
        required
        value={values.link ?? ''}
        onChange={handleChange}
      />
      <span className={`popup__input-error ${errors.link && "popup__input-error_active"}`}>{errors.link ?? ''}</span>
    </PopupWithForm>
  );
}
