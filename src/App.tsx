import { ChakraProvider, Center } from '@chakra-ui/react';
import React from 'react';
import './App.css';
import Form from './components/Form';
import theme from './theme';

function App() {
  const action = 'localhost:3001'
  return (
    <ChakraProvider resetCSS theme={theme}>
    <div className="App">
       <Center h={'100vh'}>
         <Form action={action}/>
       </Center>
    </div>
    </ChakraProvider>
  );
}

export default App;
