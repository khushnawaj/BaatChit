import { Routes, Route, Navigate } from 'react-router-dom';
import LandingPage from '../pages/LandingPage';
import Login from '../pages/Login';
import Register from '../pages/Register';
import ChatPage from '../pages/ChatPage';
import Profile from '../pages/Profile';
import NotFound from '../pages/NotFound';

function App() {
  const user = JSON.parse(localStorage.getItem('baatchitUser'));

  return (
    <Routes>
      {/* Show landing page to unauthenticated users, redirect to chat if logged in */}
      <Route 
        path="/" 
        element={user ? <Navigate to="/chat" replace /> : <LandingPage />} 
      />
      
      {/* Auth routes */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      
      {/* Protected routes */}
      <Route 
        path="/chat" 
        element={user ? <ChatPage /> : <Navigate to="/login" replace />} 
      />
      <Route 
        path="/profile" 
        element={user ? <Profile /> : <Navigate to="/login" replace />} 
      />
      
      {/* Catch-all route */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;