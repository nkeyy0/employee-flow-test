import React, { FC } from 'react';
import { Error } from '../../common/components/error';
import { Progress } from '../../common/components/progress';
import useEmployeeList from '../../hooks/use-employee-list.hook';
import { EmployeeTable } from '../employee-table';

const EmployeeListComponent: FC = () => {
  const [rows, loading, error] = useEmployeeList();
  if (loading) {
    return <Progress />;
  }
  if (error) {
    return <Error />;
  }
  return <EmployeeTable rows={rows} />;
};

export default EmployeeListComponent;
