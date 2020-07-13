import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from "../../../hooks/useAuth";
import { Redirect } from 'react-router-dom';
const currencies = ['Euro (€)', 'Pound (£)', 'Yen (¥)', 'Won (₩)', 'Dollar ($)']

export const Register = () => {
	const { actions, selectors } = useAuth();
	const { handleSubmit, register, errors } = useForm();
		
    const onSubmit = async (data) => {
		await actions.register(data, 'merchant');
	};

	const formatErrors = errors => (
		Object.keys(errors).map(key => (
			<span>{key}: { errors[key]}</span>
		))
	);

	return (
		<>
			{!selectors.errors() && <Redirect to="/login" />}
			{ selectors.errors() && formatErrors(selectors.errors()) }
			<div className="w-full flex items-center justify-center">
				<form onSubmit={handleSubmit(onSubmit)} className="sm:w-auto w-full sm:bg-white sm:shadow-md rounded sm:px-8 px-4 pt-6 pb-8 mb-4">
					<h1 class="text-2xl mb-6 text-center w-full font-bold text-purple-600">Register as Merchant</h1>
					<div className="sm:flex items-center justify-between">
						<div>
							<div className="mb-6">
								<label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email</label>
								<input
									id="email"
									type="email"
									placeholder=""
									name="email"
									className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline transition duration-300"
									ref={register({ required: { value: true, message: 'Please fill out this field ' } })}
								></input>
								{errors?.email?.message}
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
							<div className="mb-6">
								<label htmlFor="currency" className="block text-gray-700 text-sm font-bold mb-2">Currency</label>
								<select
									id="currency"
									name="currency"
									ref={register({ required: { value: true, message: 'Please fill out this field ' } })}
									className="border rounded w-full py-2 px-3 bg-white text-gray-700 focus:outline-none focus:shadow-outline transition duration-300"
								>
									{
										currencies.map(currency => (
											<option value={currency}>{currency}</option>
										))
									}
								</select>
								{errors?.currency?.message}
							</div>
						</div>
						<div className="sm:ml-6">
							<div className="mb-6">
								<label htmlFor="compagnyName" className="block text-gray-700 text-sm font-bold mb-2">Compagny Name</label>
								<input
									id="compagnyName"
									type="text"
									placeholder=""
									name="compagnyName"
									className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline transition duration-300"
									ref={register({ required: { value: true, message: 'Please fill out this field ' } })}
								></input>
								{errors?.compagnyName?.message}
							</div>

							<div className="mb-6">
								<label htmlFor="kbis" className="block text-gray-700 text-sm font-bold mb-2">KBIS</label>
								<input
									id="kbis"
									type="text"
									placeholder=""
									name="KBIS"
									className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline transition duration-300"
									ref={register({
										required: { value: true, message: 'Please fill out this field ' },
										minLength: { value: 3, message: 'The minlength is 3 ' },
										maxLength: { value: 10, message: 'The maxlength is 10 ' }
									})}
								></input>
								{errors?.kbis?.message}
							</div>

							<div className="mb-6">
								<label htmlFor="phone" className="block text-gray-700 text-sm font-bold mb-2">Phone number</label>
								<input
									id="phone"
									type="text"
									placeholder=""
									name="phone"
									className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline transition duration-300"
									ref={register}
								></input>
								{/* ref={register({
								pattern: {
									value: /d+/, 
									message: "Please enter a valid phone number"
					console.log(authState);
							} 
								})} */}
								{errors?.phone?.message}
							</div>
						</div>
					</div>

					<div className="mb-6">
						<label htmlFor="confirmationURL" className="block text-gray-700 text-sm font-bold mb-2">Confirmation URL</label>
						<input
							id="confirmationURL"
							type="text"
							placeholder=""
							name="confirmationURL"
							className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline transition duration-300"
							ref={register({ required: { value: true, message: 'Please fill out this field ' } })}
						></input>
						{errors?.confirmationURL?.message}
					</div>

					<div className="mb-6">
						<label htmlFor="redirectionURL" className="block text-gray-700 text-sm font-bold mb-2">Redirection URL</label>
						<input
							id="redirectionURL"
							type="text"
							placeholder=""
							name="redirectionURL"
							className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline transition duration-300"
							ref={register({ required: { value: true, message: 'Please fill out this field ' } })}
						></input>
						{errors?.redirectionURL?.message}
					</div>

					<input type="submit" className="w-full bg-green-400 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" value="Sign Up" />
				</form>
			</div>
		</>
	);
};
