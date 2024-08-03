import React from 'react';
import { createRoot } from 'react-dom/client';

import { ChakraProvider } from '@chakra-ui/react';
import NameCard from './NameCard';

const App = () => {
    return (
        <ChakraProvider>
            <NameCard />
        </ChakraProvider>
    );
};

const container = document.getElementById('root');
const root = createRoot(container);
root.render(React.createElement(App));
