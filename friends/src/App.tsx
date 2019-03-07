import * as React from "react";
import {Route} from "react-router-dom";
import Login from "./components/Login";
import FriendsList from "./components/FriendsList";
import PrivateRoute from "./components/PrivateRoute";

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <Route path="/login" component={Login} />
        <PrivateRoute exact path="/friends" component{FriendsList} />
      </div>
    );
  }
}

export default App;
