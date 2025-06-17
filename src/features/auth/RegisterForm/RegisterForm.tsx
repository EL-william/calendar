import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button, Input } from "@/shared/ui";
import {
  RegisterCredentials,
  ValidationErrors,
  validateRegisterForm,
  hasValidationErrors,
} from "@/entities/auth";
import styles from "./RegisterForm.module.scss";

interface RegisterFormProps {
  onSubmit: (credentials: RegisterCredentials) => void;
  isLoading?: boolean;
  error?: string;
}

export const RegisterForm: React.FC<RegisterFormProps> = ({
  onSubmit,
  isLoading = false,
  error,
}) => {
  const [credentials, setCredentials] = useState<RegisterCredentials>({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState<ValidationErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  const handleInputChange = (
    field: keyof RegisterCredentials,
    value: string,
  ) => {
    setCredentials((prev) => ({ ...prev, [field]: value }));

    // Clear field error when user starts typing
    if (errors[field] && touched[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const handleInputBlur = (field: keyof RegisterCredentials) => {
    setTouched((prev) => ({ ...prev, [field]: true }));

    // Validate field on blur
    const fieldErrors = validateRegisterForm(credentials);
    setErrors((prev) => ({ ...prev, [field]: fieldErrors[field] }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const validationErrors = validateRegisterForm(credentials);
    setErrors(validationErrors);
    setTouched({
      name: true,
      email: true,
      password: true,
      confirmPassword: true,
    });

    if (!hasValidationErrors(validationErrors)) {
      onSubmit(credentials);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      {error && <div className={styles.errorAlert}>{error}</div>}

      <Input
        label="Полное имя"
        type="text"
        placeholder="Введите ваше имя"
        value={credentials.name}
        onChange={(value) => handleInputChange("name", value)}
        onBlur={() => handleInputBlur("name")}
        error={touched.name ? errors.name : undefined}
        required
      />

      <Input
        label="Электронная почта"
        type="email"
        placeholder="Введите email"
        value={credentials.email}
        onChange={(value) => handleInputChange("email", value)}
        onBlur={() => handleInputBlur("email")}
        error={touched.email ? errors.email : undefined}
        required
      />

      <Input
        label="Пароль"
        type="password"
        placeholder="Введите пароль"
        value={credentials.password}
        onChange={(value) => handleInputChange("password", value)}
        onBlur={() => handleInputBlur("password")}
        error={touched.password ? errors.password : undefined}
        required
      />

      <Input
        label="Подтвердите пароль"
        type="password"
        placeholder="Повторите пароль"
        value={credentials.confirmPassword}
        onChange={(value) => handleInputChange("confirmPassword", value)}
        onBlur={() => handleInputBlur("confirmPassword")}
        error={touched.confirmPassword ? errors.confirmPassword : undefined}
        required
      />

      <Button
        type="submit"
        variant="primary"
        size="large"
        fullWidth
        disabled={isLoading}
      >
        {isLoading ? "Создание аккаунта..." : "Создать аккаунт"}
      </Button>

      <div className={styles.loginPrompt}>
        Уже есть аккаунт?{" "}
        <Link to="/login" className={styles.loginLink}>
          Войти
        </Link>
      </div>
    </form>
  );
};
