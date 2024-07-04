// src/App.tsx
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './pages/login';
import Posts from './pages/Posts';




function App() {
  return (
      <div className="App">
        <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/post" element={<Posts/>} />
        </Routes>
      </div>
  );
}

export default App;
