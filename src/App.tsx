import { Route, Routes } from 'react-router';

import './App.scss';
import { Layout } from './components';
import { Home, ProtectedRoute } from './pages';

function App() {
  return (
    <Routes>
      <Route element={<Layout/>}>
        <Route path='/' element={<Home />}/>
        <Route element={<ProtectedRoute user={'user'}/>}> {/* in prop 'user' we will set accessToken as sign that user we authenticated */}
          {/* protected routes */}
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
