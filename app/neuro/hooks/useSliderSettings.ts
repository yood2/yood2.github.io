import { useState } from 'react';

export default function useSliderSettings() {
    const [batchesPerSecond, setBatchesPerSecond] = useState(30); // state to control batches per second
    const [chartSize, setChartSize] = useState(30); // state to control chart size

    return {
        batchesPerSecond,
        setBatchesPerSecond,
        chartSize,
        setChartSize,
    };
}
