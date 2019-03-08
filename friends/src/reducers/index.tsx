import {
  LOGGING_IN,
  LOGIN_SUCCESS,
  FETCHING_FRIENDS,
  FETCHED_FRIENDS
} from "../actions";

// Creat an object template for state.  Wherever 'stateLayout' is listed,
// the previous variable will follow this defined pattern
interface friendsObj {
  id: number;
  name: string;
  age: number;
  email: string;
}

interface stateLayout {
  deletingFriend: boolean;
  fetchingFriends: boolean;
  friends: friendsObj[];
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
  action: { type: string; payload: any }
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
    case FETCHING_FRIENDS:
      return { ...state, fetchingFriends: true };
    case FETCHED_FRIENDS:
      return { ...state, fetchingFriends: false, friends: action.payload };
    default:
      return state;
  }
};
