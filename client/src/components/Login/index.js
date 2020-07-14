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
      <span>{key}: { errors[key]}</span>
    ))
  );

  return (
    <>
      {!selectors.errors() && <Redirect to="/" />}
      <div className="w-full flex items-center justify-center">
        <form onSubmit={handleSubmit(onSubmit)} className="bg-white sm:shadow-md rounded sm:px-8 px-4 pt-6 pb-8 mb-4">
          <h1 className="text-xl mb-6 text-center w-full font-bold text-purple-600">Sign In</h1>
          { selectors.errors() && formatErrors(selectors.errors()) }
          <div className="mb-6">
            <label htmlFor="login" className="block text-gray-700 text-sm font-bold mb-2">Username or Compagny Email</label>
            <input
                id="login"
                type="text"
                placeholder=""
                name="login"
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline transition duration-300"
                ref={register({required: {value: true, message: ' Please fill out this field '}})}
            ></input>
            { errors?.login?.message }
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">Password</label>
            <input
              id="password"
              type="password"
              placeholder=""
              name="password"
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline transition duration-300"
              ref={register({ required: { value: true, message: ' Please fill out this field ' } })}
            ></input>
            {errors?.password?.message}
          </div>
          <button type="submit" className="bg-green-400 w-full hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Sign In</button>
        </form>
      </div>
    </>
  );
}

export default Login;
