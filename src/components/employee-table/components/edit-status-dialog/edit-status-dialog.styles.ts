import { Dialog, DialogContent, styled } from '@material-ui/core';

const DialogTitle = styled('div')({
  display: 'flex',
  margin: '20px',
  justifyContent: 'space-between',
  alignItems: 'center',
});

const StyledDialog = styled(Dialog)({
  width: '100%',
  padding: '40px',
});

const StyledDialogContent = styled(DialogContent)(
  ({ theme: { breakpoints } }) => ({
    padding: '40px',
    [breakpoints.down('sm')]: {
      '& > span .MuiSlider-markLabel': {
        fontSize: '0.725rem',
      },
    },
  }),
);

export default {
  DialogTitle,
  Dialog: StyledDialog,
  DialogContent: StyledDialogContent,
};
