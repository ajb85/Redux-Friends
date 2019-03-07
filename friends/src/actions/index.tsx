import axios from "axios";

export const LOGGING_IN: string = "LOGGING_IN";
export const LOGIN_SUCCESS: string = "LOGIN_SUCCESS";
// Not necessary, but defining NEW_FRIEND as a string variable

export const login = (dispatch: any) => {
  dispatch({ type: LOGGING_IN });

  const url = "http://localhost:5000/api/login";
  axios
    .get(url)
    .then(res => {
      dispatch({ type: LOGIN_SUCCESS, payload: res.data.payload });
    })
    .catch(err => {
      console.log("Fetch Error: ", err);
    });
};
