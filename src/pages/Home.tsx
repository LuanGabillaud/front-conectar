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
                subheader="Selecione um usuário para ver mais detalhes"
                title="Clientes"
                word={<TableComponent />}
                wordType="Variação"
                description='Você pode passar qualquer conteúdo que precisar aqui.'
                actions={<Button size="small">Outra Ação</Button>}
            />
        </div>
    )
}
