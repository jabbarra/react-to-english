import React from  'react';
import DataTable from 'react-data-table-component';

const Verbs = ({columns, data}) => (
    <div>
        <DataTable title="Verbs" columns={columns} data={data}></DataTable>
    </div>
);

export default Verbs;