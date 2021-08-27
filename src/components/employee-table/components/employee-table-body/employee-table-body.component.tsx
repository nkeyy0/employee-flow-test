import { TableBody } from '@material-ui/core';
import React, { FC } from 'react';
import { EmployeeRow } from '../employee-table-row';
import { EmployeeTableBodyProps } from './employee-table-body.interface';

const EmployeeTableBodyComponent: FC<EmployeeTableBodyProps> = ({ rows }) => (
  <TableBody>
    {rows.map(({
      id, firstName, lastName, company, status,
    }, rowNumber) => (
      <EmployeeRow
        key={id}
        userId={id}
        firstName={firstName}
        lastName={lastName}
        company={company}
        status={status}
        rowNumber={rowNumber}
      />
    ))}
  </TableBody>
);

export default EmployeeTableBodyComponent;
