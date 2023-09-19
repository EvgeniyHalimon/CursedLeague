import { FC } from 'react';
import { Navigate, Outlet } from 'react-router';

interface IProtecedRoute{
  user: string | null,
}

const ProtectedRoute: FC<IProtecedRoute> = ({ user }) => {
  if (!user) {
    return <Navigate to='/' replace />;
  }
  
  return <Outlet />;
};

export { ProtectedRoute };
