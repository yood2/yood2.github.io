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
    Alert,
    AlertIcon,
} from '@chakra-ui/react';
import { useState } from 'react';
import fetchOptimize from './fetchOptimize';
import fetchCalculate from './fetchCalculate';

// prettier-ignore
const diversifiedPortfolio = [
    {'AAPL': 0.05},
    {'MSFT': 0.05},
    {'NVDA': 0.05},
    {'GOOGL': 0.05},
    {'JNJ': 0.05},
    {'PFE': 0.05},
    {'MRK': 0.05},
    {'ABBV': 0.05},
    {'JPM': 0.05},
    {'BRK.B': 0.05},
    {'AMZN': 0.05},
    {'TSLA': 0.05},
    {'HD': 0.05},
    {'NKE': 0.05},
    {'PG': 0.05},
    {'KO': 0.05},
    {'PEP': 0.05},
    {'WMT': 0.05}
];

const Hermes = () => {
    const [tickerInput, setTickerInput] = useState('');
    const [tickers, setTickers] = useState([]);
    const [metrics, setMetrics] = useState(null); // State to store metrics
    const [warning, setWarning] = useState(''); // State to manage warning message

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

    const handleCalculate = async () => {
        if (tickers.length < 2) {
            setWarning('You need at least 2 stocks to calculate metrics.');
            return;
        }

        setWarning(''); // Clear the warning if conditions are met

        console.log('Calculating weights for:', tickers);
        let portfolio = tickers.reduce((acc, ticker) => {
            acc[ticker.symbol] = ticker.weight;
            return acc;
        }, {});

        try {
            const metrics = await fetchCalculate(portfolio);
            console.log('Metrics:', metrics);
            setMetrics(metrics); // Update state with fetched metrics
        } catch (error) {
            console.error('Error calculating metrics:', error);
        }
    };

    const handleOptimize = async () => {
        if (tickers.length < 2) {
            setWarning('You need at least 2 stocks to optimize.');
            return;
        }

        setWarning(''); // Clear the warning if conditions are met

        console.log('Optimizing portfolio:', tickers);
        const symbols = tickers.map((ticker) => ticker.symbol);

        try {
            const optimalWeights = await fetchOptimize(symbols);

            const updatedTickers = tickers.map((ticker) => ({
                ...ticker,
                weight: optimalWeights[ticker.symbol] || 0,
            }));

            setTickers(updatedTickers);
        } catch (error) {
            console.error('Error optimizing portfolio:', error);
        }
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
                                <Th>Action</Th>
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

                {warning && ( // Conditionally render the warning message
                    <Alert status="warning" mt={4}>
                        <AlertIcon />
                        {warning}
                    </Alert>
                )}

                <HStack>
                    <Button onClick={handleCalculate}>Calculate</Button>
                    <Button onClick={handleOptimize}>Optimize</Button>
                </HStack>

                {/* Render metrics at the bottom */}
                {metrics && (
                    <VStack mt={6} spacing={4}>
                        <Text fontSize="lg" fontWeight="bold">
                            Portfolio Metrics
                        </Text>
                        <Text>
                            Return: {(metrics.return * 100).toFixed(2)}%
                        </Text>
                        <Text>
                            Standard Deviation: {(metrics.std * 100).toFixed(2)}
                            %
                        </Text>
                        <Text>Sharpe Ratio: {metrics.sharpe.toFixed(4)}</Text>
                    </VStack>
                )}
            </VStack>
        </>
    );
};

export default Hermes;
