export function userReducer(state = null, action) {
  switch (action.type) {
    case "SET_CURRENT_USER":
      return action.payload;

    case "AUTHENTICATING_USER":
      return {
        ...state,
        message: "Authenticating user",
      };
    default:
      return state;
  }
}
