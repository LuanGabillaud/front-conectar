import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { TablePagination } from '@mui/material';
import React from 'react';

interface GenericData {
  [key: string]: any;
}

interface ColumnData {
  dataKey: string;
  label: string;
  numeric?: boolean;
  width?: number;
}

// O componente TableComponent refatorado para ser genérico
interface TableComponentProps {
  data: GenericData[];
  columns: ColumnData[];
}

export default function TableComponent({ data, columns }: TableComponentProps) {

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  // Lógica para fatiar os dados com base na página e no número de linhas por página
  const paginatedData = data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);

  return (
    <Paper>
      <TableContainer style={{ maxHeight: 400 }}>
        <Table aria-label="sticky table">
          <TableHead sx={{ backgroundColor: "#60dbd14d" }}>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.dataKey}
                  align={column.numeric || false ? 'right' : 'left'}
                  style={{ minWidth: column.width, fontWeight: 'bold' }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {/* Mapeia sobre os dados paginados, não sobre todos os dados */}
            {paginatedData.map((row) => (
              <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
                {columns.map((column) => {
                  const value = row[column.dataKey];
                  return (
                    <TableCell key={column.dataKey} align={column.numeric || false ? 'right' : 'left'}>
                      {value}
                    </TableCell>
                  );
                })}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={data.length} // Usa o comprimento total dos dados passados pela prop
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
