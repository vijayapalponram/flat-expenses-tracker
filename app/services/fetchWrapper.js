// fetchWrapper.js
export async function fetchWrapper(url, options = {}) {
  try {
    const res = await fetch(`http://localhost:5000${url}`, options);
    const data = await res.json().catch(() => null);
    return { ok: res.ok, status: res.status, data };
  } catch (error) {
    return { ok: false, status: 500, data: null, error };
  }
}
