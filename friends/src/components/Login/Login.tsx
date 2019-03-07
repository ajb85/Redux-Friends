import * as React from "react";
import { useState } from "react";
import "./loginStyles.css";

function Login() {
  // Hooks
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // "methods"
  const onAccountSubmit = (e: React.FormEvent) => {
    e.preventDefault;
  };

  return (
    <form className="loginForm" onSubmit={onAccountSubmit}>
      <div>
        <span>Username</span>
        <input
          type="text"
          onChange={e => setUsername(e.currentTarget.value)}
          value={username}
        />
      </div>
      <div>
        <span>Password</span>
        <input
          type="password"
          onChange={e => setPassword(e.currentTarget.value)}
          value={password}
        />
      </div>
      <button type="submit">Login</button>
    </form>
  );
}

export default Login;
