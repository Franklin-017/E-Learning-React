import React, { useState } from 'react';

const Singup = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(email, password);
	};

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<input
					type='email'
					placeholder='EmailID'
					value={email}
					onChange={(e) => setEmail(e.target.value)}
				/>
				<input
					type='password'
					placeholder='Password'
					value={password}
					onChange={(e) => setPassword(e.target.value)}
				/>
				<input type='submit' value='Register' />
			</form>
		</div>
	);
};

export default Singup;
