import { TableCell, TableRow, Typography } from '@material-ui/core';
import React, { FC, useState } from 'react';
import EditIcon from '@material-ui/icons/Edit';
import { EditStatusDialog } from '../edit-status-dialog';
import Styled from './employee-table-row.styles';
import { EmployeeTableRowProps } from './employee-table-row.interface';

const EmployeeRowComponent: FC<EmployeeTableRowProps> = ({
  firstName,
  lastName,
  company,
  status,
  userId,
}) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [employeeStatus, setEmployeeStatus] = useState(status);
  const handleEditClick = () => {
    setIsDialogOpen(true);
  };
  const handleDialogClose = () => {
    setIsDialogOpen(false);
  };
  const handleStatusChange = (changedStatus: string) => {
    setEmployeeStatus(changedStatus);
  };
  return (
    <TableRow key={userId}>
      <TableCell>{firstName}</TableCell>
      <TableCell>{lastName}</TableCell>
      <TableCell>{company}</TableCell>
      <TableCell>
        <Styled.CellWrapper>
          <EditStatusDialog
            open={isDialogOpen}
            onClose={handleDialogClose}
            userId={userId}
            status={status}
            onStatusChange={handleStatusChange}
          />
          <Typography variant="body2">{employeeStatus}</Typography>
          <Styled.EditButton
            aria-label="Change status"
            onClick={handleEditClick}
          >
            <EditIcon />
          </Styled.EditButton>
        </Styled.CellWrapper>
      </TableCell>
    </TableRow>
  );
};

export default EmployeeRowComponent;
