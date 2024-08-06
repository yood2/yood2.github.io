import {
    Button,
    Text,
    VStack,
    HStack,
    Input,
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
} from '@chakra-ui/react';
import { useState } from 'react';
import fetchOptimize from './fetchOptimize';

const Hermes = () => {
    const [tickerInput, setTickerInput] = useState('');
    const [tickers, setTickers] = useState([]);

    const debug = () => {
        console.log(tickers);
    };

    const handleAddTicker = () => {
        if (tickerInput.trim() !== '') {
            // Check for duplicate ticker symbols
            const isDuplicate = tickers.some(
                (ticker) =>
                    ticker.symbol.toLowerCase() ===
                    tickerInput.trim().toLowerCase()
            );
            if (!isDuplicate) {
                setTickers([
                    ...tickers,
                    { symbol: tickerInput.trim(), weight: 0 },
                ]);
                setTickerInput('');
            } else {
                alert('Ticker already exists in the list.');
            }
        }
    };

    const handleWeightChange = (index, newWeight) => {
        const updatedTickers = tickers.map((ticker, i) =>
            i === index
                ? { ...ticker, weight: parseFloat(newWeight) || 0 }
                : ticker
        );
        setTickers(updatedTickers);
    };

    const handleRemoveTicker = (index) => {
        // Remove the ticker at the specified index
        const updatedTickers = tickers.filter((_, i) => i !== index);
        setTickers(updatedTickers);
    };

    const handleCalculate = () => {
        console.log('Calculating weights for:', tickers);
    };

    const handleOptimize = () => {
        console.log('Optimizing portfolio:', tickers);
        let symbols = tickers.map((ticker) => ticker.symbol);
        fetchOptimize(symbols);
    };

    return (
        <>
            <VStack spacing={4}>
                <Text fontSize="xl" fontWeight="bold">
                    Hermes API
                </Text>
                <Text>Input ticker symbols</Text>

                <HStack>
                    <Input
                        placeholder="Enter ticker symbol"
                        value={tickerInput}
                        onChange={(e) => setTickerInput(e.target.value)}
                    />

                    <Button onClick={handleAddTicker}>Add</Button>
                </HStack>

                {tickers.length > 0 && (
                    <Table variant="simple" mt={4}>
                        <Thead>
                            <Tr>
                                <Th>Ticker Symbol</Th>
                                <Th>Weight (decimal)</Th>
                                <Th>Action</Th>{' '}
                                {/* Add a column header for actions */}
                            </Tr>
                        </Thead>
                        <Tbody>
                            {tickers.map((ticker, index) => (
                                <Tr key={index}>
                                    <Td>{ticker.symbol}</Td>
                                    <Td>
                                        <Input
                                            type="number"
                                            value={ticker.weight}
                                            onChange={(e) =>
                                                handleWeightChange(
                                                    index,
                                                    e.target.value
                                                )
                                            }
                                            min={0}
                                            max={100}
                                            placeholder="Enter weight"
                                        />
                                    </Td>
                                    <Td>
                                        <Button
                                            colorScheme="red"
                                            onClick={() =>
                                                handleRemoveTicker(index)
                                            }
                                        >
                                            Remove
                                        </Button>
                                    </Td>
                                </Tr>
                            ))}
                        </Tbody>
                    </Table>
                )}
                <HStack>
                    <Button onClick={handleCalculate} colorScheme="blue">
                        Calculate
                    </Button>
                    <Button onClick={handleOptimize} colorScheme="green">
                        Optimize
                    </Button>
                    <Button onClick={debug}>DEBUG</Button>
                </HStack>
            </VStack>
        </>
    );
};

export default Hermes;
