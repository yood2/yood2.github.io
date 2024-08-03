import { Grid, GridItem, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <Grid templateColumns="repeat(3, 10fr)" gap={1} justifyItems="center">
            <GridItem>
                <Link to="https://drive.google.com/file/d/1f4ewsQLKzvn5ySpYB-0WXGpTqp2jTI9e/view?usp=sharing">
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
