import { EmployeeStatus } from '../constants/employee-status.enum';

export interface Employee {
  id: string;
  firstName: string;
  lastName: string;
  company: string;
  status: EmployeeStatus;
  createdAt: string;
}
