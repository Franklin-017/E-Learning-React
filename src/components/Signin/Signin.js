import React, { useState } from 'react';

const Signin = () => {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [confirmPass, setConfirmPass] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(name, email, password, confirmPass);
	};

	return (
		<form onSubmit={handleSubmit}>
			<input
				type='text'
				placeholder='Name'
				value={name}
				onChange={(e) => setName(e.target.value)}
			/>
			<input
				type='email'
				placeholder='Email-ID'
				value={email}
				onChange={(e) => setEmail(e.target.value)}
			/>
			<input
				type='password'
				placeholder='Password'
				value={password}
				onChange={(e) => setPassword(e.target.value)}
			/>
			<input
				type='password'
				placeholder='Name'
				value={confirmPass}
				onChange={(e) => setConfirmPass(e.target.value)}
			/>
			<input type='submit' value='Register' />
		</form>
	);
};

export default Signin;
