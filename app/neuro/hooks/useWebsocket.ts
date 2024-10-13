import { useEffect, useState, useRef } from 'react';
import { SignalData } from '../types/schema';

export default function useRandomDataGenerator(
    chartSize: number,
    batchesPerSecond: number
) {
    const [renderData, setRenderData] = useState<SignalData[]>([]); // Batch data here
    const bufferRef = useRef<SignalData[]>([]); // All data here
    const intervalTime = 1000 / batchesPerSecond;

    // no websocket, just generate random data
    const generateRandomSignalData = (): SignalData => {
        return {
            time: Date.now(),
            signals: Array.from({ length: 5 }, () =>
                Math.floor(Math.random() * 100)
            ),
        };
    };

    useEffect(() => {
        const updateRenderData = () => {
            const newRandomData = generateRandomSignalData();
            bufferRef.current.push(newRandomData);

            if (bufferRef.current.length > 0) {
                const nextBatch = bufferRef.current.splice(
                    0,
                    Math.min(bufferRef.current.length, chartSize)
                );
                setRenderData((prevData) =>
                    [...prevData, ...nextBatch].slice(-chartSize)
                );
            }
        };

        const intervalId = setInterval(updateRenderData, intervalTime);

        return () => {
            clearInterval(intervalId); // Cleanup interval on component unmount
        };
    }, [chartSize, batchesPerSecond]); // Re-run when either parameter changes

    return { renderData };
}
