import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import Head from 'next/head';

const Dashboard = () => {
  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout();
  };

  return (
    <>
      <Head>
        <title>Dashboard - Todo Chatbot</title>
        <meta name="description" content="Your Todo Chatbot dashboard" />
      </Head>

      <div style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f7fafc',
        padding: '20px'
      }}>
        <div style={{
          maxWidth: '600px',
          width: '100%',
          backgroundColor: 'white',
          borderRadius: '16px',
          padding: '40px',
          boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)'
        }}>
          <div style={{ textAlign: 'center', marginBottom: '32px' }}>
            <h1 style={{ fontSize: '2rem', fontWeight: '700', color: '#2d3748', marginBottom: '8px' }}>
              Welcome, {user?.firstName || 'User'}!
            </h1>
            <p style={{ color: '#718096', fontSize: '1rem' }}>
              You've successfully signed in to your Todo Chatbot account.
            </p>
          </div>

          <div style={{ marginBottom: '32px', padding: '20px', backgroundColor: '#f7fafc', borderRadius: '8px' }}>
            <h2 style={{ fontSize: '1.25rem', fontWeight: '600', color: '#4a5568', marginBottom: '12px' }}>
              Next Steps:
            </h2>
            <ul style={{ color: '#718096', lineHeight: '1.6' }}>
              <li>• Start creating your first todo</li>
              <li>• Explore AI-powered chatbot features</li>
              <li>• Customize your settings</li>
              <li>• Connect with team members</li>
            </ul>
          </div>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '16px' }}>
            <button
              onClick={handleLogout}
              style={{
                padding: '12px 24px',
                backgroundColor: '#e53e3e',
                color: 'white',
                border: 'none',
                borderRadius: '8px',
                fontSize: '1rem',
                fontWeight: '500',
                cursor: 'pointer',
                transition: 'all 0.2s ease'
              }}
              onMouseOver={(e) => e.target.style.backgroundColor = '#c53030'}
              onMouseOut={(e) => e.target.style.backgroundColor = '#e53e3e'}
              onFocus={(e) => e.target.style.outline = '2px solid #e53e3e'}
              onBlur={(e) => e.target.style.outline = 'none'}
            >
              Sign Out
            </button>

            <button
              style={{
                padding: '12px 24px',
                backgroundColor: '#667eea',
                color: 'white',
                border: 'none',
                borderRadius: '8px',
                fontSize: '1rem',
                fontWeight: '500',
                cursor: 'pointer',
                transition: 'all 0.2s ease'
              }}
              onMouseOver={(e) => e.target.style.backgroundColor = '#5a67d8'}
              onMouseOut={(e) => e.target.style.backgroundColor = '#667eea'}
              onFocus={(e) => e.target.style.outline = '2px solid #667eea'}
              onBlur={(e) => e.target.style.outline = 'none'}
            >
              Go to Todos
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;