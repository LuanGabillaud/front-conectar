import * as React from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion, { type AccordionProps } from '@mui/material/Accordion';
import MuiAccordionSummary, {
    type AccordionSummaryProps,
    accordionSummaryClasses,
} from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import SearchIcon from '@mui/icons-material/Search';
import Typography from '@mui/material/Typography';
import { Button, FormControl, Grid, MenuItem, Select, TextField, type SelectChangeEvent } from '@mui/material';

const Accordion = styled((props: AccordionProps) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
    border: `0px solid ${theme.palette.divider}`,
    '&:not(:last-child)': {
        borderBottom: 0,
    },
    '&::before': {
        display: 'none',
    },
}));

const AccordionSummary = styled((props: AccordionSummaryProps) => (
    <MuiAccordionSummary
        expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem', color: '#39AF78' }} />}
        {...props}
    />
))(({ theme }) => ({
    backgroundColor: 'rgba(0, 0, 0, .03)',
    flexDirection: 'row',
    [`& .${accordionSummaryClasses.expandIconWrapper}.${accordionSummaryClasses.expanded}`]:
    {
        transform: 'rotate(90deg)',
    },
    [`& .${accordionSummaryClasses.content}`]: {
        marginLeft: theme.spacing(1),
    },
    ...theme.applyStyles('dark', {
        backgroundColor: 'rgba(255, 0, 0, 0.05)',
    }),
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: theme.spacing(2),
    borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

export default function FiltroComponent() {
    const [expanded, setExpanded] = React.useState<string | false>('panel1');

    const handleChange =
        (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
            setExpanded(newExpanded ? panel : false);
        }; const [age, setAge] = React.useState('');

    const handleChanger = (event: SelectChangeEvent) => {
        setAge(event.target.value);
    };

    return (
        <div>
            <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                <AccordionSummary aria-controls="panel1d-content" id="panel1d-header" sx={{ backgroundColor: '#d4d4d4ff' }}>
                    <SearchIcon sx={{ color: '#39AF78' }} />
                    <Typography component="span">
                        <div style={{ fontWeight: 'bold' }}>Filtros</div>
                        <div style={{ color: '#575757ff', fontSize: 12 }}>Filtre e busque por itens na página</div>
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Grid container spacing={10.5}>
                        <Grid>
                            <div className="label-style">Buscar por nome</div>
                            <TextField id="company_name" size='small' sx={{ mb: 2 }} />
                        </Grid>
                        <Grid>
                            <div className="label-style">Buscar por CNPJ</div>
                            <TextField id="cnpj" size='small' sx={{ mb: 2 }} />
                        </Grid>
                        <Grid>
                            <div className="label-style">Buscar por status</div>
                            <FormControl sx={{ mb: 2, minWidth: 120, width: 230 }} size="small">
                                <Select
                                    labelId="status"
                                    id="status"
                                    value={age}
                                    onChange={handleChanger}
                                >
                                    <MenuItem value="">
                                        <em>None</em>
                                    </MenuItem>
                                    <MenuItem value={10}>Ten</MenuItem>
                                    <MenuItem value={20}>Twenty</MenuItem>
                                    <MenuItem value={30}>Thirty</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid>
                            <div className="label-style">Buscar por conectar +</div>
                            <FormControl sx={{ mb: 2, minWidth: 120, width: 230 }} size="small">
                                <Select
                                    labelId="demo-select-small-label"
                                    id="demo-select-small"
                                    value={age}
                                    onChange={handleChanger}
                                >
                                    <MenuItem value="">
                                        <em>None</em>
                                    </MenuItem>
                                    <MenuItem value={10}>Ten</MenuItem>
                                    <MenuItem value={20}>Twenty</MenuItem>
                                    <MenuItem value={30}>Thirty</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                    </Grid>
                    <Grid container justifyContent="end">
                        <Button variant="outlined" sx={{ color: "#39AF78", borderColor: "#39AF78", textTransform: "none", fontWeight: "bold", mr: 2 }}>Limpar campos</Button>
                        <Button variant="contained" sx={{ backgroundColor: "#39AF78", textTransform: "none", fontWeight: "bold" }}>Filtrar</Button>
                    </Grid>
                </AccordionDetails>
            </Accordion>
        </div>
    );
}
