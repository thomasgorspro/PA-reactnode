import React from "react";
import useAuth from "../../hooks/useAuth";
import { useForm } from 'react-hook-form';
import { Redirect } from 'react-router-dom';

const Login = () => {
  const { selectors, actions } = useAuth();
  const { handleSubmit, errors, register } = useForm();

  const onSubmit = async (data) => {
    await actions.login(data);
  }

	const formatErrors = errors => (
		Object.keys(errors).map(key => (
		<span>{ key }: { errors[key] }</span>
		))
	);

  return (
    <>
        {!selectors.errors() && <Redirect to="/" />}
        { selectors.errors() && formatErrors(selectors.errors()) }
        <form onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="login">Username or Compagny Email</label>
            <input
                id="login"
                type="text"
                placeholder="Username or compagny Email"
                name="login"
                ref={register({required: {value: true, message: ' Please fill out this field '}})}
            ></input>
            { errors?.login?.message }
            
            <label htmlFor="password">Password</label>
                <input
                id="password"
                type="password"
                placeholder="password"
                name="password"
                ref={register({required: {value: true, message: ' Please fill out this field '}})}
            ></input>
            { errors?.password?.message }
            <button type="submit">Connexion</button>
        </form>
    </>
  );
}

export default Login;
