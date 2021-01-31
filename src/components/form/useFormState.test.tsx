import {renderHook} from '@testing-library/react-hooks';
import {AppProvider} from '../../app/App';
import useFormState from './useFormState'

test('render initial value', () => {
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
	const { result } = renderHook(() => useFormState(), {wrapper})
	expect(result.current.state.values.firstName).toBe('James');
})