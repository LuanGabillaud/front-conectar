import * as React from 'react';
import {
    Box,
    Button,
    FormControl,
    IconButton,
    OutlinedInput,
    InputAdornment,
    TextField
} from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

import '../css/Login.css';
import { Link } from 'react-router-dom';

export default function Register() {
    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

    const handleMouseUpPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

    return (
        <Box sx={{ width: 500, maxWidth: '100%' }}>
            <div>
                <label className="label-style">Nome</label>
                <TextField fullWidth id="fullWidth" sx={{ mb: 2 }} />

                <label className="label-style">Email</label>
                <TextField fullWidth id="fullWidth" sx={{ mb: 2 }} />

                <label className="label-style">Senha</label>
                <FormControl fullWidth variant="outlined" sx={{ mb: 2 }}>
                    <OutlinedInput
                        id="outlined-adornment-password"
                        type={showPassword ? 'text' : 'password'}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label={
                                        showPassword ? 'hide the password' : 'display the password'
                                    }
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                    onMouseUp={handleMouseUpPassword}
                                    edge="end"
                                >
                                    {showPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                        }
                    />
                </FormControl>

                <label className="label-style">Confirmar senha</label>
                <FormControl fullWidth variant="outlined" sx={{ mb: 2 }}>
                    <OutlinedInput
                        id="outlined-adornment-password"
                        type={showPassword ? 'text' : 'password'}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label={
                                        showPassword ? 'hide the password' : 'display the password'
                                    }
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                    onMouseUp={handleMouseUpPassword}
                                    edge="end"
                                >
                                    {showPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                        }
                    />
                </FormControl>
                <Button fullWidth variant="contained" sx={{ backgroundColor: "#39AF78", textTransform: "none", fontWeight: "bold" }}>Registrar</Button>

                <p className="p-card">
                    Já tem um cadastro? Então vá para <Link to="/login" className="link-style">Login</Link>
                </p>
            </div>
        </Box>
    );
}
