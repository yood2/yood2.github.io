import { Text, Center, VStack } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const BodyContent = () => {
    return (
        <>
            <Center>
                <VStack spacing={10}>
                    <VStack>
                        <Text fontSize={30}>👋 About Me</Text>
                        <Text textAlign={'center'}>
                            I am a student at the University of British Columbia
                            doing a combined major in Business and Computer
                            Science. I like programming, chess, running,
                            weightlifting, and coffee. Currently fixated on
                            Python internals and optimization, data analysis
                            libraries, and machine learning algorithms.
                        </Text>
                    </VStack>

                    <VStack>
                        <Text fontSize={30}>💻 Mean-Variance Analysis API</Text>
                        <Text textAlign={'center'}>
                            I made a API that returns a optimal weighting
                            strategy for a portfolio given a list of tickers.
                            <Link
                                to="/Hermes"
                                style={{
                                    textDecoration: 'underline',
                                    marginLeft: '4px',
                                }}
                            >
                                Try it here.
                            </Link>
                        </Text>
                    </VStack>

                    <VStack>
                        <Text fontSize={30}>☕️ Coffee Log</Text>
                        <Text textAlign={'center'}>
                            I love coffee. Current daily set up is a v60
                            pourover using Fellow Opus grinder and the classic
                            EKG gooseneck. If you have any recommendations for
                            light roast beans with floral notes let me know!
                            <Link
                                to="/coffee"
                                style={{
                                    textDecoration: 'underline',
                                    marginLeft: '4px',
                                }}
                            >
                                Notes and reviews on some roasters and cafes.
                            </Link>
                        </Text>
                    </VStack>

                    <VStack>
                        <Text fontSize={30}>QUIZ</Text>
                        <Text textAlign={'center'}>
                            <Link
                                to="/quiz"
                                style={{
                                    textDecoration: 'underline',
                                    marginLeft: '4px',
                                }}
                            >
                                QUIZ
                            </Link>
                        </Text>
                    </VStack>
                </VStack>
            </Center>
        </>
    );
};

export default BodyContent;
