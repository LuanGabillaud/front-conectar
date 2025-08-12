import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Typography } from '@mui/material';

// Interfaces genéricas para os dados
interface GenericData {
  [key: string]: any;
}

interface ColumnData {
  dataKey: string;
  label: string;
  numeric?: boolean;
  width?: number;
}

// Dados de exemplo para a tabela
const employees = [
  { id: 1, razao_social: 'João Silva', cnpj: 'Engenharia', facade_name: 12000 },
  { id: 2, razao_social: 'Maria Souza', cnpj: 'Marketing', facade_name: 8500 },
  { id: 3, razao_social: 'Carlos Santos', cnpj: 'Vendas', facade_name: 9800 },
  { id: 4, razao_social: 'Ana Costa', cnpj: 'RH', facade_name: 7200 },
  { id: 5, razao_social: 'Pedro Martins', cnpj: 'Engenharia', facade_name: 13500 },
];

const employeeColumns: ColumnData[] = [
  {
    width: 200,
    label: 'Razão Social',
    dataKey: 'razao_social',
  },
  {
    width: 100,
    label: 'CNPJ',
    dataKey: 'cnpj',
  },
  {
    width: 150,
    label: 'Nome da Fachada',
    dataKey: 'facade_name',
    numeric: true,
  },
];

// O componente TableComponent refatorado para ser genérico
interface TableComponentProps {
    data: GenericData[];
    columns: ColumnData[];
}

export default function TableComponent({ data, columns }: TableComponentProps) {
  return (
    <Paper style={{ height: 400, width: '100%' }}>
      <TableContainer style={{ maxHeight: 400 }}>
        <Table aria-label="sticky table">
          <TableHead sx={{backgroundColor: "#60dbd14d"}}>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.dataKey}
                  align={column.numeric || false ? 'right' : 'left'}
                  style={{ minWidth: column.width }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row) => (
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
    </Paper>
  );
}

// Exemplo de como usar a tabela genérica
export function ExampleTableUsage() {
    return (
        <div style={{ padding: '20px' }}>
            <Typography variant="h5" gutterBottom>Tabela de Funcionários</Typography>
            <TableComponent data={employees} columns={employeeColumns} />
        </div>
    );
}