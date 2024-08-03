import NameCard from './NameCard';
import Nav from './Nav';
import { Box, Grid, GridItem } from '@chakra-ui/react';

const Home = () => {
    return (
        <Box mt={100}>
            <Grid
                templateColumns="repeat(6, 1fr)"
                templateRows="repeat(2, 1fr)"
                gap={4}
                justifyItems="center"
            >
                <GridItem colSpan={1} rowSpan={2} />
                <GridItem colSpan={4}>
                    <NameCard />
                </GridItem>
                <GridItem colSpan={1} rowSpan={2} />
                <GridItem colSpan={4}>
                    <Nav />
                </GridItem>
            </Grid>
        </Box>
    );
};

export default Home;
