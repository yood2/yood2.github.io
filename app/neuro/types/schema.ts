export interface SignalData {
    time: number;
    signals: number[];
}

export interface Props {
    time: number;
    signal1: number;
    signal2: number;
    signal3: number;
    signal4: number;
    signal5: number;
}

export interface SlidersProps {
    batchesPerSecond: number;
    setBatchesPerSecond: (value: number) => void;
    chartSize: number;
    setChartSize: (value: number) => void;
}
