// src/App.jsx
import { HashRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';

function App() {
  return (
    <Routes >
      <Route path="/" element={<Home />} />
    </Routes >
  );
}

export default App;
