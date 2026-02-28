import { lazy, Suspense} from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import ErrorBoundary from './components/ErrorBoundary';
import ErrorFallback from './components/ErrorFallback';
import LoadingSpinner from './components/LoadingSpinner';

const Dashboard = lazy(() => import('./pages/Dashboard'));
const Settings = lazy(() => import('./pages/Settings'));
const Profile = lazy(() => import('./pages/Profile'));


function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link> | 
        <Link to="/dashboard">Dashboard</Link> | 
        <Link to="/settings">Settings</Link> | 
        <Link to="/profile">Profile</Link>
      </nav>

      <ErrorBoundary fallback={<ErrorFallback />}>
        {/* Обертка для показа индикатора загрузки */}
        <Suspense fallback={<LoadingSpinner />}>
          <Routes>
            <Route path="/" element={<h1>Welcome to Dashboard App</h1>} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </Suspense>
      </ErrorBoundary>  
    </BrowserRouter>
  );
}

export default App;