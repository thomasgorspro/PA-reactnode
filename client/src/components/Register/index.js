import React, { useState } from 'react';
import useAuth from "../../hooks/useAuth";
import Form from "../Form";

const Register = () => {
		const { actions } = useAuth();
		const [currencies, setCurrencies] = useState(['euro', 'livre', 'yen', 'wan', 'dollar']);
        const [ errors, setErrors ] = useState();
		

    const onSubmit = event => {
		event.preventDefault();
        const data = Object.fromEntries(
			new FormData(event.currentTarget).entries()
        );
        actions.register(data);
	};

	const renderErrors = errors => (
		<li>
			{ Object.keys(errors).map(key => (
				<ul>{ key } { errors[key] }</ul>
			))}
		</li>
	);
	// const renderForm = () => {
	// 	return (
	// 		<Form 
	// 			validator={ data => ( true ) } 
	// 			onSubmit={ onSubmit }
	// 		/>
	// 	);
	// }

    return (
		<>
			{ errors }
			<form onSubmit={onSubmit} onError={err => console.log(err)}>
				<label htmlFor="compagnyName">Compagny Name</label>
				<input id="compagnyName" type="text" placeholder="Compagny Name" name="compagnyName"></input>

				<label htmlFor="email">Email</label>
				<input id="email" type="email" placeholder="email" name="email"></input>

				<label htmlFor="password">Password</label>
				<input id="password" type="password" placeholder="password" name="password"></input>

				<label htmlFor="passwordCheck">Type password again</label>
				<input id="password" type="password" placeholder="password" name="passwordCheck"></input>

				<label htmlFor="kbis">KBIS</label>
				<input id="kbis" type="text" placeholder="KBIS" name="KBIS"></input>

				<label htmlFor="phone">Phone number</label>
				<input id="phone" type="text" placeholder="Phone" name="phone"></input>

				<label htmlFor="confirmationURL">Confirmation URL</label>
				<input id="confirmationURL" type="text" placeholder="Confirmation URL" name="confirmationURL"></input>

				<label htmlFor="redirectionURL">Redirection URL</label>
				<input id="redirectionURL" type="text" placeholder="Redirection URL" name="redirectionURL"></input>

				<label htmlFor="currency">Currency: </label>
				<select id="currency" name="currency">
				{
					currencies.map(currency => (
						<option value={currency}>{currency}</option>
					))
				}
				</select>

				<button type="submit">Connexion</button>
			</form>
		</>
    );
};

export default Register;