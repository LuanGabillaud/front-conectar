import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import NotificationsIcon from '@mui/icons-material/Notifications';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import Container from '@mui/material/Container';
import Tooltip from '@mui/material/Tooltip';
import conectarLogo from '../assets/logo-conectar-white.svg';

// Importações dos componentes de Tabs do Material-UI
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { Outlet } from 'react-router-dom';

// O componente CustomTabPanel e a função a11yProps
interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

function CustomTabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    {children}
                </Box>
            )}
        </div>
    );
}

function a11yProps(index: number) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

// Sub-componente para as abas internas
function ClientTabs() {
    // Estado para as abas internas
    const [subValue, setSubValue] = React.useState(0);

    const handleSubChange = (event: React.SyntheticEvent, newValue: number) => {
        setSubValue(newValue);
    };

    return (
        <Box sx={{ flexGrow: 0, backgroundColor: '#dddcdcff', margin: -3 }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider', backgroundColor: '#FFFFFF' }}>
                <Tabs value={subValue} onChange={handleSubChange} aria-label="sub tabs example" sx={{
                    '.MuiTabs-indicator': {
                        backgroundColor: '#000000ff',
                    },
                    '.MuiTab-root': {
                        color: 'gray',
                        '&.Mui-selected': {
                            color: '#000000ff',
                            fontWeight: 'bold'
                        },
                    }
                }}>
                    <Tab label="Dados Básicos" {...a11yProps(0)} />
                    <Tab label="Dados Adicionais" {...a11yProps(1)} disabled />
                </Tabs>
            </Box>
            <CustomTabPanel value={subValue} index={0}>
                <Outlet />
            </CustomTabPanel>
            <CustomTabPanel value={subValue} index={1}>
                <Typography variant="h6">Conteúdo da aba: Dados Adicionais</Typography>
                {/* O conteúdo real para Dados Adicionais irá aqui */}
            </CustomTabPanel>
        </Box>
    );
}

export default function NavbarComponent() {
    // Estado para as abas principais
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ flexGrow: 1 }}>
            {/* AppBar - A barra de navegação superior */}
            <AppBar position="static" sx={{ backgroundColor: '#39AF78' }}>
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        <img src={conectarLogo} className="logo-navbar" />
                        <Typography
                            variant="h6"
                            noWrap
                            component="a"
                            href="#"
                            sx={{
                                mr: 2,
                                display: { xs: 'none', md: 'flex' },
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                color: 'inherit',
                                textDecoration: 'none',
                                flexGrow: 1
                            }}
                        />
                        {/* Abas principais dentro da Toolbar */}
                        <Box sx={{ borderBottom: 0, borderColor: 'divider', flexGrow: 30 }}>
                            <Tabs value={value} onChange={handleChange} aria-label="main tabs example" sx={{
                                '.MuiTabs-indicator': {
                                    backgroundColor: '#FFFFFF', // Cor do indicador
                                },
                                '.MuiTab-root': {
                                    color: 'gray', // Cor padrão do texto
                                    '&.Mui-selected': {
                                        color: '#ffffffff',
                                        fontWeight: 'bold'
                                    },
                                }
                            }}>
                                <Tab label="Clientes" {...a11yProps(0)} />
                                {/* <Tab label="Configurações" {...a11yProps(1)} /> */}
                            </Tabs>
                        </Box>
                        <Box sx={{ flexGrow: 0 }}>
                            <Tooltip title="Ajuda">
                                <IconButton sx={{ p: 0, color: 'white', marginRight: 2 }}>
                                    <HelpOutlineIcon />
                                </IconButton>
                            </Tooltip>
                        </Box>
                        <Box sx={{ flexGrow: 0 }}>
                            <Tooltip title="Notificações">
                                <IconButton sx={{ p: 0, color: 'white', marginRight: 2 }}>
                                    <NotificationsIcon />
                                </IconButton>
                            </Tooltip>
                        </Box>
                        <Box sx={{ flexGrow: 0 }}>
                            <Tooltip title="Log Out">
                                <IconButton sx={{ p: 0, color: 'white' }}>
                                    <LogoutOutlinedIcon />
                                </IconButton>
                            </Tooltip>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>

            {/* Conteúdo que será exibido em cada aba principal */}
            <CustomTabPanel value={value} index={0}>
                <ClientTabs />
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
                <Typography variant="h6">Conteúdo da aba: Configurações</Typography>
                {/* Outro conteúdo para a aba Configurações */}
            </CustomTabPanel>
        </Box>
    );
}

