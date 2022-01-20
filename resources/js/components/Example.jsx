import { ChakraProvider } from '@chakra-ui/react';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from '../Router/router'; 
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';

function Example() {
    return (
            <ChakraProvider>
                <BrowserRouter>
                    <Router />
                </BrowserRouter>
            </ChakraProvider>
    );
}

export default Example;

if (document.getElementById('app')) {
    ReactDOM.render(<Example />, document.getElementById('app'));
}
