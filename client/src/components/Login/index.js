import React from "react";
import useAuth from "../../hooks/useAuth";

const Login = () => {
  const { selectors, actions } = useAuth();

  function onSubmit(event) {
    event.preventDefault();
    const data = Object.fromEntries(
      new FormData(event.currentTarget).entries()
    );
    actions.login(data);
  }

  return (
    <>
      { selectors.isConnected() && <span>Connect as { selectors.user() } </span>}
      { !selectors.isConnected() && <span>Not Connected</span>}
      <form onSubmit={onSubmit}>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          placeholder="email"
          name="email"
        ></input>
        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          placeholder="password"
          name="password"
        ></input>
        <button type="submit">Connexion</button>
      </form>
    </>
  );
}

export default Login;
