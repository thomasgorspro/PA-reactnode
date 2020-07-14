import jwtDecode from "jwt-decode";

export const initialState = {
  user: localStorage.getItem("token")
    ? (jwtDecode(localStorage.getItem("token")).user)
    : null,
  token: localStorage.getItem("token"),
  errors: {} 
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        ...action.payload,
      };
    case "REGISTER":
      return {
        ...state,
        ...action.payload
      } 
    case "LOGOUT": 
      return {
        ...initialState
      }
    default:
      return state;
  }
};
