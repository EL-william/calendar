import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button, Input } from "@/shared/ui";
import {
  LoginCredentials,
  ValidationErrors,
  validateLoginForm,
  hasValidationErrors,
} from "@/entities/auth";
import styles from "./LoginForm.module.scss";

interface LoginFormProps {
  onSubmit: (credentials: LoginCredentials) => void;
  isLoading?: boolean;
  error?: string;
}

export const LoginForm: React.FC<LoginFormProps> = ({
  onSubmit,
  isLoading = false,
  error,
}) => {
  const [credentials, setCredentials] = useState<LoginCredentials>({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState<ValidationErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  const handleInputChange = (field: keyof LoginCredentials, value: string) => {
    setCredentials((prev) => ({ ...prev, [field]: value }));

    // Clear field error when user starts typing
    if (errors[field] && touched[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const handleInputBlur = (field: keyof LoginCredentials) => {
    setTouched((prev) => ({ ...prev, [field]: true }));

    // Validate field on blur
    const fieldErrors = validateLoginForm(credentials);
    setErrors((prev) => ({ ...prev, [field]: fieldErrors[field] }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const validationErrors = validateLoginForm(credentials);
    setErrors(validationErrors);
    setTouched({ email: true, password: true });

    if (!hasValidationErrors(validationErrors)) {
      onSubmit(credentials);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      {error && <div className={styles.errorAlert}>{error}</div>}

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

      <div className={styles.forgotPassword}>
        <Link to="/forgot-password" className={styles.forgotPasswordLink}>
          Забыли пароль?
        </Link>
      </div>

      <Button
        type="submit"
        variant="primary"
        size="large"
        fullWidth
        disabled={isLoading}
      >
        {isLoading ? "В��од..." : "Войти"}
      </Button>

      <div className={styles.signupPrompt}>
        Нет аккаунта?{" "}
        <Link to="/register" className={styles.signupLink}>
          Создать аккаунт
        </Link>
      </div>
    </form>
  );
};
