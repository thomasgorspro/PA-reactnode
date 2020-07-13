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
		<span>{ key }: { errors[key] }</span>
		))
	);
    return (
		<>
			{!selectors.errors() && <Redirect to="/login" />}
			{ selectors.errors() && formatErrors(selectors.errors()) }
			<form onSubmit={handleSubmit(onSubmit)}>
				<label htmlFor="username">User Name</label>
				<input 
					id="username" 
					type="text" 
					placeholder="User Name" 
					name="username"
					ref={register({ required: { value: true, message: 'Please fill out this field '}})}
				></input>
				{ errors?.username?.message }

                <label htmlFor="firstname">First Name</label>
				<input 
					id="firstname" 
					type="text" 
					placeholder="First Name" 
					name="firstname"
					ref={register({ required: { value: true, message: 'Please fill out this field '}})}
				></input>
				{ errors?.firstname?.message }

                <label htmlFor="lastname">Last Name</label>
				<input 
					id="lastname" 
					type="text" 
					placeholder="Last Name" 
					name="lastname"
					ref={register({ required: { value: true, message: 'Please fill out this field '}})}
				></input>
				{ errors?.lastname?.message }

				<label htmlFor="password">Password</label>
				<input 
					id="password"
					type="password" 
					placeholder="password" 
					name="password"
					ref={register({ 
						required: { value: true, message: 'Please fill out this field '},
						minLength: {value: 3, message: 'The minlength is 3 '}
					})}
				></input>
				{ errors?.password?.message }
				<input type="submit" />
			</form>
		</>
    );
};