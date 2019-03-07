import * as React from "react";
import { useState } from "react";
import { connect } from "react-redux";
import "./loginStyles.css";
import { login } from "../../actions";

interface credsLayout {
  username: string;
  password: string;
}
interface Props {
  login(creds: credsLayout): any;
}

function Login(props: Props) {
  // Hooks
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // "methods"
  const onAccountSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    props.login({ username, password });
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

export default connect(
  () => ({}),
  { login }
)(Login);
