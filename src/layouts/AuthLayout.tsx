import { Outlet } from 'react-router-dom';
import conectarLogo from '../assets/logo-conectar-white.svg'
import '../css/AuthLayout.css';

const AuthLayout = () => {
    return (
        <div className="auth-container">
            <img src={conectarLogo} className="logo-style" alt="React logo" />
            <div className="auth-card">
                <main className="auth-content">
                    <Outlet />
                </main>
            </div>
        </div>
    );
};

export default AuthLayout;