import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';

// Importe seus componentes
import AuthLayout from '../layouts/AuthLayout';
import MainLayout from '../layouts/MainLayout';
import Home from '../pages/Home';
import Register from '../pages/Register';
import Login from '../pages/Login';
import Profile from '../pages/Profile';
import NotFound404 from '../pages/NotFound404';
import ProtectedRoute from './ProtectedRoute';
// (Opcional) Crie uma página de erro
// import PaginaErro from './pages/PaginaErro';

// Crie o objeto de rotas
const router = createBrowserRouter([
    {
        path: "/",
        element: <Navigate to="/login" replace />,
        errorElement: <NotFound404 />,
    },
    {
        path: "/",
        element: <AuthLayout />,
        errorElement: <NotFound404 />,
        children: [
            {
                path: "login",
                element: <Login />,
            },
            {
                path: "register",
                element: <Register />,
            },
        ],
    },
    {
        path: "/",
        element: <ProtectedRoute />,
        errorElement: <NotFound404 />,
        children: [
            {
                path: "/",
                element: <MainLayout />,
                errorElement: <NotFound404 />,
                children: [
                    {
                        path: "/home",
                        element: <Home />,
                    },
                    {
                        path: "/Profile",
                        element: <Profile />,
                    },
                ],
            }
        ]
    },
    {
        path: "*",
        element: <NotFound404 />,
    }
]);


function App() {
    return (
        <RouterProvider router={router} />
    );
}

export default App;