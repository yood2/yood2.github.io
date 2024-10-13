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
                <LineChart renderData={rechartsProcessing(renderData)} />
                <div className="w-full flex justify-center gap-6">
                    <div className="flex-1">
                        <Table renderData={rechartsProcessing(renderData)} />
                    </div>
                    <div className="w-1/4 self-start">
                        <Sliders
                            batchesPerSecond={batchesPerSecond}
                            setBatchesPerSecond={setBatchesPerSecond}
                            chartSize={chartSize}
                            setChartSize={setChartSize}
                        />
                    </div>
                </div>
            </div>
        </>
    );
}
