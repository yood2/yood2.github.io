import { useEffect, useRef, useState, useMemo } from 'react';
import { Props } from '../types/schema';

export default function useRenderTracker(dependencies: Props[]) {
    const [fps, setFps] = useState<number>(0);
    const lastRenderTime = useRef<number>(performance.now());

    const memoizedDependencies = useMemo(() => dependencies, [dependencies]);

    useEffect(() => {
        const now = performance.now();
        const delta = now - lastRenderTime.current;

        // update fps using (last render time - current render time)
        if (delta > 0) {
            setFps(1000 / delta); // delta in ms
        }

        lastRenderTime.current = now;
    }, [memoizedDependencies]);

    return Math.round(fps);
}
