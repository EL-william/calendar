import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthLayout } from "@/shared/ui/AuthLayout/AuthLayout";
import { LoginForm } from "@/features/auth";
import { LoginCredentials } from "@/entities/auth";

export const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleLogin = async (credentials: LoginCredentials) => {
    setIsLoading(true);
    setError(null);

    try {
      // Simulated API call - replace with actual authentication logic
      await new Promise((resolve, reject) => {
        setTimeout(() => {
          // Simulate authentication
          if (
            credentials.email === "demo@calendorny.com" &&
            credentials.password === "Demo123!"
          ) {
            resolve(true);
          } else {
            reject(new Error("Invalid email or password"));
          }
        }, 1500);
      });

      // Success - redirect to dashboard
      navigate("/dashboard");
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "An unexpected error occurred",
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AuthLayout
      title="Welcome back"
      subtitle="Sign in to your Calendorny account to manage your tasks and schedule"
    >
      <LoginForm onSubmit={handleLogin} isLoading={isLoading} error={error} />
    </AuthLayout>
  );
};
