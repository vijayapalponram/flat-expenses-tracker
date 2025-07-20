export default function Register() {
  return (
    <div>
      <h2>Register</h2>
      <form>
        <label>
          Name:
          <input type="text" name="name" required />
        </label>
        <br />
        <label>
          Email:
          <input type="email" name="email" required />
        </label>
        <br />
        <label>
          Password:
          <input type="password" name="password" required />
        </label>
        <br />
        <label>
          Flat Number:
          <input type="text" name="flatNumber" required />
        </label>
        <br />
        <label>
          Role:
          <select name="role" required>
            <option value="resident">Resident</option>
            <option value="admin">Admin</option>
          </select>
        </label>
        <br />
        <button type="submit">Register</button>
      </form>
    </div>
  );
}
