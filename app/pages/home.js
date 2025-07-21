import React from 'react';

function Header() {
  return (
    <header style={{ width: '100%', background: 'linear-gradient(90deg, #1976d2 0%, #42a5f5 100%)', padding: '24px 0', marginBottom: 32, borderRadius: '0 0 16px 16px', boxShadow: '0 2px 8px rgba(25, 118, 210, 0.08)' }}>
      <h1 style={{ color: '#fff', textAlign: 'center', fontSize: '2.5rem', margin: 0, letterSpacing: 1 }}>Flat Expenses Tracker</h1>
    </header>
  );
}

export default function HomePage() {
  return (
    <>
      <Header />
      <div style={{ maxWidth: 600, margin: '0 auto', padding: 32, borderRadius: 16, boxShadow: '0 2px 16px rgba(0,0,0,0.10)', background: '#f9f9f9' }}>
        <h2 style={{ textAlign: 'center', color: '#1976d2', marginBottom: 24 }}>Welcome!</h2>
        <p style={{ textAlign: 'center', fontSize: '1.1rem', color: '#333', marginBottom: 32 }}>
          You are now logged in. This is your authenticated home page.<br />
          Here you will be able to view and manage your flat expenses, carpus fund, and more.
        </p>
        {/* Add more authenticated features here */}
      </div>
    </>
  );
}
