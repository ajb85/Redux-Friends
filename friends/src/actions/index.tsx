export const NEW_FRIEND: string = "NEW_FRIEND";
// Not necessary, but defining NEW_FRIEND as a string variable

export const newFriend = (friend: string) => {
  return {
    type: NEW_FRIEND,
    payload: friend
  };
};
