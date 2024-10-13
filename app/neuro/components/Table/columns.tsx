import { ColumnDef } from '@tanstack/react-table';
import { Props } from '../../types/schema';

export const columns: ColumnDef<Props>[] = [
    {
        accessorKey: 'time',
        header: 'Time',
    },
    {
        accessorKey: 'signal1',
        header: 'Signal 1',
    },
    {
        accessorKey: 'signal2',
        header: 'Signal 2',
    },
    {
        accessorKey: 'signal3',
        header: 'Signal 3',
    },
    {
        accessorKey: 'signal4',
        header: 'Signal 4',
    },
    {
        accessorKey: 'signal5',
        header: 'Signal 5',
    },
];
