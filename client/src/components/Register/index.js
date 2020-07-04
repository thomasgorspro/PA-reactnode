import React, { useState } from 'react';
import useAuth from "../../hooks/useAuth";

const Register = () => {
		const { actions } = useAuth();
		const [currencies, setCurrencies] = useState(['euro', 'livre', 'yen', 'wan', 'dollar']);
		

    const onSubmit = event => {
        event.preventDefault();
        const data = Object.fromEntries(
					new FormData(event.currentTarget).entries()
        );
        actions.register(data);
		};

    return (
			<>
				<form onSubmit={onSubmit}>
					<label for="compagnyName">Compagny Name</label>
					<input id="compagnyName" type="text" placeholder="Compagny Name" name="compagnyName"></input>

					<label for="email">Email</label>
					<input id="email" type="email" placeholder="email" name="email"></input>

					<label for="password">Password</label>
					<input id="password" type="password" placeholder="password" name="password"></input>

					<label for="passwordCheck">Type password again</label>
					<input id="password" type="password" placeholder="password" name="passwordCheck"></input>

					<label for="kbis">KBIS</label>
					<input id="kbis" type="text" placeholder="KBIS" name="kbis"></input>

					<label for="phone">Phone number</label>
					<input id="phone" type="text" placeholder="Phone" name="phone"></input>

					<label for="confirmationURL">Confirmation URL</label>
					<input id="confirmationURL" type="text" placeholder="Confirmation URL" name="confirmationURL"></input>

					<label for="redirectionURL">Redirection URL</label>
					<input id="redirectionURL" type="text" placeholder="Redirection URL" name="redirectionURL"></input>

					<label for="currency">Currency: </label>
					<select id="currency">
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