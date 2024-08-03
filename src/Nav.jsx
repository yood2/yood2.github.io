import { Grid, GridItem, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <Grid templateColumns="repeat(3, 10fr)" gap={1} justifyItems="center">
            <GridItem>
                <Link to="/resume">
                    <Text>📄 Resume</Text>
                </Link>
            </GridItem>
            <GridItem>
                <Link to="/">
                    <Text>💻 Projects</Text>
                </Link>
            </GridItem>
            <GridItem>
                <Link to="/">
                    <Text>👋 Contact</Text>
                </Link>
            </GridItem>
        </Grid>
    );
};

export default Nav;
