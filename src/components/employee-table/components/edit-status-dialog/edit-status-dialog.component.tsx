import React, {
  FC, ChangeEvent, useState, useEffect,
} from 'react';
import {
  Typography,
  IconButton,
  Slider,
  Mark,
  Snackbar,
} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import axios from 'axios';
import { EditStatusDialogProps } from './edit-status-dialog.interface';
import Styled from './edit-status-dialog.styles';
import { EmployeeStatus } from '../../../../common/constants/employee-status.enum';
import { CONFIG } from '../../../../common/constants/config';
import { ApiRoutes } from '../../../../common/constants/api-routes.enum';
import { getMarkValue } from '../../../../common/helpers/getMarkValue';
import { Employee } from '../../../../common/interfaces/employee.interface';

const marks: Mark[] = [
  {
    value: 0,
    label: EmployeeStatus.ADDED,
  },
  {
    value: 1,
    label: EmployeeStatus.IN_CHECK,
  },
  {
    value: 2,
    label: EmployeeStatus.APPROVED,
  },
  {
    value: 3,
    label: EmployeeStatus.ACTIVE,
  },
  {
    value: 4,
    label: EmployeeStatus.INACTIVE,
  },
];

function valuetext(value: number) {
  return `${value}`;
}

function valueLabelFormat(value: number) {
  return marks.findIndex((mark) => mark.value === value) + 1;
}

const EditStatusDialogComponent: FC<EditStatusDialogProps> = ({
  userId,
  open,
  onClose,
  status,
  onStatusChange,
}) => {
  const [mark, setMark] = useState(status);
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  useEffect(() => {
    const fetchStatus = async () => {
      try {
        const url = `${CONFIG.API_URL}${ApiRoutes.EmployeeId.replace(
          '{id}',
          userId,
        )}`;
        const patchData = { status: mark };
        const result = await axios.patch<Employee>(url, patchData);
        const {
          data: { status: changedStatus },
        } = result;
        onStatusChange(changedStatus);
      } catch (error) {
        setSnackbarOpen(true);
      }
    };
    fetchStatus();
  }, [mark, onStatusChange, userId]);

  const handleSliderChange = (
    event: ChangeEvent<{}>,
    value: number | number[],
  ) => {
    const findMark = marks[value as number];
    setMark(findMark.label as string);
  };

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };
  return (
    <Styled.Dialog
      open={open}
      onClose={onClose}
      fullWidth
    >
      <Styled.DialogTitle>
        <Typography variant="h6">Change status</Typography>
        <IconButton onClick={onClose}>
          <CloseIcon />
        </IconButton>
      </Styled.DialogTitle>
      <Styled.DialogContent>
        <Snackbar
          open={snackbarOpen}
          anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
          autoHideDuration={2000}
          message="Something went wrong"
          onClose={handleSnackbarClose}
        />
        <Slider
          defaultValue={getMarkValue(marks, mark)}
          marks={marks}
          min={0}
          max={4}
          valueLabelFormat={valueLabelFormat}
          getAriaValueText={valuetext}
          onChangeCommitted={handleSliderChange}
        />
      </Styled.DialogContent>
    </Styled.Dialog>
  );
};

export default EditStatusDialogComponent;
