import { Container, CssBaseline } from '@material-ui/core';
import React from 'react';
import { EmployeeList } from './components/employee-list';

function App() {
  return (
    <CssBaseline>
      <Container maxWidth="xl">
        <EmployeeList />
      </Container>
    </CssBaseline>
  );
}

export default App;
