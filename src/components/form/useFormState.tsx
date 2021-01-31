import {ChangeEventHandler, useContext} from 'react';
import {appContext} from '../../app/App';
import {IErrors} from './IForm';

function useFormState() {

	// eslint-disable-next-line @typescript-eslint/ban-ts-comment
	// @ts-ignore
	const {form, setForm, progress, setProgress, state, setState} = useContext(appContext)

	const handleSubmit = async (): Promise<void> => {
		if (validateForm()) {
			const submitSuccess: boolean = await submitForm();
			setState({...state, submitSuccess });
		}
		if (form === 'form1' && validateForm()) {
			setForm('form2');
			setProgress(100)
		} else if (form === 'form2' && validateForm()) {
			setForm('display')
		}
	}

	function isNumber(value: string) {
		return /^\d+$/.test(value)
	}

	function isValidPhoneNumber(value: string) {
		return /^[\\+]?[(]?[0-9]{3}[)]?[-\s\\.]?[0-9]{3}[-\s\\.]?[0-9]{4,6}$/im.test(value)
	}

	function isValidEmail(value: string) {
		return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(value)
	}

	function isValidPostCode(value: string, min=800, max=7999) {
		return Number(value)>= min && Number(value) <= max
	}

	function validateForm() {
		if(form === 'form1') {
			if(!isValidEmail(state.values.email)) {
				setState({...state, values: {...state.values, isValidEmail: true}})
				return false
			}
			if(!isValidPhoneNumber(state.values.phone)) {
				setState({...state, values: {...state.values, isValidPhoneNumber: true}})
				return false
			}
			return true
		} else if(form === 'form2') {
			if(!isValidPostCode(state.values.postCode)) {
				setState({...state, values: {...state.values, isValidPostCode: true}})
				return false
			}
			if(!isNumber(state.values.streetNumber)) {
				setState({...state, values: {...state.values, isValidStreetNumber: true}})
				return false
			}
			return true
		}
	}

	async function submitForm(): Promise<boolean> {
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

	const handleInputChange: ChangeEventHandler<HTMLInputElement | HTMLSelectElement> = (e) => {
		const target = e.target;
		const value = target.value;
		const name = target.name;
		setState({...state, values: {...state.values, [name]: value}})
	}

	return {
		handleInputChange, haveErrors, handleSubmit, progress, state
	};
}

export default useFormState;