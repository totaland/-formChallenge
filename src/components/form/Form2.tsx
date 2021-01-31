import {
	Button,
	Input,
	FormControl,
	FormLabel,
	Select,
	VStack, Progress, FormErrorMessage
} from '@chakra-ui/react'
import {IFormProps} from './IForm';
import useFormState from './useFormState';

const Form2 = ({ action }: IFormProps) => {

	const {handleSubmit, handleInputChange, progress, state} = useFormState()

	return (
		<form onSubmit={handleSubmit} action={action}>
			<VStack spacing={4} minW={'270px'}>
				<FormControl id="progress-bar">
					<FormLabel>Progress</FormLabel>
					<Progress value={progress} colorScheme={'teal'} />
				</FormControl>
				<FormControl id="streetNumber" isRequired isInvalid={state.values.isValidStreetNumber}>
					<FormLabel>Street Number</FormLabel>
					<Input type='number' placeholder="Street Number" onChange={handleInputChange} name={'streetNumber'} isInvalid={state.isValidStreetNumber}/>
					<FormErrorMessage>{'Not a valid street number. Please try again.'}</FormErrorMessage>
				</FormControl>
				<FormControl id="streetName" isRequired>
					<FormLabel>Street Name</FormLabel>
					<Input type='text' placeholder="Street Name" onChange={handleInputChange} name={'streetName'}/>
				</FormControl>
				<FormControl id="streetType" isRequired>
					<FormLabel>Street Type</FormLabel>
					<Select placeholder="Select option" onChange={handleInputChange} name={'streetType'}>
						<option value="cl">Cl</option>
						<option value="ct">Ct</option>
						<option value="st">St</option>
						<option value="pl">Pl</option>
						<option value="ave">Ave</option>
					</Select>
				</FormControl>
				<FormControl id="suburb">
					<FormLabel>Suburb</FormLabel>
					<Input type="text" placeholder="Suburb" onChange={handleInputChange} name={'suburb'}/>
				</FormControl>
				<FormControl id="postCode" isInvalid={state.values.isValidPostCode}>
					<FormLabel>Post Code</FormLabel>
					<Input type="number" placeholder="Post Code" onChange={handleInputChange} name={'postCode'} isInvalid={state.isValidPostCode}/>
					<FormErrorMessage>{'Not a valid post code. Please try again.'}</FormErrorMessage>
				</FormControl>
				<Button type="submit" colorScheme="teal" size="sm">Submit</Button>
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

export default Form2;