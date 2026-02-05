import React, { useState } from 'react';
import Head from 'next/head';
import LoginCard from '../components/auth/LoginCard';
import RegisterCard from '../components/auth/RegisterCard';
import styles from '../styles/Auth.module.css';

const AuthPage = () => {
  const [isLoginView, setIsLoginView] = useState(true);

  return (
    <>
      <Head>
        <title>Todo Chatbot - Authentication</title>
        <meta name="description" content="Sign in to your Todo Chatbot account" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.authContainer}>
        <div className={styles.authWrapper}>
          <div className={styles.authHeader}>
            <h1 className={styles.authTitle}>Todo Chatbot</h1>
            <p className={styles.authSubtitle}>Manage your tasks with AI assistance</p>
          </div>

          <div className={styles.authCardContainer}>
            <div className={styles.authToggle}>
              <button
                className={`${styles.toggleButton} ${isLoginView ? styles.active : ''}`}
                onClick={() => setIsLoginView(true)}
                aria-label="Login"
              >
                <span className={styles.toggleIcon}>🔑</span>
                Sign In
              </button>
              <button
                className={`${styles.toggleButton} ${!isLoginView ? styles.active : ''}`}
                onClick={() => setIsLoginView(false)}
                aria-label="Register"
              >
                <span className={styles.toggleIcon}>📝</span>
                Sign Up
              </button>
            </div>

            <div className={styles.cardContent}>
              {isLoginView ? <LoginCard /> : <RegisterCard />}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AuthPage;