import { ChakraProvider } from '@chakra-ui/react';
import NameCard from './NameCard';

function App() {
    return (
        <ChakraProvider>
            <NameCard />
        </ChakraProvider>
    );
}

export default App;
