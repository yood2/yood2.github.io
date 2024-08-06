import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import { ChakraProvider } from '@chakra-ui/react';
import Home from './Home';
import Projects from './Projects';

const App = () => {
    return (
        <>
            <ChakraProvider>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/projects" element={<Projects />} />
                    </Routes>
                </BrowserRouter>
            </ChakraProvider>
        </>
    );
};

const container = document.getElementById('root');
const root = createRoot(container);
root.render(React.createElement(App));
