
import { useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");

  const [user, setUser] = useState(null);
  const [message, setMessage] = useState("");

  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [loginMessage, setLoginMessage] = useState("");

  function handleRegister(e) {
    e.preventDefault();

    setUser({ name, email, password, phone });
    setMessage("Registration Successful!");
  }

  function handleLogin(e) {
    e.preventDefault();

    if (
      user &&
      loginEmail === user.email &&
      loginPassword === user.password
    ) {
      setLoginMessage("Login Successful!");
    } else {
      setLoginMessage("Invalid Email or Password!");
    }
  }

  return (
    <div className="container">

      <div className="form-box">
        <h2>Registration Form</h2>

        <form onSubmit={handleRegister}>
          <input
            type="text"
            placeholder="Enter Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <input
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <input
            type="tel"
            placeholder="Enter Phone Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />

          <button type="submit">Register</button>
        </form>

        {message && (
          <div className="details">
            <h3>{message}</h3>
            <p>Name: {user.name}</p>
            <p>Email: {user.email}</p>
            <p>Phone: {user.phone}</p>
          </div>
        )}
      </div>

      <div className="form-box">
        <h2>Login Form</h2>

        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Enter Email"
            value={loginEmail}
            onChange={(e) => setLoginEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Enter Password"
            value={loginPassword}
            onChange={(e) => setLoginPassword(e.target.value)}
            required
          />

          <button type="submit">Login</button>
        </form>

        {loginMessage && <h3 className={loginMessage === "Login Successful!" ? "success" : "error"}>{loginMessage}</h3>}
      </div>

    </div>
  );
}

export default App;
