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

    // const debug = () => {
    //     console.log(tickers);
    // };

    const handleAddTicker = () => {
        if (tickerInput.trim() !== '') {
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
        const updatedTickers = tickers.filter((_, i) => i !== index);
        setTickers(updatedTickers);
    };

    const handleCalculate = () => {
        console.log('Calculating weights for:', tickers);
    };

    const handleOptimize = async () => {
        console.log('Optimizing portfolio:', tickers);
        const symbols = tickers.map((ticker) => ticker.symbol);

        const optimalWeights = await fetchOptimize(symbols);

        const updatedTickers = tickers.map((ticker) => ({
            ...ticker,
            weight: optimalWeights[ticker.symbol] || 0,
        }));

        setTickers(updatedTickers);
    };

    return (
        <>
            <VStack spacing={4}>
                <Text fontSize="xl" fontWeight="bold">
                    Hermes API
                </Text>
                <Text>
                    Input ticker symbols. Currently using data from (01/01/2022)
                    - (01/01/2024).
                </Text>

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
                    <Button onClick={handleCalculate}>Calculate</Button>
                    <Button onClick={handleOptimize}>Optimize</Button>
                    {/* <Button onClick={debug}>DEBUG</Button> */}
                </HStack>
            </VStack>
        </>
    );
};

export default Hermes;
