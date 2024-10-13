import { Slider } from '@/components/ui/slider';
import { SlidersProps } from '../types/schema';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from '@/components/ui/popover';

export default function Sliders({
    batchesPerSecond,
    setBatchesPerSecond,
    chartSize,
    setChartSize,
}: SlidersProps) {
    return (
        <Popover>
            <PopoverTrigger asChild>
                <Button variant="outline">Chart Settings</Button>
            </PopoverTrigger>
            <PopoverContent>
                <div className="space-y-2">
                    <div className="space-y-2">
                        {' '}
                        <Label>Batches Per Second: {batchesPerSecond}</Label>
                        <Slider
                            defaultValue={[batchesPerSecond]}
                            min={1}
                            max={60}
                            step={1}
                            onValueCommit={(value) =>
                                setBatchesPerSecond(value[0])
                            }
                        />
                    </div>
                    <div className="space-y-2">
                        <Label>Chart Size: {chartSize}</Label>
                        <Slider
                            defaultValue={[chartSize]}
                            min={1}
                            max={60}
                            step={1}
                            onValueCommit={(value) => setChartSize(value[0])}
                        />
                    </div>
                </div>
            </PopoverContent>
        </Popover>
    );
}
