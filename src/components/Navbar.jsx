import { useNavigate, useLocation, Link } from 'react-router-dom';

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavClick = (id) => {
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const section = document.getElementById(id);
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <nav className="navbar">
      <Link to="/" className="navbar-brand">Y.R</Link>
      <div className="navbar-links">
        <button onClick={() => handleNavClick('home')}>Inicio</button>
        <button onClick={() => handleNavClick('projects')}>Proyectos</button>
        <button onClick={() => handleNavClick('experience')}>Experiencia</button>
        <button onClick={() => handleNavClick('estudios')}>Estudios</button>
        <button onClick={() => handleNavClick('skills')}>Skills</button>
        <button onClick={() => handleNavClick('contacto')}>Contacto</button>
      </div>
      <div className="navbar-right">
        <button className="lang-btn">ES</button>
      </div>
    </nav>
  );
}

export default Navbar;

