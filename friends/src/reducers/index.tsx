import { NEW_FRIEND } from "../actions";

// Creat an object template for state.  Wherever 'stateLayout' is listed,
// the previous variable will follow this defined pattern
interface stateLayout {
  friends: string[];
}

const initialState: stateLayout = {
  friends: []
};

export default (
  state: stateLayout = initialState,
  action: { type: string; payload: string }
  // action expects two inputs that are both strings: type and payload
) => {
  switch (action.type) {
    case NEW_FRIEND:
      return {
        ...state,
        friends: [...state.friends, action.payload]
      };
    default:
      return state;
  }
};
