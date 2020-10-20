export const setCurrentUser = (userData) => ({
  type: "SET_CURRENT_USER",
  payload: userData,
});

// tell our app we're currently fetching
export const authenticatingUser = () => ({ type: "AUTHENTICATING_USER" });
