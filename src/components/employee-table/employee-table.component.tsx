import React, { FC } from 'react';
import { Table } from '@material-ui/core';
import { EmployeeTableBody } from './components/employee-table-body';
import { EmployeeTableHead } from './components/employee-table-head';
import { EmployeeTableProps } from './employee-table.interface';
import Styled from './employee-table.styles';

const EmployeeTableComponent: FC<EmployeeTableProps> = ({ rows }) => (
  <Styled.TableWrapper>
    <Table>
      <EmployeeTableHead />
      <EmployeeTableBody rows={rows} />
    </Table>
  </Styled.TableWrapper>
);

export default EmployeeTableComponent;
