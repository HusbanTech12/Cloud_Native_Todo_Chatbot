import React, { useState } from 'react';
import { useRouter } from 'next/router';
import styles from '../../styles/LoginCard.module.css';

const LoginCard = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const validateForm = () => {
    const newErrors = {};

    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: '',
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsLoading(true);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));

      // Successful login - redirect to dashboard
      router.push('/dashboard');
    } catch (error) {
      setErrors({ submit: 'Login failed. Please check your credentials.' });
    } finally {
      setIsLoading(false);
    }
  };

  const handleForgotPassword = () => {
    router.push('/forgot-password');
  };

  return (
    <div className={styles.loginCard}>
      <div className={styles.cardHeader}>
        <div className={styles.headerIcon}>👤</div>
        <h2 className={styles.cardTitle}>Welcome Back</h2>
        <p className={styles.cardSubtitle}>Sign in to your account to continue</p>
      </div>

      <form onSubmit={handleSubmit} className={styles.loginForm}>
        {errors.submit && (
          <div className={styles.errorBanner}>
            {errors.submit}
          </div>
        )}

        <div className={styles.inputGroup}>
          <label htmlFor="email" className={styles.label}>
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`${styles.input} ${errors.email ? styles.inputError : ''}`}
            placeholder="Enter your email"
            aria-describedby={errors.email ? 'email-error' : undefined}
          />
          {errors.email && (
            <span id="email-error" className={styles.errorMessage}>
              {errors.email}
            </span>
          )}
        </div>

        <div className={styles.inputGroup}>
          <label htmlFor="password" className={styles.label}>
            Password
          </label>
          <div className={styles.passwordContainer}>
            <input
              type={showPassword ? 'text' : 'password'}
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className={`${styles.input} ${errors.password ? styles.inputError : ''}`}
              placeholder="Enter your password"
              aria-describedby={errors.password ? 'password-error' : undefined}
            />
            <button
              type="button"
              className={styles.passwordToggle}
              onClick={() => setShowPassword(!showPassword)}
              aria-label={showPassword ? 'Hide password' : 'Show password'}
            >
              {showPassword ? '👁️' : '👁️‍🗨️'}
            </button>
          </div>
          {errors.password && (
            <span id="password-error" className={styles.errorMessage}>
              {errors.password}
            </span>
          )}
        </div>

        <div className={styles.formFooter}>
          <div className={styles.rememberMe}>
            <input type="checkbox" id="remember" name="remember" className={styles.checkbox} />
            <label htmlFor="remember" className={styles.checkboxLabel}>
              Remember me
            </label>
          </div>
          <button
            type="button"
            onClick={handleForgotPassword}
            className={styles.forgotPassword}
          >
            Forgot Password?
          </button>
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className={`${styles.submitButton} ${isLoading ? styles.loading : ''}`}
        >
          {isLoading ? (
            <span className={styles.loadingSpinner}>Signing in...</span>
          ) : (
            'Sign In'
          )}
        </button>
      </form>

      <div className={styles.socialLogin}>
        <div className={styles.divider}>
          <span className={styles.dividerText}>Or continue with</span>
        </div>
        <div className={styles.socialButtons}>
          <button className={styles.socialButton} type="button">
            <span className={styles.googleIcon}>🔍</span>
            Google
          </button>
          <button className={styles.socialButton} type="button">
            <span className={styles.githubIcon}>🐱</span>
            GitHub
          </button>
        </div>
      </div>

      <div className={styles.signupPrompt}>
        <p>
          Don't have an account?{' '}
          <button
            type="button"
            className={styles.signupLink}
            onClick={() => window.dispatchEvent(new CustomEvent('switchToRegister'))}
          >
            Sign up here
          </button>
        </p>
      </div>
    </div>
  );
};

export default LoginCard;