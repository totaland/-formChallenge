import {renderHook} from '@testing-library/react-hooks';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { render, screen } from '@testing-library/react';
import App, {AppProvider} from '../../app/App';
import Form from './Form';
import Form2 from './Form2';
import useFormState from './useFormState';

const wrapper = ({children}: any) => <AppProvider context={{
	state: {
		values:{
			firstName: 'James',
			lastName: '',
			email: '',
			isValidEmail: false,
			phone: null,
			isValidPhoneNumber: false,
			streetNumber: null,
			isValidStreetNumber: false,
			streetName: '',
			streetType: '',
			suburb: '',
			postCode: null,
			isValidPostCode: false
		},
		errors: {},
		submitSuccess: false
	},
}}>{children}</AppProvider>

test('renders the form with Phone Number', () => {
	render(<Form action={'localhost:3002'} />, {wrapper});
	const nextButton = screen.getByText(/Next/i);
	expect(nextButton).toBeInTheDocument();
	expect(screen.getByRole('form')).toHaveFormValues({
		firstName: '',
		lastName: '',
		phone: '',
		email: ''
	})
	userEvent.click(nextButton)
});

test('render Form', () => {
	render(<Form2 action={'localhost:3001'} />, {wrapper})
	const nextButton = screen.getByText(/Submit/i);
	expect(nextButton).toBeInTheDocument()
});