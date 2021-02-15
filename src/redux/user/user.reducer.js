const INITIAL_STATE = {
  currentUser: null,
  showHeader: false,
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "SET_CURRENT_USER":
      return {
        ...state,
        currentUser: action.payload,
        showHeader: action.payload,
      };
    default:
      return state;
  }
};
export default userReducer;
