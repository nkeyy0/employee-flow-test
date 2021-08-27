import { TableCell } from '@material-ui/core';
import React, { FC, useState } from 'react';
import EditIcon from '@material-ui/icons/Edit';
import { EditStatusDialog } from '../edit-status-dialog';
import Styled from './employee-table-row.styles';
import { EmployeeTableRowProps } from './employee-table-row.interface';
import { isEven } from '../../../../common/helpers/is-even.helper';

const EmployeeRowComponent: FC<EmployeeTableRowProps> = ({
  firstName,
  lastName,
  company,
  status,
  userId,
  rowNumber,
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
    <Styled.TableRow key={userId} className={isEven(rowNumber) ? 'grey' : ''}>
      <TableCell>{firstName}</TableCell>
      <TableCell>{lastName}</TableCell>
      <TableCell>{company}</TableCell>
      <TableCell>
        <Styled.CellWrapper>
          <EditStatusDialog
            open={isDialogOpen}
            onClose={handleDialogClose}
            userId={userId}
            status={employeeStatus}
            onStatusChange={handleStatusChange}
          />
          <Styled.Typography variant="body2">
            {employeeStatus}
          </Styled.Typography>
          <Styled.EditButton
            aria-label="Change status"
            onClick={handleEditClick}
          >
            <EditIcon />
          </Styled.EditButton>
        </Styled.CellWrapper>
      </TableCell>
    </Styled.TableRow>
  );
};

export default EmployeeRowComponent;
