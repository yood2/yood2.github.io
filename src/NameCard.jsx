import { Grid, GridItem } from '@chakra-ui/react';
import { Text } from '@chakra-ui/react';

const NameCard = () => {
    return (
        <Grid templateColumns="repeat(6, 1fr)" gap={4} justifyItems="center">
            <GridItem colSpan={1} />
            <GridItem colSpan={4}>
                <Text fontSize="90" fontWeight="extrabold">
                    dan yoo
                </Text>
                <Text fontSize="30">CS & Business @ UBC</Text>
                <p>Currently under construction...</p>
            </GridItem>
            <GridItem colSpan={1} />
        </Grid>
    );
};

export default NameCard;
