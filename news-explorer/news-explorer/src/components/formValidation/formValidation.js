/* eslint-disable no-useless-escape */
import React, { useCallback } from "react";

// hook for form control and form validation
export function useFormWithValidation() {
  const [values, setValues] = React.useState({ email: "", password: "", name: "" });
  const [errors, setErrors] = React.useState({});
  const [isValid, setIsValid] = React.useState(false);

  const handleChange = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.value;
    const newValue = value.replace(/[*|\"<>[\](){}`';:&$+]=+/, "");
    setValues({...values, [name]: newValue});
    setErrors({...errors, [name]: target.validationMessage });
    setIsValid(target.closest("form").checkValidity());
  };

  const resetForm = useCallback(
    (newValues = {}, newErrors = {}, newIsValid = false) => {
      setValues(newValues);
      setErrors(newErrors);
      setIsValid(newIsValid);
    },
    [setValues, setErrors, setIsValid]
  );

  return { values, handleChange, errors, isValid, resetForm };
}