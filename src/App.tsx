import { useRoutes, Navigate } from 'react-router-dom';
import { useAuth } from './context/AuthContext';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import NotFound from './pages/NotFound';

function App() {
  const { isAuthenticated } = useAuth();

  const routes = [
    {
      path: '/',
      element: isAuthenticated ? <Dashboard /> : <Navigate to="/login" />,
    },
    {
      path: '/login',
      element: isAuthenticated ? <Navigate to="/" /> : <Login />,
    },
    {
      path: '*',
      element: <NotFound />,
    },
  ];

  const routing = useRoutes(routes);

  return routing;
}

export default App;
