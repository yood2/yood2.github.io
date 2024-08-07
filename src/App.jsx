import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import { ChakraProvider } from '@chakra-ui/react';
import Home from './pages/Home';
import Hermes from './pages/Hermes';
import Coffee from './pages/Coffee';

const App = () => {
    return (
        <>
            <ChakraProvider>
                <HashRouter>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/hermes" element={<Hermes />} />
                        <Route path="/coffee" element={<Coffee />} />
                    </Routes>
                </HashRouter>
            </ChakraProvider>
        </>
    );
};

const container = document.getElementById('root');
const root = createRoot(container);
root.render(React.createElement(App));
