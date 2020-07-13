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
    login: async (data) => {
      const { token, isMerchant, errors } = await login(data);
      let payload = { errors, isMerchant, token, user: null }; 
      if(token) {
        localStorage.setItem("token", token);
        const l = jwtDecode(token);
        const { login } = l;
        console.log(l,login, 'l');
        payload.user = login;
        payload.token = token;
        console.log(payload, 'payload');
      }
      dispatch({
        type: "LOGIN",
        payload
      });
    },
    logout: () => {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      dispatch({ type: "LOGOUT" });
    },
    register: async (data, entity) =>  {
      const res = await register(data, entity);
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
    user: () => {
      console.log(authState, authState?.user, 'sele');
      return authState?.user;
    },
    isMerchant: () => authState?.isMerchant,
    errors: () => authState?.errors
  };

  return { selectors, actions };
};

export default useAuth;
