import { styled } from '@material-ui/core';

const ProgressWrapper = styled('div')({
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
});

export const ParentWrapper = styled('div')({
  width: '100%',
  height: '100%',
  position: 'fixed',
  top: 0,
  left: 0,
  overflow: 'auto',
});

export default { ProgressWrapper, ParentWrapper };
