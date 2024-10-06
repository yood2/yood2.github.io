import { useState } from 'react';
import {
    Box,
    Flex,
    VStack,
    Heading,
    Text,
    Button,
    Image,
} from '@chakra-ui/react';

const questions = [
    {
        question:
            "You're not feeling well. Which option do you choose for soup?",
        choices: [
            { text: 'Tim Hortons', value: 2 },
            { text: 'No-Name brand', value: 1 },
            { text: 'Buy groceries and make my own', value: 4 },
            { text: "Skip soup, it's not my favorite", value: 0 },
            { text: 'Slaughter a chicken and make my own noodles', value: 3 },
        ],
    },
    {
        question:
            "You didn't do well on a test. What's your first thought after leaving the classroom?",
        choices: [
            { text: 'Crave something sweet', value: 1 },
            { text: 'Think about having pho', value: 4 },
            { text: 'Time to kms', value: 0 },
            { text: 'Feel a bit sad but try to move on', value: 2 },
            {
                text: 'Break into your profs house and threaten to kill their dog',
                value: 3,
            },
        ],
    },
    {
        question:
            'You see your friends eating out without you. How does this make you feel?',
        choices: [
            { text: "Sad, but I'll treat myself to cake", value: 1 },
            { text: "Realize we weren't that close anyway", value: 0 },
            { text: 'Wonder if they forgot to invite me', value: 2 },
            { text: 'Kill', value: 3 },
            { text: 'Braindead', value: 4 },
        ],
    },
    {
        question:
            'You wake up in the middle of the night to a strange noise. What do you do?',
        choices: [
            { text: "I'm so scared! Hide under the covers", value: 1 },
            { text: 'Bring out your homemade guns', value: 3 },
            { text: 'Say a quick prayer', value: 4 },
            { text: 'Must be a dream, go back to sleep', value: 2 },
            { text: 'Hope they kill me', value: 0 },
        ],
    },
    {
        question: "What's your most embarrassing moment?",
        choices: [
            { text: 'Getting a bad mark on a test', value: 4 },
            { text: 'Forgetting to delete my browser history', value: 3 },
            { text: 'I sneezed in public once (˶˃ ᵕ ˂˶)', value: 1 },
            { text: 'Walking into a glass door', value: 2 },
            { text: 'Being born', value: 0 },
        ],
    },
    {
        question: 'Your best friend betrays your trust. You feel:',
        choices: [
            { text: 'Sad', value: 2 },
            { text: 'Angry', value: 3 },
            { text: 'was bound to happen', value: 0 },
            { text: 'nooo uwu im gonna eat cake', value: 1 },
            { text: 'Kill', value: 4 },
        ],
    },
];

const endingPages = [
    {
        title: 'Spork',
        description:
            'Bro youre such a downer, get outta here go read a book or something',
        image: './spork.jpg',
    },
    {
        title: 'Fork',
        description:
            'Youre basic af but everyone likes you! Even if youre not the most practical, people would sometimes still choose you cause youre prickly and cute HEHEHE CUTIE PATOOTIE',
        image: './fork.jpg',
    },
    {
        title: 'Spoon',
        description:
            'Youre basic af and… kinda just whatever lol. You are lukewarm. Youre like a 70% on a test. If you used a random number generator from 0-100 youd probably get like a 62. Mid af.',
        image: './spoon.jpg',
    },
    {
        title: 'Knife',
        description: "You're intense... please don't hurt me :(",
        image: './knife.jpg',
    },
    {
        title: 'Chopsticks',
        description: 'I bet youre asian huh',
        image: './chopstick.jpg',
    },
];

const Quiz = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [answers, setAnswers] = useState([]);
    const [quizEnded, setQuizEnded] = useState(false);

    const handleAnswer = (value) => {
        const newAnswers = [...answers, value];
        setAnswers(newAnswers);

        if (currentQuestion < questions.length - 1) {
            setCurrentQuestion(currentQuestion + 1);
        } else {
            setQuizEnded(true);
        }
    };

    const calculateFinalScore = () => {
        const sum = answers.reduce((acc, val) => acc + val, 0);
        const average = sum / answers.length;
        return Math.floor(average);
    };

    const restartQuiz = () => {
        setCurrentQuestion(0);
        setAnswers([]);
        setQuizEnded(false);
    };

    if (quizEnded) {
        const finalScore = calculateFinalScore();
        const ending = endingPages[finalScore];

        return (
            <Box w="60%" mx="auto" mt={8} mb={20}>
                <Box textAlign="center" py={10}>
                    <Heading mb={4}>{ending.title}</Heading>
                    <Image
                        src={ending.image}
                        alt={ending.title}
                        mx="auto"
                        mb={4}
                    />
                    <Text fontSize="xl" mb={4}>
                        {ending.description}
                    </Text>
                    <Button colorScheme="blue" onClick={restartQuiz}>
                        Take the Quiz Again
                    </Button>
                </Box>
            </Box>
        );
    }

    const question = questions[currentQuestion];

    return (
        <Flex
            minHeight="100vh"
            width="100%"
            alignItems="center"
            justifyContent="center"
        >
            <Box
                textAlign="center"
                maxWidth="600px"
                width="90%"
                p={6}
                borderWidth={1}
                borderRadius="lg"
                boxShadow="lg"
            >
                <Heading mb={6}>Question {currentQuestion + 1}</Heading>
                <Text fontSize="xl" mb={8}>
                    {question.question}
                </Text>
                <VStack spacing={4}>
                    {question.choices.map((choice, index) => (
                        <Button
                            key={index}
                            onClick={() => handleAnswer(choice.value)}
                            width="full"
                            colorScheme="blue"
                        >
                            {choice.text}
                        </Button>
                    ))}
                </VStack>
            </Box>
        </Flex>
    );
};

export default Quiz;
