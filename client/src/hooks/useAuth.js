import { useContext } from "react";
import jwtDecode from "jwt-decode";
import RootContext from "../context/rootContext";
import { login, register } from "../context/actions/auth";

const useAuth = () => {
  const {
    state: { auth: authState },
    dispatch,
  } = useContext(RootContext);

  const actions = {
    login: (data) => {
      login(data).then((data) => {
        const user = jwtDecode(data.token);
        localStorage.setItem("token", data.token);
        dispatch({
          type: "LOGIN",
          payload: {
            user,
            token: data.token,
          },
        });
      });
    },
    logout: () => {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      dispatch({ type: "LOGOUT" });
    },
    register: async (data) =>  {
      const res = await register(data);
      console.log(res);
      dispatch({
        type: "REGISTER",
        payload: {
          errors: res?.errors
        }
      });
    },
  };

  const selectors = {
    isConnected: () => {
      return Boolean(authState.token);
    },
    user: () => authState.user,
    errors: () => { 
      console.log(authState);
      return authState?.errors
    }
  };

  return { selectors, actions };
};

export default useAuth;
