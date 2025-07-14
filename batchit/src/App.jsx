import { Routes, Route, Navigate } from 'react-router-dom';
import Login from '../pages/Login';
import Register from '../pages/Register';
import ChatPage from '../pages/ChatPage';
import Profile from '../pages/Profile';
import NotFound from '../pages/NotFound';

function App() {
  const user = JSON.parse(localStorage.getItem('baatchitUser'));

  return (
    <Routes>
      <Route path="/" element={<Navigate to={user ? '/chat' : '/login'} />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/chat" element={user ? <ChatPage /> : <Navigate to="/login" />} />
      <Route path="/profile" element={user ? <Profile /> : <Navigate to="/login" />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
