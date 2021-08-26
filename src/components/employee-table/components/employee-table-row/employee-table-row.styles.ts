import { IconButton, styled, TableCell } from '@material-ui/core';

const TableColumn = styled(TableCell)({
  display: 'flex',
  flexDirection: 'row',
});

const EditButton = styled(IconButton)({
  marginLeft: '10px',
});

const CellWrapper = styled('div')({
  display: 'flex',
  alignItems: 'center',
});

export default {
  TableCell: TableColumn,
  EditButton,
  CellWrapper,
};
