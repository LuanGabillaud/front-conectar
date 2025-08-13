import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
// import CardMedia from '@mui/material/CardMedia';

// 1. Interface de props para o componente, definindo os tipos de dados esperados
interface CardComponentProps {
    title?: string;
    subheader?: string;
    botao?: any;
    word?: string | React.ReactElement;
    wordType?: string;
    description?: string;
    actions?: React.ReactNode;
}

// 2. Componente refatorado para ser genérico, recebendo as props
export default function CardComponent({ title, subheader, botao, word, wordType, description, actions }: CardComponentProps) {

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
                <Typography gutterBottom sx={{ color: 'text.black', fontSize: 20, fontWeight: 'bold', textAlign: 'left' }}>
                    {title}
                </Typography>
                <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14, textAlign: 'left' }}>
                    {subheader}
                </Typography>
                <Typography gutterBottom sx={{ color: 'text.secondary', textAlign: 'right' }}>
                    {botao}
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

// 4. Exemplo de como usar o componente reutilizável em um App
function App() {
    return (
        <div style={{ padding: '20px', display: 'flex', gap: '20px' }}>
            {/* Exemplo 1: O card original, mas usando props */}
            <CardComponent
                subheader="Word of the Day"
                title="benevolent"
                word="bevolent"
                wordType="adjective"
                description='well meaning and kindly. "a benevolent smile"'
                actions={<Button size="small">Learn More</Button>}
            />

            {/* Exemplo 2: Um novo card com outro conteúdo, mas usando o mesmo componente */}
            <CardComponent
                subheader="Quote of the Day"
                title="Socrates"
                word="The only true wisdom is in knowing you know nothing."
                wordType="quote"
                description='Socrates (c. 470–399 BC)'
                actions={<Button size="small">Read the full quote</Button>}
            />
        </div>
    );
}
