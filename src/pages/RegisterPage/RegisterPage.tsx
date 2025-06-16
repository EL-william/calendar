import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthLayout } from "@/shared/ui/AuthLayout/AuthLayout";
import { RegisterForm } from "@/features/auth";
import { RegisterCredentials } from "@/entities/auth";

export const RegisterPage: React.FC = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleRegister = async (credentials: RegisterCredentials) => {
    setIsLoading(true);
    setError(null);

    try {
      // Simulated API call - replace with actual registration logic
      await new Promise((resolve, reject) => {
        setTimeout(() => {
          // Simulate user registration
          if (credentials.email === "existing@example.com") {
            reject(
              new Error("Аккаунт с такой электронной почтой уже существует"),
            );
          } else {
            resolve(true);
          }
        }, 1500);
      });

      // Success - redirect to dashboard or email verification
      navigate("/dashboard");
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Произошла неожиданная ошибка",
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AuthLayout
      title="Создайте аккаунт"
      subtitle="Присоединяйтесь к Calendorny для организации задач и повышения продуктивности"
    >
      <RegisterForm
        onSubmit={handleRegister}
        isLoading={isLoading}
        error={error}
      />
    </AuthLayout>
  );
};
