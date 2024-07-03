import React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'id', headerName: 'ID', width: 90 },
  { field: 'name', headerName: 'Name', width: 150 },
  { field: 'age', headerName: 'Age', width: 110 },
  { field: 'email', headerName: 'Email', width: 150 },
];

const rows = [
  { id: 1, name: 'John Doe', age: 35, email: 'john@example.com' },
  { id: 2, name: 'Jane Doe', age: 28, email: 'jane@example.com' },
  // Add more rows here
];

const Tables = () => {
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid rows={rows} columns={columns} pageSize={5} checkboxSelection />
    </div>
  );
};

export default Tables;
