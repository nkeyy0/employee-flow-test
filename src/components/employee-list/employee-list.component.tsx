import React, { FC } from 'react';
import useEmployeeList from '../../hooks/useEmployeeList';
import { EmployeeTable } from '../employee-table';

const EmployeeListComponent: FC = () => {
  const [rows, loading, error] = useEmployeeList();
  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Something went wrong</div>;
  }
  return <EmployeeTable rows={rows} />;
};

export default EmployeeListComponent;
