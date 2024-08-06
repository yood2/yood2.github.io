import { Image, HStack, VStack, Center, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const Socials = () => {
    return (
        <Center>
            <VStack spacing={5}>
                <Text>You can find me at</Text>
                <HStack spacing={14}>
                    <Link to="https://www.instagram.com/yoodanni/">
                        <Image
                            src="./instagram.svg"
                            alt="instagram"
                            boxSize="35px"
                        />
                    </Link>
                    <Link to="https://github.com/yood2">
                        <Image src="./github.svg" alt="github" boxSize="35px" />
                    </Link>
                    <Link to="https://www.linkedin.com/in/yood2/">
                        <Image
                            src="./linkedin.svg"
                            alt="linkedin"
                            boxSize="35px"
                        />
                    </Link>
                </HStack>
                <Text>or reach out via email at yood2 (at) proton.me</Text>
            </VStack>
        </Center>
    );
};

export default Socials;
