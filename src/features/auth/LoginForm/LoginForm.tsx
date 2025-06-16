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
        label="Email"
        type="email"
        value={credentials.email}
        onChange={(value) => handleInputChange("email", value)}
        onBlur={() => handleInputBlur("email")}
        error={touched.email ? errors.email : undefined}
        required
      />

      <Input
        label="Password"
        type="password"
        value={credentials.password}
        onChange={(value) => handleInputChange("password", value)}
        onBlur={() => handleInputBlur("password")}
        error={touched.password ? errors.password : undefined}
        required
      />

      <div className={styles.forgotPassword}>
        <Link to="/forgot-password" className={styles.forgotPasswordLink}>
          Forgot password?
        </Link>
      </div>

      <Button
        type="submit"
        variant="primary"
        size="large"
        fullWidth
        disabled={isLoading}
      >
        {isLoading ? "Signing in..." : "Sign in"}
      </Button>

      <div className={styles.divider}>
        <span>or</span>
      </div>

      <Button
        type="button"
        variant="secondary"
        size="large"
        fullWidth
        className={styles.googleButton}
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          className={styles.googleIcon}
        >
          <path
            fill="#4285F4"
            d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
          />
          <path
            fill="#34A853"
            d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
          />
          <path
            fill="#FBBC05"
            d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
          />
          <path
            fill="#EA4335"
            d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
          />
        </svg>
        Continue with Google
      </Button>

      <div className={styles.signupPrompt}>
        Don't have an account?{" "}
        <Link to="/register" className={styles.signupLink}>
          Create account
        </Link>
      </div>
    </form>
  );
};
