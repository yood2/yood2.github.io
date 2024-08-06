import { Box, VStack } from '@chakra-ui/react';
import NameCard from './NameCard';
import Socials from './Socials';
import BodyContent from './BodyContent';

const Home = () => {
    return (
        <Box w="60%" mx="auto" mt={8} mb={20}>
            <VStack spacing={20} align="stretch">
                <NameCard />
                <Socials />
                <BodyContent />
            </VStack>
        </Box>
    );
};

export default Home;
