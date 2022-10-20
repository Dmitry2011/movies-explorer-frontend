import React from "react";

const validationInput = () => {

    // состояние введенного значения в инпут
  const [enteredValues, setEnteredValues] = React.useState({});

    // состояние ошибки валидации
  const [errors, setErrors] = React.useState({});

    // состояние формы "валидна"
  const [isFormValid, setIsFormValid] = React.useState(false);

    // обработчик изменения значения
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setEnteredValues({
      ...enteredValues,
      [name]: value,
    });
    setErrors({
      ...errors,
      [name]: event.target.validationMessage,
    });
    setIsFormValid(event.target.closest('.form').checkValidity());
  };

    // сброс состояний введенного значения, ошибки, состояния формы
  const resetForm = React.useCallback(
    (newValues = {}, newErrors = {}, newIsFormValid = false) => {
      setEnteredValues(newValues);
      setErrors(newErrors);
      setIsFormValid(newIsFormValid);
    },
    [setEnteredValues, setErrors, setIsFormValid]
  );

  return {
    enteredValues,
    errors,
    handleChange,
    isFormValid,
    resetForm,
  };
};

export default validationInput;
