import { Text, VStack, Box } from '@chakra-ui/react';

const Coffee = () => {
    return (
        <Box w="60%" mx="auto" mt={8} mb={20}>
            <VStack>
                <>
                    <Text fontSize="xl" fontWeight="bold">
                        Best Cafes in Vancouver
                    </Text>
                    <Text>1. Prototype</Text>
                    <Text>
                        In my opinion, it is the ultimate specialty coffee shop
                        in Vancouver. They roast a wide variety of beans and
                        definitely seem to take their craft seriously. Came here
                        to try out their coffee flight and really enjoyed the
                        experience of trying several of their specialty coffees
                        in a tasting. Pricy but worth it if you love coffee.
                    </Text>
                    <Text>2. Revolver Coffee</Text>
                    <Text>
                        A great little shop downtown. Their pourover menu is
                        small, but they make up for it with excellent selection.
                        This is the first shop that made me realize how bad my
                        pourover technique was lol. Only other downside is that
                        they are super busy, so don't expect any seating.
                    </Text>
                    <Text>3. Modus</Text>
                    <Text>
                        I just tried this recently (Aug 5, 2024) and I love this
                        place! Very home-y vibe with a lot of Japandi-inspired
                        interior design. Pourover was very tea-like and clear.
                        Their food menu is what really makes them stand out.
                        HK-style breakfast sandos and other asian-fusion food
                        items make this a interesting place for more than
                        coffee. Only con was it's location being in a awkward
                        place away from everything (it's not hard to get to but
                        you rarely find yourself in that area).
                    </Text>
                </>
            </VStack>
        </Box>
    );
};

export default Coffee;
