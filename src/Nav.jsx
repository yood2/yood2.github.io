import { Center, Grid, GridItem, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <Grid templateColumns="repeat(3, 10fr)" gap={10}>
            <GridItem alignContent="center">
                <Link to="https://drive.google.com/file/d/1gl8TGBnDZVk-fzRndbRh19X0GUipbZCM/view?usp=sharing">
                    <Center>
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
                    </Center>
                </Link>
            </GridItem>
            <GridItem alignContent="center">
                <Link to="/">
                    <Center>
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
                    </Center>
                </Link>
            </GridItem>
            <GridItem alignContent="center">
                <Link to="/">
                    <Center>
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
                    </Center>
                </Link>
            </GridItem>
        </Grid>
    );
};

export default Nav;
