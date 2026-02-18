
function Navbar() {

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="navbar">
      <span className="navbar-brand">Y.R</span>
      <div className="navbar-links">
        <button onClick={() => scrollToSection('home')}>Inicio</button>
        <button onClick={() => scrollToSection('projects')}>Proyectos</button>
        <button onClick={() => scrollToSection('experience')}>Experiencia</button>
        <button onClick={() => scrollToSection('estudios')}>Estudios</button>
        <button onClick={() => scrollToSection('skills')}>Skills</button>
      </div>
      <div className="navbar-right">
        <button className="lang-btn">ES</button>
      </div>
    </nav>
  );
}

export default Navbar;
