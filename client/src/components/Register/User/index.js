import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from "../../../hooks/useAuth";
import { Redirect } from 'react-router-dom';
const currencies = ['euro', 'livre', 'yen', 'wan', 'dollar']

export const Register = () => {
	const { actions, selectors } = useAuth();
	const { handleSubmit, register, errors } = useForm();

	const onSubmit = async (data) => {
		await actions.register(data, 'user');
	};

	const formatErrors = errors => (
		Object.keys(errors).map(key => (
			<span>{key}: { errors[key]}</span>
		))
	);
	return (
		<>
			{!selectors.errors() && <Redirect to="/login" />}
			
			<div className="w-full flex items-center justify-center">
				<form onSubmit={handleSubmit(onSubmit)} className="sm:w-auto w-full sm:bg-white sm:shadow-md rounded sm:px-8 px-4 pt-6 pb-8 mb-4">
				<h1 className="text-2xl mb-6 text-center w-full font-bold text-purple-600">Register as User</h1>
				{selectors.errors() && formatErrors(selectors.errors())}
					<div className="mb-6">
						<label htmlFor="username" className="block text-gray-700 text-sm font-bold mb-2">User Name</label>
						<input
							id="username"
							type="text"
							placeholder=""
							name="username"
							className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline transition duration-300"
							ref={register({ required: { value: true, message: 'Please fill out this field ' } })}
						></input>
						{errors?.username?.message}
					</div>
					<div className="mb-6">
						<label htmlFor="firstname" className="block text-gray-700 text-sm font-bold mb-2">First Name</label>
						<input
							id="firstname"
							type="text"
							placeholder=""
							name="firstname"
							className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline transition duration-300"
							ref={register({ required: { value: true, message: 'Please fill out this field ' } })}
						></input>
						{errors?.firstname?.message}
					</div>
					<div className="mb-6">
						<label htmlFor="lastname" className="block text-gray-700 text-sm font-bold mb-2">Last Name</label>
						<input
							id="lastname"
							type="text"
							placeholder=""
							name="lastname"
							className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline transition duration-300"
							ref={register({ required: { value: true, message: 'Please fill out this field ' } })}
						></input>
						{errors?.lastname?.message}
					</div>
					<div className="mb-6">
						<label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">Password</label>
						<input
							id="password"
							type="password"
							placeholder=""
							name="password"
							className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline transition duration-300"
							ref={register({
								required: { value: true, message: 'Please fill out this field ' },
								minLength: { value: 3, message: 'The minlength is 3 ' }
							})}
						></input>
						{errors?.password?.message}
					</div>
					<input type="submit" className="w-full bg-green-400 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" value="Sign Up" />
				</form>
			</div>
		</>
	);
};