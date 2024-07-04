// src/App.tsx
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './pages/login';
import Posts from './pages/Posts';
import OpenRoute from './components/auth/OpenRoute';
import PrivateRoute from './components/auth/privateroute';





function App() {
  return (
      <div className="App">
        <Routes>
        <Route path="/" element={
          <OpenRoute>
          <Login/>
          </OpenRoute>
          } />
        <Route path="/post" element={
          <PrivateRoute>
           <Posts/>
          </PrivateRoute>
          } />
        </Routes>
      </div>
  );
}

export default App;
