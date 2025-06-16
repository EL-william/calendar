import {
  LoginCredentials,
  RegisterCredentials,
  ValidationErrors,
} from "./types";

export const validateEmail = (email: string): string | undefined => {
  if (!email) {
    return "Электронная почта обязательна";
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return "Введите корректный адрес электронной почты";
  }

  return undefined;
};

export const validatePassword = (password: string): string | undefined => {
  if (!password) {
    return "Пароль обязателен";
  }

  if (password.length < 8) {
    return "Пароль должен содержать минимум 8 символов";
  }

  if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(password)) {
    return "Пароль должен содержать заглавную букву, строчную букву и цифру";
  }

  return undefined;
};

export const validateName = (name: string): string | undefined => {
  if (!name) {
    return "Имя обязательно";
  }

  if (name.length < 2) {
    return "Имя должно содержать минимум 2 символа";
  }

  return undefined;
};

export const validateConfirmPassword = (
  password: string,
  confirmPassword: string,
): string | undefined => {
  if (!confirmPassword) {
    return "Подтвердите пароль";
  }

  if (password !== confirmPassword) {
    return "Пароли не совпадают";
  }

  return undefined;
};

export const validateLoginForm = (
  credentials: LoginCredentials,
): ValidationErrors => {
  const errors: ValidationErrors = {};

  const emailError = validateEmail(credentials.email);
  if (emailError) errors.email = emailError;

  const passwordError = validatePassword(credentials.password);
  if (passwordError) errors.password = passwordError;

  return errors;
};

export const validateRegisterForm = (
  credentials: RegisterCredentials,
): ValidationErrors => {
  const errors: ValidationErrors = {};

  const nameError = validateName(credentials.name);
  if (nameError) errors.name = nameError;

  const emailError = validateEmail(credentials.email);
  if (emailError) errors.email = emailError;

  const passwordError = validatePassword(credentials.password);
  if (passwordError) errors.password = passwordError;

  const confirmPasswordError = validateConfirmPassword(
    credentials.password,
    credentials.confirmPassword,
  );
  if (confirmPasswordError) errors.confirmPassword = confirmPasswordError;

  return errors;
};

export const hasValidationErrors = (errors: ValidationErrors): boolean => {
  return Object.keys(errors).length > 0;
};
