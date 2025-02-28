import useWebsocket from '../hooks/useWebsocket';
import useSliderSettings from '../hooks/useSliderSettings';
import { rechartsProcessing } from '../lib/chart-utils';

import LineChart from './LineChart';
import Table from './Table/Table';
import Sliders from './Sliders';

export default function Chart() {
    const { batchesPerSecond, setBatchesPerSecond, chartSize, setChartSize } =
        useSliderSettings();
    const { renderData } = useWebsocket(chartSize, batchesPerSecond);

    return (
        <>
            <div className="flex flex-col items-center space-y-6 py-4">
                <Sliders
                    batchesPerSecond={batchesPerSecond}
                    setBatchesPerSecond={setBatchesPerSecond}
                    chartSize={chartSize}
                    setChartSize={setChartSize}
                />
                <LineChart renderData={rechartsProcessing(renderData)} />
                <Table renderData={rechartsProcessing(renderData)} />
            </div>
        </>
    );
}
