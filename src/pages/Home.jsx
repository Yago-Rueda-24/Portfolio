// src/pages/Home.jsx
import Navbar from "../components/Navbar";
import Project from "../components/Project";
export default function Home() {
    return (
        <>
            <Navbar />
            <section id="home" className="section">
                <h1>Inicio</h1>
                <p>Bienvenido a mi portfolio.</p>
            </section>

            <section id="about" className="section">
                <h1>Sobre mí</h1>
                <p>Información sobre mi experiencia.</p>
            </section>

            <section id="projects" className="section">
                <h1>Proyectos</h1>
                <p>Estos son algunos de los proyectos que he desarrollado para aprender, mejorar y aplicar mis conocimientos en programación.</p>
                <div className="projects-grid">
                    <Project title={"Workoutbuddy"} description={"Un gestor de entrenamiento que ayuda a los usuarios a organizar sus entrenamientos y medir su progreso."+ 
                        "Esta desarrollado como un servicio web que usa HTML5 para el frontend, java spring para el backend y mysql como base de datos"}
                    github={"https://github.com/Yago-Rueda-24/WorkoutBuddy"}    
                    />
                    
                </div>
            </section>

            <section id="contact" className="section">
                <h1>Contacto</h1>
                <p>Email, redes sociales...</p>
            </section>
        </>
    );
}
