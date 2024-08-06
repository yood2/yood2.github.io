import { Box, VStack } from '@chakra-ui/react';
import NameCard from './NameCard';
import Nav from './Navbar';

const Home = () => {
    return (
        <Box w="60vw" mx="auto" mt={8}>
            <VStack spacing={4} align="stretch">
                <NameCard />
                <Nav />
            </VStack>
        </Box>
    );
};

export default Home;
