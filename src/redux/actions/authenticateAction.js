function login(searchQuery) {
    return (dispatch, getState) => {
      const { id, password } = getState();
      dispatch({ type: "LOGIN_SUCCESS", payload: { id, password } });
    };
  }
  
  export const authenticateAction = { login };
  