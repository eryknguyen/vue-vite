import { EMAIL_REGEX, PASSWORD_MIN_LENGTH } from "@/helpers/constants.ts";

export function useValidators() {
  const isEmpty = (fieldValue: string) => {
    return !fieldValue ? "error-message.required" : "";
  };

  const minLength = (fieldValue: string, min: number) => {
    return fieldValue.length < min ? "error-message.min-length" : "";
  };

  const isEmail = (fieldValue: string) => {
    return !EMAIL_REGEX.test(fieldValue) ? "error-message.invalid" : "";
  };
  return { isEmpty, minLength, isEmail };
}

export function useFormValidation() {
  const { isEmpty, minLength, isEmail } = useValidators();
  const validatePasswordField = (fieldValue: string) => {
    return !fieldValue ? isEmpty(fieldValue) : minLength(fieldValue, PASSWORD_MIN_LENGTH);
  };
  const validateEmailField = (fieldValue: string) => {
    return !fieldValue ? isEmpty(fieldValue) : isEmail(fieldValue);
  };
  return { validatePasswordField, validateEmailField };
}
