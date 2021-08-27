import { Mark } from '@material-ui/core';
import { EmployeeStatus } from '../../../../common/constants/employee-status.enum';

export const marks: Mark[] = [
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

export const MIN_STEP = 0;
export const MAX_STEP = 4;
export const ERROR_MESSAGE = 'Something went wrong';
export const NOTIFICATION_DURATION = 2000;
