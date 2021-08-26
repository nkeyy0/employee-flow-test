import React, { FC } from 'react';
import { Paper, Table } from '@material-ui/core';
import { EmployeeTableBody } from './components/employee-table-body';
import { EmployeeTableHead } from './components/employee-table-head';
import { EmployeeTableProps } from './employee-table.interface';

const EmployeeTableComponent: FC<EmployeeTableProps> = ({ rows }) => (
  <Paper>
    <Table>
      <EmployeeTableHead />
      <EmployeeTableBody rows={rows} />
    </Table>
  </Paper>
);

export default EmployeeTableComponent;
