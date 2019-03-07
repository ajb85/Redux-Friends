export const NEW_FRIEND: string = "NEW_FRIEND";

export const newFriend = (friend: string) => {
  return {
    type: NEW_FRIEND,
    payload: friend
  };
};
