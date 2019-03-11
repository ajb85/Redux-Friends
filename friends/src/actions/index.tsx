import axios from "axios";

export const LOGGING_IN: string = "LOGGING_IN";
export const LOGIN_SUCCESS: string = "LOGIN_SUCCESS";
// export const LOGIN_ERROR: string = "LOGIN_ERROR";
export const FETCHING_FRIENDS: string = "FETCHING_FRIENDS";
export const FETCHED_FRIENDS: string = "FETCHED_FRIENDS";
//export const UPDATING_FRIEND: string = "UPDATING_FRIEND";
export const ADDING_FRIEND: string = "ADDING_FRIEND";

interface credsLayout {
  username: string;
  password: string;
}

export const login = (creds: credsLayout) => (dispatch: any) => {
  dispatch({ type: LOGGING_IN });

  const url = "http://localhost:5000/api/login";
  axios
    .post(url, creds)
    .then(res => {
      localStorage.setItem("token", res.data.payload);
      dispatch({ type: LOGIN_SUCCESS, payload: res.data.payload });
    })
    .catch(err => {
      console.log("Fetch Error: ", err);
    });
};

export const getFriends = () => (dispatch: any) => {
  dispatch({ type: FETCHING_FRIENDS });
  const url = "http://localhost:5000/api/friends";
  axios
    .get(url, {
      headers: { Authorization: localStorage.getItem("token") }
    })
    .then(res => {
      dispatch({ type: FETCHED_FRIENDS, payload: res.data });
    })
    .catch(err => {
      console.log(err);
    });
};

interface friendLayout {
  name: string;
  age: number;
  email: string;
}

export const addFriend = (newFriend: friendLayout) => (dispatch: any) => {
  dispatch({ type: ADDING_FRIEND });
  const url = "http://localhost:5000/api/friends";
  const header = {
    headers: { Authorization: localStorage.getItem("token") }
  };
  axios
    .post(url, newFriend, header)
    .then(res => {
      dispatch({ type: FETCHED_FRIENDS, payload: res.data });
      getFriends();
    })
    .catch(err => console.log("New Friend Error: ", err));
};
