import {
  LoginCredentials,
  RegisterCredentials,
  ValidationErrors,
} from "./types";

export const validateEmail = (email: string): string | undefined => {
  if (!email) {
    return "Email is required";
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return "Please enter a valid email address";
  }

  return undefined;
};

export const validatePassword = (password: string): string | undefined => {
  if (!password) {
    return "Password is required";
  }

  if (password.length < 8) {
    return "Password must be at least 8 characters long";
  }

  if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(password)) {
    return "Password must contain at least one uppercase letter, one lowercase letter, and one number";
  }

  return undefined;
};

export const validateName = (name: string): string | undefined => {
  if (!name) {
    return "Name is required";
  }

  if (name.length < 2) {
    return "Name must be at least 2 characters long";
  }

  return undefined;
};

export const validateConfirmPassword = (
  password: string,
  confirmPassword: string,
): string | undefined => {
  if (!confirmPassword) {
    return "Please confirm your password";
  }

  if (password !== confirmPassword) {
    return "Passwords do not match";
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
