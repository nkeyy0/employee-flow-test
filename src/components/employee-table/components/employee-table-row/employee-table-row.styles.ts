import {
  IconButton,
  styled,
  TableCell,
  TableRow,
  Typography,
} from '@material-ui/core';

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

const StyledTypography = styled(Typography)({
  width: '80px',
});

const StyledTableRow = styled(TableRow)({
  '&.grey': {
    backgroundColor: '#e0e0e0',
  },
});

export default {
  TableCell: TableColumn,
  EditButton,
  CellWrapper,
  TableRow: StyledTableRow,
  Typography: StyledTypography,
};
