import Nav from './Navbar';
import { useState } from 'react';
import { Center, Text, VStack } from '@chakra-ui/react';

const Projects = () => {
    const [gradientPosition, setGradientPosition] = useState({ x: 50, y: 50 });
    const handleMouseMove = (event) => {
        const rect = event.currentTarget.getBoundingClientRect();
        const x = ((event.clientX - rect.left) / rect.width) * 100;
        const y = ((event.clientY - rect.top) / rect.height) * 100;
        setGradientPosition({ x, y });
    };
    return (
        <>
            <Center>
                <VStack spacing={4}>
                    <Text
                        fontSize="90"
                        fontWeight="extrabold"
                        position="relative" // Ensure the element is positioned
                        onMouseMove={handleMouseMove} // Track mouse movement
                        _hover={{
                            background: `radial-gradient(circle closest-side at ${gradientPosition.x}% ${gradientPosition.y}%, #ff6b6b, #f06595, #000000)`,
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            transition: 'background 0.5s ease', // Transition for smoother effect
                        }}
                    >
                        projects
                    </Text>
                    <Nav />
                    <Text>hermes.api</Text>
                    <Text>
                        RESTful API that returns optimal portfolio weights when
                        given a list of tickers. Uses modern portfolio theory
                        and mean-analysis in calculations. Calculations in NumPy
                        and Pandas. API built in Flask.
                    </Text>
                </VStack>
            </Center>
        </>
    );
};

export default Projects;
