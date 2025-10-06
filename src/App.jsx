// src/App.jsx
import { HashRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';

function App() {
  return (
    <HashRouter>
      <Routes Routes >
        <Route path="/" element={<Home />} />
      </Routes >
    </HashRouter >
  );
}

export default App;
