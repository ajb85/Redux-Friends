import * as React from "react";
import { Route } from "react-router-dom";
// Components
import Login from "./components/Login";
import FriendsList from "./components/FriendsList";
import VerifyLogin from "./components/PrivateRoute";

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <Route path="/login" component={Login} />
        <VerifyLogin exact path="/" component={FriendsList} />
      </div>
    );
  }
}

export default App;
