import {
	Button,
	Input,
	FormControl,
	FormLabel,
	InputGroup,
	InputLeftAddon,
	VStack,
	Progress,
	FormErrorMessage
} from '@chakra-ui/react'
import { IFormProps } from './IForm';
import useFormState from './useFormState';

const Form = ({ action }: IFormProps) => {

	const {handleSubmit, handleInputChange, progress, state} = useFormState()

	return (
		<form onSubmit={handleSubmit} action={action} role={'form'}>
			<VStack spacing={4} minW={'270px'}>
				<FormControl id="progress-bar">
					<FormLabel>Progress</FormLabel>
					<Progress value={progress} colorScheme={'teal'} />
				</FormControl>
				<FormControl id="first-name" isRequired>
					<FormLabel>First name</FormLabel>
					<Input type='text' placeholder="First name" onChange={handleInputChange} name={'firstName'}/>
				</FormControl>
				<FormControl id="last-name" isRequired>
					<FormLabel>Last name</FormLabel>
					<Input type='text' placeholder="Last name" onChange={handleInputChange} name={'lastName'}/>
				</FormControl>
				<FormControl id="email" isRequired isInvalid={state.values.isValidEmail}>
					<FormLabel>Email</FormLabel>
					<Input type='email' placeholder="Email" onChange={handleInputChange} name={'email'} />
					<FormErrorMessage>{'Not a valid email address. Please try again.'}</FormErrorMessage>
				</FormControl>
				<FormControl id="phone" isInvalid={state.values.isValidPhoneNumber}>
					<FormLabel>Phone Number</FormLabel>
					<InputGroup>
						<InputLeftAddon children="+61" />
						<Input type="tel" placeholder="Phone Number" onChange={handleInputChange} name={'phone'} />
					</InputGroup>
					<FormErrorMessage>{'Not a valid phone number. Please try again.'}</FormErrorMessage>
				</FormControl>
				<Button type="submit" colorScheme="teal" size="sm">Next</Button>
				{/*{state.submitSuccess && (
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
				)}*/}
			</VStack>
		</form>
	);
}

export default Form;