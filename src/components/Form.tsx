import React, {useState} from 'react';
import {
	Button,
	Input,
	FormControl,
	FormLabel,
	InputGroup,
	InputLeftAddon,
	VStack
} from '@chakra-ui/react'

interface Props {
	action: string;
}

export interface IValues {
	[key: string]: any;
}

export interface IErrors {
	[key: string]: string;
}

export interface State {
	values: IValues;
	errors?: IErrors;
	submitSuccess?: boolean;
}

type Editor = 'textbox' | 'multilinetextbox' | 'dropdown';

export interface IFieldProps {
	id: string;
	label?: string;
	editor?: Editor;
	options?: string[];
	value?: any;
}

const Form = ({ action }: Props) => {

	const errors: IErrors = {};

	const initialFormValue: IValues = {
		firstName: '',
		lastName: '',
		email: '',
		phone: '',
	};

	const initialState: State = {
		values: initialFormValue,
		errors,
		submitSuccess: false
	}

	const [state, setState] = useState(initialState)

	const handleSubmit = async (
		e: React.FormEvent<HTMLFormElement>
	): Promise<void> => {
		e.preventDefault();
		if (validateForm()) {
			const submitSuccess: boolean = await submitForm();
			setState({...state, submitSuccess });
		}
	}
	function validateForm() {
		return true;
	}

	async function submitForm(): Promise<boolean> {
		alert('A form is submitted:' + alert(JSON.stringify(state.values, null, 2)))
		return true;
	}

	function haveErrors(errors: IErrors) {
		let haveError = false;
		Object.keys(errors).map((key: string) => {
			if (errors[key].length > 0) {
				haveError = true;
			}
		});
		return haveError;
	}

	const handleInputChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
		const target = e.target;
		const value = target.type === 'checkbox' ? target.checked : target.value;
		const name = target.name;
		setState({...state, values: {...state.values, [name]: value}})
	}

	return (
		<form onSubmit={handleSubmit} action={action}>
			<VStack spacing={4}>
				<FormControl id="first-name" isRequired>
					<FormLabel>First name</FormLabel>
					<Input type='text' placeholder="First name" onChange={handleInputChange} name={'firstName'}/>
				</FormControl>
				<FormControl id="last-name" isRequired>
					<FormLabel>Last name</FormLabel>
					<Input type='text' placeholder="Last name" onChange={handleInputChange} name={'lastName'}/>
				</FormControl>
				<FormControl id="email" isRequired>
					<FormLabel>Email</FormLabel>
					<Input type='email' placeholder="Email" onChange={handleInputChange} name={'email'}/>
				</FormControl>
				<FormControl id="phone">
					<FormLabel>Phone Number</FormLabel>
					<InputGroup>
						<InputLeftAddon children="+234" />
						<Input type="tel" placeholder="Phone Number" onChange={handleInputChange} name={'phone'}/>
					</InputGroup>
				</FormControl>
				<Button type="submit" colorScheme="teal" size="sm">Create Todo</Button>
				{state.submitSuccess && (
					<div className="alert alert-info" role="alert">
						The form was successfully submitted!
					</div>
				)}
				{state.submitSuccess === false &&
				!haveErrors(errors) && (
					<div className="alert alert-danger" role="alert">
						Sorry, an unexpected error has occurred
					</div>
				)}
				{state.submitSuccess === false &&
				haveErrors(errors) && (
					<div className="alert alert-danger" role="alert">
						Sorry, the form is invalid. Please review, adjust and try again
					</div>
				)}
			</VStack>
		</form>
	);
}

export default Form;