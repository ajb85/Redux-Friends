import { LOGGING_IN, LOGIN_SUCCESS } from "../actions";

// Creat an object template for state.  Wherever 'stateLayout' is listed,
// the previous variable will follow this defined pattern
interface stateLayout {
  deletingFriend: boolean;
  fetchingFriends: boolean;
  friends: string[];
  loggingIn: boolean;
  savingFriends: boolean;
  updatingFriend: boolean;
  error: null;
}

const initialState: stateLayout = {
  deletingFriend: false,
  fetchingFriends: false,
  friends: [],
  loggingIn: false,
  savingFriends: false,
  updatingFriend: false,
  error: null
};

export default (
  state: stateLayout = initialState,
  action: { type: string; payload: string }
  // action expects two inputs that are both strings: type and payload
) => {
  switch (action.type) {
    case LOGGING_IN:
      return {
        ...state,
        loggingIn: true
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        loggingIn: false
      };
    default:
      return state;
  }
};
