// import * as React from 'react';
import Button from '@mui/material/Button';
import TableComponent from '../components/TableComponent';
import CardComponent from '../components/CardComponent';
import FiltroComponent from '../components/FiltroComponent';
// import '../App.css'

interface ColumnData {
    dataKey: string;
    label: string;
    numeric?: boolean;
    width?: number;
}

// Dados de exemplo para a tabela
const employees = [
    { id: 1, company_name: 'João Silva', cnpj: '11.111.111/0001-11', facade_name: 'JS Comércio', tags: '', status: 'ativo', conecta_plus: 'Sim' },
    { id: 2, company_name: 'Maria Souza', cnpj: '22.222.222/0002-22', facade_name: 'MS Loja', tags: '', status: 'inativo', conecta_plus: 'Não' },
    { id: 3, company_name: 'Carlos Santos', cnpj: '33.333.333/0003-33', facade_name: 'CS Serviços', tags: '', status: 'ativo', conecta_plus: 'Sim' },
    { id: 4, company_name: 'Ana Costa', cnpj: '44.444.444/0004-44', facade_name: 'AC Consultoria', tags: '', status: 'ativo', conecta_plus: 'Não' },
    { id: 5, company_name: 'Pedro Martins', cnpj: '55.555.555/0005-55', facade_name: 'PM Engenharia', tags: '', status: 'inativo', conecta_plus: 'Não' },
    { id: 6, company_name: 'João Pedro', cnpj: '11.111.111/0001-11', facade_name: 'JS Comércio', tags: '', status: 'ativo', conecta_plus: 'Sim' },
    { id: 7, company_name: 'Maria Clara', cnpj: '22.222.222/0002-22', facade_name: 'MS Loja', tags: '', status: 'inativo', conecta_plus: 'Não' },
    { id: 8, company_name: 'Carlos Dumont', cnpj: '33.333.333/0003-33', facade_name: 'CS Serviços', tags: ', tag3', status: 'ativo', conecta_plus: 'Sim' },
    { id: 9, company_name: 'Ana Costa', cnpj: 'RH', facade_name: 7200, tags: '', status: 'inativo', conecta_plus: 'Não' },
    { id: 10, company_name: 'Pedro Martins', cnpj: 'Engenharia', facade_name: 13500, tags: '', status: 'inativo', conecta_plus: 'Não' },
    { id: 11, company_name: 'João Silva', cnpj: 'Engenharia', facade_name: 12000, tags: '', status: 'inativo', conecta_plus: 'Não' },
    { id: 12, company_name: 'Maria Souza', cnpj: 'Marketing', facade_name: 8500, tags: '', status: 'inativo', conecta_plus: 'Não' },
    { id: 13, company_name: 'Carlos Santos', cnpj: 'Vendas', facade_name: 9800, tags: '', status: 'inativo', conecta_plus: 'Não' },
    { id: 14, company_name: 'Ana Costa', cnpj: 'RH', facade_name: 7200, tags: '', status: 'inativo', conecta_plus: 'Não' },
    { id: 15, company_name: 'Pedro Martins', cnpj: 'Engenharia', facade_name: 13500, tags: '', status: 'inativo', conecta_plus: 'Não' },
    { id: 16, company_name: 'João Silva', cnpj: 'Engenharia', facade_name: 12000, tags: '', status: 'inativo', conecta_plus: 'Não' },
    { id: 17, company_name: 'Maria Souza', cnpj: 'Marketing', facade_name: 8500, tags: '', status: 'inativo', conecta_plus: 'Não' },
    { id: 18, company_name: 'Carlos Santos', cnpj: 'Vendas', facade_name: 9800, tags: '', status: 'inativo', conecta_plus: 'Não' },
    { id: 19, company_name: 'Ana Costa', cnpj: 'RH', facade_name: 7200, tags: '', status: 'inativo', conecta_plus: 'Não' },
    { id: 20, company_name: 'Pedro Martins', cnpj: 'Engenharia', facade_name: 13500, tags: '', status: 'inativo', conecta_plus: 'Não' },
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

// O seu componente Home, ajustado para usar o CardComponent de forma reutilizável.
export default function Home() {
    return (
        <div style={{ padding: '10px', display: 'flex', gap: '20px', flexDirection: 'column' }}>
            {/* Exemplo de uso do CardComponent dentro do seu componente Home */}
            <CardComponent
                word={<FiltroComponent />}
            />
            <CardComponent
                title="Clientes"
                subheader="Selecione um usuário para editar suas informações"
                botao={<Button variant="outlined" color="inherit" sx={{ textTransform: "none", fontWeight: "bold" }}>Novo</Button>}
                word={<TableComponent data={employees} columns={employeeColumns} />}
            />
        </div>
    )
}
