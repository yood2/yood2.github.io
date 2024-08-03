import { Center, Grid, GridItem, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <Grid templateColumns="repeat(3, 10fr)" gap={10}>
            <GridItem alignContent="center">
                <Link to="https://drive.google.com/file/d/1gl8TGBnDZVk-fzRndbRh19X0GUipbZCM/view?usp=sharing">
                    <Center>
                        <Text>📄 Resume</Text>
                    </Center>
                </Link>
            </GridItem>
            <GridItem alignContent="center">
                <Link to="/">
                    <Center>
                        <Text>💻 Projects</Text>
                    </Center>
                </Link>
            </GridItem>
            <GridItem alignContent="center">
                <Link to="/">
                    <Center>
                        <Text>👋 About Me</Text>
                    </Center>
                </Link>
            </GridItem>
        </Grid>
    );
};

export default Nav;
