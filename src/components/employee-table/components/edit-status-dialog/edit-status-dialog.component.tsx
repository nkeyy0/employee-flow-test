import React, {
  FC, ChangeEvent, useState, useEffect,
} from 'react';
import {
  Typography, IconButton, Slider, Snackbar,
} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import axios from 'axios';
import { EditStatusDialogProps } from './edit-status-dialog.interface';
import Styled from './edit-status-dialog.styles';
import { CONFIG } from '../../../../common/constants/config';
import { ApiRoutes } from '../../../../common/constants/api-routes.enum';
import { getMarkValue } from '../../../../common/helpers/get-mark-value.helper';
import { Employee } from '../../../../common/interfaces/employee.interface';
import {
  ERROR_MESSAGE,
  marks,
  MAX_STEP,
  MIN_STEP,
  NOTIFICATION_DURATION,
} from './edit-status.constants';

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
  const [statusValue, setStatusValue] = useState(status);
  const [isSnackbarOpen, setIsSnackbarOpen] = useState(false);

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
        setIsSnackbarOpen(true);
      }
    };
    fetchStatus();
  }, [mark, onStatusChange, userId]);

  const handleStatusChange = (
    event: ChangeEvent<{}>,
    value: number | number[],
  ) => {
    const findMark = marks[value as number];
    setMark(findMark?.label as string);
  };

  const handleSliderChange = (
    event: ChangeEvent<{}>,
    value: number | number[],
  ) => {
    const findMark = marks[value as number];
    setStatusValue(findMark?.label as string);
  };

  const handleSnackbarClose = () => {
    setIsSnackbarOpen(false);
  };
  return (
    <Styled.Dialog open={open} onClose={onClose} fullWidth>
      <Styled.DialogTitle>
        <Typography variant="h6">Change status</Typography>
        <IconButton onClick={onClose}>
          <CloseIcon />
        </IconButton>
      </Styled.DialogTitle>
      <Styled.DialogContent>
        <Snackbar
          open={isSnackbarOpen}
          anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
          autoHideDuration={NOTIFICATION_DURATION}
          message={ERROR_MESSAGE}
          onClose={handleSnackbarClose}
        />
        <Slider
          defaultValue={getMarkValue(marks, mark)}
          marks={marks}
          min={MIN_STEP}
          max={MAX_STEP}
          valueLabelFormat={valueLabelFormat}
          getAriaValueText={(value) => String(value)}
          onChangeCommitted={handleStatusChange}
          onChange={handleSliderChange}
          value={getMarkValue(marks, statusValue)}
        />
      </Styled.DialogContent>
    </Styled.Dialog>
  );
};

export default EditStatusDialogComponent;
