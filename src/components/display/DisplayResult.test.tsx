import {render, screen} from '@testing-library/react';
import React from 'react';
import {AppProvider} from '../../app/App';
import DisplayResult from './DisplayResult';

test('render value', () => {
	const wrapper = ({children}: any) => <AppProvider context={{
		state: {
			values:{
				firstName: 'James',
				lastName: 'Nguyen',
				email: '111@gmail.com',
				isValidEmail: true,
				phone: '0434538803',
				isValidPhoneNumber: true,
				streetNumber: 56,
				isValidStreetNumber: true,
				streetName: 'Colton',
				streetType: 'cl',
				suburb: 'Lutwych',
				postCode: 4030,
				isValidPostCode: true
			},
			errors: {},
			submitSuccess: false
		},
	}}>{children}</AppProvider>
	render(<DisplayResult />, {wrapper});
	const email = screen.getByText(/111@gmail.com/i)
	expect(email).toHaveTextContent('111@gmail.com')
})