import { FC } from 'react';
import { Navigate, Outlet } from 'react-router';

interface IProtectedRoute{
  user: string | null,
}

const ProtectedRoute: FC<IProtectedRoute> = ({ user }) => {
  if (!user) {
    return <Navigate to='/' replace />;
  }
  
  return <Outlet />;
};

export { ProtectedRoute };
