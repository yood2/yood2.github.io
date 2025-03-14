import {
    LineChart,
    Line,
    CartesianGrid,
    XAxis,
    // YAxis,
    Tooltip,
    ResponsiveContainer,
} from 'recharts';

import useRenderTracker from '../hooks/useRenderTracker';
import { Props } from '../types/schema';

const LineCharts: React.FC<{ renderData: Props[] }> = ({ renderData }) => {
    const fps = useRenderTracker(renderData);

    return (
        <>
            <ResponsiveContainer width="100%" height={300}>
                <LineChart data={renderData}>
                    <CartesianGrid stroke="#ccc" />
                    <XAxis dataKey="time" />

                    <Tooltip />
                    <Line
                        type="monotone"
                        isAnimationActive={false}
                        dataKey="signal1"
                        stroke="#8884d8"
                    />
                    <Line
                        type="monotone"
                        isAnimationActive={false}
                        dataKey="signal2"
                        stroke="#82ca9d"
                    />
                    <Line
                        type="monotone"
                        isAnimationActive={false}
                        dataKey="signal3"
                        stroke="#ffc658"
                    />
                    <Line
                        type="monotone"
                        isAnimationActive={false}
                        dataKey="signal4"
                        stroke="#ff7300"
                    />
                    <Line
                        type="monotone"
                        isAnimationActive={false}
                        dataKey="signal5"
                        stroke="#413ea0"
                    />
                </LineChart>
            </ResponsiveContainer>
            <h2>fps: {fps}</h2>
        </>
    );
};

export default LineCharts;
