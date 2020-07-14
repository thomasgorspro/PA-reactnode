import { useContext } from "react";
import jwtDecode from "jwt-decode";
import RootContext from "../context/rootContext";
import { login, register, generateCredentials } from "../context/actions/auth";

const useAuth = () => {
  const {
    state: { auth: authState },
    dispatch,
  } = useContext(RootContext);

  const actions = {
    login: async (data) => {
      const { token, errors } = await login(data);
      let payload = { errors, token, user: null }; 
      if(token) {
        localStorage.setItem("token", token);
        const decodedPayload = jwtDecode(token);
        payload.user = decodedPayload.user;
        payload.token = token;
      }
      dispatch({
        type: "LOGIN",
        payload
      });
    },
    logout: () => {
      localStorage.removeItem("token");
      dispatch({ type: "LOGOUT" });
    },
    register: async (data, entity) =>  {
      const res = await register(data, entity);
      dispatch({
        type: "REGISTER",
        payload: {
          errors: res?.errors
        }
      });
    },
    generateCredentials: async (id, token) => {
      const { token: newToken } = await generateCredentials(id, token);
      let payload = { token: newToken, user: selectors.user() }; 
      if (newToken) {
        localStorage.setItem("token", newToken);
        const decodedPayload = jwtDecode(newToken);
        payload.user = decodedPayload.user;
      }
      dispatch({
        type: "GENCRED",
        payload
      });
    }
  };

  const selectors = {
    isConnected: () => {
      return Boolean(authState.token);
    },
    user: () => authState?.user,
    errors: () => authState?.errors
  };

  return { selectors, actions };
};

export default useAuth;
