import { Typography } from '@material-ui/core';
import React, { FC } from 'react';
import Styled from './error.styles';

const ErrorComponent: FC = () => (
  <Styled.ErrorWrapper>
    <Typography variant="h3" color="error">
      Something went wrong
    </Typography>
  </Styled.ErrorWrapper>
);

export default ErrorComponent;
