import * as React from "react";
import { useState } from "react";
import { connect } from "react-redux";
import "./loginStyles.css";
import { login } from "../../actions";
import Loader from "react-loader-spinner";

interface credsLayout {
  username: string;
  password: string;
}
interface Props {
  loggingIn: boolean;
  login(creds: credsLayout): any;
  history: any;
}

function Login(props: Props) {
  // Hooks
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // "methods"
  const onAccountSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    props.login({ username, password });
    props.history.push("/");
  };

  let loader: any = "Login";
  if (props.loggingIn) {
    loader = <Loader type="Rings" color="black" height={15} width={15} />;
  }

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
      <button type="submit">{loader}</button>
    </form>
  );
}

interface State {
  loggingIn: boolean;
}
const mapStateToProps = (state: State) => ({ loggingIn: state.loggingIn });

export default connect(
  mapStateToProps,
  { login }
)(Login);
