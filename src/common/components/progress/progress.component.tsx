import { CircularProgress } from '@material-ui/core';
import React, { FC } from 'react';
import Styled from './progress.styles';

const ProgressComponent: FC = () => (
  <Styled.ProgressWrapper>
    <CircularProgress />
  </Styled.ProgressWrapper>
);

export default ProgressComponent;
