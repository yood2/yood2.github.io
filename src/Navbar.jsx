import { HStack, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <HStack spacing={10} justify="center" mt={4}>
            <Link as={Link} to="/">
                <Text
                    _hover={{
                        background: 'black',
                        color: 'white',
                        transition:
                            'color 0.5s ease, background-color 0.5s ease', // Smooth transition
                    }}
                    padding="8px"
                    borderRadius="md"
                >
                    👋 About Me
                </Text>
            </Link>
            <Link to="/projects">
                <Text
                    _hover={{
                        background: 'black',
                        color: 'white',
                        transition:
                            'color 0.5s ease, background-color 0.5s ease', // Smooth transition
                    }}
                    padding="8px"
                    borderRadius="md"
                >
                    💻 Projects
                </Text>
            </Link>
            <Link to="https://drive.google.com/file/d/1gl8TGBnDZVk-fzRndbRh19X0GUipbZCM/view?usp=sharing">
                <Text
                    _hover={{
                        background: 'black',
                        color: 'white',
                        transition:
                            'color 0.5s ease, background-color 0.5s ease', // Smooth transition
                    }}
                    padding="8px"
                    borderRadius="md"
                >
                    📄 Resume
                </Text>
            </Link>
        </HStack>
    );
};

export default Navbar;
