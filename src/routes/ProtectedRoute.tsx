// import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

// Esta é uma função de exemplo. Em uma aplicação real, você verificaria
// um token no localStorage, um estado global (Context API, Redux), etc.
const useAuth = () => {
  // Para este exemplo, vamos simular que o usuário não está logado.
  // Mude para `true` para ver a rota protegida.
  const user = { loggedIn: true }; 
  return user && user.loggedIn;
};

const ProtectedRoute = () => {
  const isAuth = useAuth();
  
  // Se estiver autenticado, o <Outlet> vai renderizar o componente filho (MainLayout).
  // Se não, ele navega para a página de login, substituindo a rota atual no histórico.
  return isAuth ? <Outlet /> : <Navigate to="/login" replace />;
};

export default ProtectedRoute;