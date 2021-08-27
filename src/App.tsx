import { CssBaseline, Typography } from '@material-ui/core';
import React from 'react';
import { AppContainer } from './common/styles/app.styles';
import { EmployeeList } from './components/employee-list';

function App() {
  return (
    <CssBaseline>
      <AppContainer maxWidth="xl">
        <Typography variant="h3">Employees</Typography>
        <EmployeeList />
      </AppContainer>
    </CssBaseline>
  );
}

export default App;
