import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import useAuth from "../../hooks/useAuth";
import { Redirect } from 'react-router-dom';
const currencies = ['euro', 'livre', 'yen', 'wan', 'dollar']

const Register = () => {
	const { actions, selectors } = useAuth();
	const { handleSubmit, register, errors } = useForm();
		
    const onSubmit = async (data) => {
		await actions.register(data)
	};

    return (
		<>
			{!selectors.errors() && <Redirect to="/login" />}
			{(Object.keys(selectors.errors()).length) && <span> SOMETHING WENT WRONG. TRY AGAIN LATER </span>}
			<form onSubmit={handleSubmit(onSubmit)}>
				<label htmlFor="compagnyName">Compagny Name</label>
				<input 
					id="compagnyName" 
					type="text" 
					placeholder="Compagny Name" 
					name="compagnyName"
					ref={register({ required: { value: true, message: 'Please fill out this field '}})}
				></input>
				{ errors?.compagnyName?.message }
				<label htmlFor="email">Email</label>
				<input 
					id="email" 
					type="email" 
					placeholder="email" 
					name="email"
					ref={register({ required: { value: true, message: 'Please fill out this field '}})}
				></input>
				{ errors?.email?.message }

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

				<label htmlFor="kbis">KBIS</label>
				<input 
					id="kbis" 
					type="text" 
					placeholder="KBIS" 
					name="KBIS" 
					ref={register({ 
						required: { value: true, message: 'Please fill out this field '},
						minLength: {value: 3, message: 'The minlength is 3 '},
						maxLength: {value: 10, message: 'The maxlength is 10 '}
					})}
				></input>
				{ errors?.kbis?.message }

				<label htmlFor="phone">Phone number</label>
				<input 
					id="phone" 
					type="text"
					placeholder="Phone" 
					name="phone" 
					ref={register}
				></input>
					 {/* ref={register({
					 	 pattern: {
					 		value: /d+/, 
					 		message: "Please enter a valid phone number"
		      console.log(authState);
			 		} 
						})} */}
				{ errors?.phone?.message }

				<label htmlFor="confirmationURL">Confirmation URL</label>
				<input 
					id="confirmationURL" 
					type="text" 
					placeholder="Confirmation URL" 
					name="confirmationURL" 
					ref={register({ required: { value: true, message: 'Please fill out this field '}})}
				></input>
				{ errors?.confirmationURL?.message }

				<label htmlFor="redirectionURL">Redirection URL</label>
				<input 
					id="redirectionURL" 
					type="text" 
					placeholder="Redirection URL" 
					name="redirectionURL" 
					ref={register({ required: { value: true, message: 'Please fill out this field '}})}
				></input>
				{ errors?.redirectionURL?.message }

				<label htmlFor="currency">Currency: </label>
				<select id="currency" name="currency" ref={register({ required: {value: true, message: 'Please fill out this field '} })}>
				{
					currencies.map(currency => (
						<option value={currency}>{currency}</option>
					))
				}
				</select>
				{ errors?.currency?.message }
				<input type="submit" />
			</form>
		</>
    );
};

export default Register;