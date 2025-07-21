import { useState } from 'react';
import { useRouter } from 'next/router';
import { fetchWrapper } from '../services/fetchWrapper';

function Header() {
  return (
    <header style={{ width: '100%', background: 'linear-gradient(90deg, #1976d2 0%, #42a5f5 100%)', padding: '24px 0', marginBottom: 32, borderRadius: '0 0 16px 16px', boxShadow: '0 2px 8px rgba(25, 118, 210, 0.08)' }}>
      <h1 style={{ color: '#fff', textAlign: 'center', fontSize: '2.5rem', margin: 0, letterSpacing: 1 }}>Flat Expenses Tracker</h1>
    </header>
  );
}

export default function Register() {
  const [form, setForm] = useState({ name: '', email: '', password: '', flatNumber: '', role: 'resident' });
  const [message, setMessage] = useState('');
  const router = useRouter();

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setMessage('');
    const res = await fetchWrapper('/api/users/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form)
    });
    if (res.ok) {
      setMessage('Registration successful! Redirecting to login...');
      setTimeout(() => router.push('/login'), 1200);
    } else {
      setMessage('Registration failed.');
    }
  };

  return (
    <>
      <Header />
      <div style={{ maxWidth: 400, margin: '40px auto', padding: 24, borderRadius: 12, boxShadow: '0 2px 12px rgba(0,0,0,0.08)', background: '#fff' }}>
        <h2 style={{ textAlign: 'center', color: '#1976d2' }}>Register</h2>
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: 16 }}>
            <label style={{ display: 'block', marginBottom: 4 }}>Name</label>
            <input name="name" value={form.name} onChange={handleChange} required style={{ width: '100%', padding: 8, borderRadius: 6, border: '1px solid #ccc' }} />
          </div>
          <div style={{ marginBottom: 16 }}>
            <label style={{ display: 'block', marginBottom: 4 }}>Email</label>
            <input name="email" type="email" value={form.email} onChange={handleChange} required style={{ width: '100%', padding: 8, borderRadius: 6, border: '1px solid #ccc' }} />
          </div>
          <div style={{ marginBottom: 16 }}>
            <label style={{ display: 'block', marginBottom: 4 }}>Password</label>
            <input name="password" type="password" value={form.password} onChange={handleChange} required style={{ width: '100%', padding: 8, borderRadius: 6, border: '1px solid #ccc' }} />
          </div>
          <div style={{ marginBottom: 16 }}>
            <label style={{ display: 'block', marginBottom: 4 }}>Flat Number</label>
            <input name="flatNumber" value={form.flatNumber} onChange={handleChange} required style={{ width: '100%', padding: 8, borderRadius: 6, border: '1px solid #ccc' }} />
          </div>
          <div style={{ marginBottom: 16 }}>
            <label style={{ display: 'block', marginBottom: 4 }}>Role</label>
            <select name="role" value={form.role} onChange={handleChange} style={{ width: '100%', padding: 8, borderRadius: 6, border: '1px solid #ccc' }}>
              <option value="resident">Resident</option>
              <option value="admin">Admin</option>
            </select>
          </div>
          <button type="submit" style={{ width: '100%', padding: 10, borderRadius: 6, background: '#1976d2', color: '#fff', fontWeight: 'bold', border: 'none', cursor: 'pointer' }}>Register</button>
        </form>
        {message && <p style={{ marginTop: 16, textAlign: 'center', color: message.includes('successful') ? 'green' : 'red' }}>{message}</p>}
      </div>
    </>
  );
}
