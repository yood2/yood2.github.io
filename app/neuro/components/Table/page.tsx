import { Props } from '../../types/schema';
import { columns } from './columns';
import { DataTable } from './data-table';

const Table: React.FC<{ renderData: Props[] }> = ({ renderData }) => {
    return <DataTable columns={columns} data={renderData} />;
};

export default Table;
