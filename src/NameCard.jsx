import React, { useState } from 'react';
import { Text, Center } from '@chakra-ui/react';

const NameCard = () => {
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
                    dan yoo
                </Text>
            </Center>
            <Center>
                <Text fontSize="30">CS & Business @ UBC</Text>
            </Center>
        </>
    );
};

export default NameCard;
