import NameCard from './NameCard';
import Nav from './Nav';
import { Center, Grid, GridItem } from '@chakra-ui/react';

const Home = () => {
    return (
        <Center mt={100}>
            <Grid
                templateColumns="repeat(6, 1fr)"
                templateRows="repeat(2, 1fr)"
                gap={4}
                justifyItems="center"
                alignContent="center"
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
        </Center>
    );
};

export default Home;
