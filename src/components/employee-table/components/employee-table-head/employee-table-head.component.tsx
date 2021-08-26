import { TableCell, TableHead, TableRow } from '@material-ui/core';
import React, { FC } from 'react';
import { TableHeaders } from '../../../../common/constants/table-headers.enum';

const EmployeeTableHeadComponent: FC = () => (
  <TableHead>
    <TableRow>
      <TableCell>{TableHeaders.FIRST_NAME}</TableCell>
      <TableCell>{TableHeaders.LAST_NAME}</TableCell>
      <TableCell>{TableHeaders.COMPANY}</TableCell>
      <TableCell>{TableHeaders.STATUS}</TableCell>
    </TableRow>
  </TableHead>
);

export default EmployeeTableHeadComponent;
