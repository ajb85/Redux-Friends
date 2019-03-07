import axios from "axios";

export const LOGGING_IN: string = "LOGGING_IN";
export const LOGIN_SUCCESS: string = "LOGIN_SUCCESS";
// export const LOGIN_ERROR: string = "LOGIN_ERROR";
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
