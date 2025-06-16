import React from "react";
import styles from "./AuthLayout.module.scss";

interface AuthLayoutProps {
  children: React.ReactNode;
  title: string;
  subtitle?: string;
}

export const AuthLayout: React.FC<AuthLayoutProps> = ({
  children,
  title,
  subtitle,
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.background}>
        <div className={styles.backgroundPattern}></div>
      </div>
      <div className={styles.content}>
        <div className={styles.formContainer}>
          <div className={styles.logo}>
            <div className={styles.logoIcon}>
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                <rect width="40" height="40" rx="8" fill="#1a73e8" />
                <path
                  d="M12 12h16v2H12v-2zm0 6h16v2H12v-2zm0 6h12v2H12v-2z"
                  fill="white"
                />
                <circle cx="32" cy="32" r="4" fill="#ea4335" />
              </svg>
            </div>
            <span className={styles.logoText}>Calendorny</span>
          </div>

          <div className={styles.header}>
            <h1 className={styles.title}>{title}</h1>
            {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
          </div>

          <div className={styles.form}>{children}</div>
        </div>
      </div>
    </div>
  );
};
