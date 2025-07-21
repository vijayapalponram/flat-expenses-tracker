import { useState } from 'react';
import { useRouter } from 'next/router';
import { fetchWrapper } from '../services/fetchWrapper';

export default function Login() {
  const [form, setForm] = useState({ email: '', password: '' });
  const [message, setMessage] = useState('');
  const router = useRouter();

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setMessage('');
    const res = await fetchWrapper('/api/users/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form)
    });
    if (res.ok) {
      setMessage('Login successful! Redirecting...');
      setTimeout(() => router.push('/home'), 1200);
    } else {
      setMessage('Login failed.');
    }
  };

  return (
    <div style={{ maxWidth: 400, margin: '40px auto', padding: 24, borderRadius: 12, boxShadow: '0 2px 12px rgba(0,0,0,0.08)', background: '#fff' }}>
      <h2 style={{ textAlign: 'center', color: '#1976d2' }}>Login</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: 16 }}>
          <label style={{ display: 'block', marginBottom: 4 }}>Email</label>
          <input name="email" type="email" value={form.email} onChange={handleChange} required style={{ width: '100%', padding: 8, borderRadius: 6, border: '1px solid #ccc' }} />
        </div>
        <div style={{ marginBottom: 16 }}>
          <label style={{ display: 'block', marginBottom: 4 }}>Password</label>
          <input name="password" type="password" value={form.password} onChange={handleChange} required style={{ width: '100%', padding: 8, borderRadius: 6, border: '1px solid #ccc' }} />
        </div>
        <button type="submit" style={{ width: '100%', padding: 10, borderRadius: 6, background: '#1976d2', color: '#fff', fontWeight: 'bold', border: 'none', cursor: 'pointer' }}>Login</button>
      </form>
      {message && <p style={{ marginTop: 16, textAlign: 'center', color: message.includes('successful') ? 'green' : 'red' }}>{message}</p>}
    </div>
  );
}
