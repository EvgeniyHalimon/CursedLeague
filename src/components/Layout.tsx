import { FC } from 'react';
import { Outlet } from 'react-router';

const Layout: FC = () => {
  return (
    <div className='layout' role='layout'>
      <Outlet/>
    </div>
  );
};
  
export { Layout };