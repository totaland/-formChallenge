import { ChakraProvider, Center } from '@chakra-ui/react';
import React, {createContext, ReactNode, useState} from 'react';
import './App.css';
import DisplayResult from '../components/display/DisplayResult';
import Form from '../components/form/Form';
import Form2 from '../components/form/Form2';
import {IErrors, IValues, State} from '../components/form/IForm';
import theme from '../theme';

export const appContext = createContext({});

interface IContext {
  children: ReactNode,
  context: any
}

export const AppProvider = ({context, children}: IContext) => (
  <appContext.Provider value={context}>{children}</appContext.Provider>
)

function App() {
  const action = 'localhost:3001'
  const [form, setForm] = useState('form1')
  const [progress, setProgress] = useState(50)
  const errors: IErrors = {};
  const initialFormValue: IValues = {
    firstName: '',
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
  };
  const initialState: State = {
    values: initialFormValue,
    errors,
    submitSuccess: false
  }
  const [state, setState] = useState(initialState)
  return (
    <ChakraProvider resetCSS theme={theme}>
      <AppProvider context={{form, setForm, progress, setProgress, state, setState}}>
        <div className="App">
          <Center h={'100vh'}>
            {form === 'form1' ? <Form action={action} /> :
            form === 'form2' ? <Form2 action={action} /> :
            <DisplayResult />}
          </Center>
        </div>
      </AppProvider>
    </ChakraProvider>
  );
}

export default App;
