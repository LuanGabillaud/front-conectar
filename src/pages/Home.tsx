import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TableComponent from '../components/TableComponent';
// import { CardMedia } from '@mui/material';
// import '../App.css'

// 1. Interface de props para o componente, definindo os tipos de dados esperados
interface CardComponentProps {
    title: string;
    subheader: string;
    word: string;
    wordType: string;
    description: string;
    actions?: React.ReactNode;
}

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
  { id: 1, company_name: 'João Silva', cnpj: 'Engenharia', facade_name: 12000, tags: '', status: 'inativo', conecta_plus: 'Não' },
  { id: 2, company_name: 'Maria Souza', cnpj: 'Marketing', facade_name: 8500, tags: '', status: 'inativo', conecta_plus: 'Não' },
  { id: 3, company_name: 'Carlos Santos', cnpj: 'Vendas', facade_name: 9800, tags: '', status: 'inativo', conecta_plus: 'Não' },
  { id: 4, company_name: 'Ana Costa', cnpj: 'RH', facade_name: 7200, tags: '', status: 'inativo', conecta_plus: 'Não' },
  { id: 5, company_name: 'Pedro Martins', cnpj: 'Engenharia', facade_name: 13500, tags: '', status: 'inativo', conecta_plus: 'Não' },
];

const employeeColumns: ColumnData[] = [
  {
    width: 200,
    label: 'Razão Social',
    dataKey: 'company_name',
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
  },
  {
    width: 100,
    label: 'Tags',
    dataKey: 'tags',
  },
  {
    width: 100,
    label: 'Status',
    dataKey: 'status',
  },
  {
    width: 150,
    label: 'Conecta Plus',
    dataKey: 'conecta_plus',
    numeric: true,
  },
];

// 2. Componente refatorado para ser genérico, recebendo as props
function CardComponent({ title, subheader, word, wordType, description, actions }: CardComponentProps) {

    // A lógica para o bullet point pode ser mantida aqui
    const bull = (
        <Box
            component="span"
            sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
        >
            •
        </Box>
    );

    // 3. Renderizando o card com os dados passados pelas props
    return (
        <Card sx={{ minWidth: 275 }}>
            <CardContent>
                <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
                    {subheader}
                </Typography>
                <Typography variant="h5" component="div">
                    {word}
                </Typography>
                <Typography sx={{ color: 'text.secondary', mb: 1.5 }}>{wordType}</Typography>
                <Typography variant="body2">
                    {description}
                </Typography>
            </CardContent>
            {actions && <CardActions>{actions}</CardActions>}
        </Card>
    );
}

// O seu componente Home, ajustado para usar o CardComponent de forma reutilizável.
export default function Home() {
    return (
        <div style={{ padding: '10px', display: 'flex', gap: '20px', flexDirection: 'column' }}>
            {/* Exemplo de uso do CardComponent dentro do seu componente Home */}
            <CardComponent
                subheader="FILTRO"
                title="Título do Card"
                word="Filtro"
                wordType="Tipo"
                description='Esta é uma descrição genérica para demonstrar a reutilização.'
                actions={<Button size="small">Ação</Button>}
            />
            <CardComponent
                subheader="Clientes"
                word={<TableComponent data={employees} columns={employeeColumns} />}
            />
        </div>
    )
}
