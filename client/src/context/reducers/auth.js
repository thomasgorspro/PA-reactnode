import jwt_decode from "jwt-decode";

export const initialState = {
  user: localStorage.getItem("token")
    ? jwt_decode(localStorage.getItem("token"))
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
