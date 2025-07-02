// src/pages/Home.jsx
import Navbar from "../components/Navbar";
import Project from "../components/Project";
import TimelineItem from '../components/TimelineItem';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiDocumentText } from 'react-icons/hi';

export default function Home() {
    return (
        <>
            <Navbar />
            <section id="home" className="section">
                <h1>Hola, soy Yago Rueda.<br/>
                    Estudiante de Ingeniería Informatica apasionado por el desarrollo  software
                </h1>
                <div className="social-links">
                    <a id="github" href="https://github.com/Yago-Rueda-24" target="_blank" rel="noopener noreferrer"><FaGithub size={24} /> </a>
                    <a id="linkedin" href="https://www.linkedin.com/in/yago-rueda-carrilero-4b6043319/" target="_blank" rel="noopener noreferrer"><FaLinkedin size={24} /> </a>
                    <a id="CV" href=""><HiDocumentText size={24} /> </a>
                </div>

                <h2>Sobre Mi</h2>
                <p>Soy un estudiante de Ingeniería Informática con una gran pasión por el desarrollo de software y la tecnología.<br />
                    Disfruto aprender nuevas herramientas y seguir mejorando cada día, tanto en lo técnico como en lo personal.<br />
                    Me defino como una persona curiosa, constante y con ganas de aportar valor real en cada proyecto.<br />
                    <br />

                    🎯 Actualmente enfocado en el desarrollo backend con java springboot.
                </p>
                <h2> Stack Tecnológico</h2>
                <p>Estas son algunas de las tecnologías con las que suelo trabajar:</p>
                <ul className="tech-stack">
                    <li>Java</li>
                    <li>Spring Boot</li>
                    <li>Python</li>
                    <li>JavaScript</li>
                    <li>HTML5/CSS3</li>
                    <li>MySQL</li>
                    <li>Git/GitHub</li>
                </ul>

            </section>



            <section id="estudios" className="section">
                <h1>Estudios</h1>
                <p>Información sobre mi experiencia.</p>

                <TimelineItem
                    year="2022–2026"
                    title="Grado en Ingeniería Informática"
                    institution="Escuela Politecnica de Gijón"
                    description="Estudios de grado en Ingeniería Informática, conocimientos en programación, bases de datos, redes y desarrollo de software"
                />

            </section>

            <section id="projects" className="section">
                <h1>Proyectos</h1>
                <p>Estos son algunos de los proyectos que he desarrollado para aprender, mejorar y aplicar mis conocimientos en programación.</p>
                <div className="projects-grid">
                    <Project title={"Workoutbuddy"} description={"Un gestor de entrenamiento que ayuda a los usuarios a organizar sus entrenamientos y medir su progreso." +
                        "Esta desarrollado como un servicio web que usa HTML5 para el frontend, java spring para el backend y mysql como base de datos"}
                        github={"https://github.com/Yago-Rueda-24/WorkoutBuddy"}
                    />
                    <Project title={"PasswordFury"} description={"Un gestor de contraseñas que permite a los usuarios almacenar y gestionar sus contraseñas de forma segura." +
                        "Desarrollado como una aplicación de escritorio usando java para la programación y JavaFX en la interfaz de usuario"}
                        github={"https://github.com/Yago-Rueda-24/PassWordFuryV2"}
                    />
                    <Project title={"botDiscord"} description={"Un bot de Discord que permite a los usuarios interactuar con la aplicación y realizar diversas acciones." +
                        "Desarrollado como una aplicación de consola usando Python junto con la librería discord.py para la interacción con la API de Discord"}
                        github={"https://github.com/Yago-Rueda-24/botDiscord"}

                    />
                </div>
            </section>

            <section id="contact" className="section">
                <h1>Contacto</h1>
                <p>Si quieres ponerte en contacto conmigo, puedes rellenar el siguiente formulario y te responderé lo antes posible.</p>

                <form className="contact-form">
                    <label>
                        Nombre:
                        <input type="text" name="name" required placeholder="Jonh Doe" />
                    </label>
                    <label>
                        Email:
                        <input type="email" name="email" required placeholder="john@email.com" />
                    </label>
                    <label>
                        Mensaje:
                        <textarea name="message" rows="4" required placeholder="Tu mensaje..." ></textarea>
                    </label>
                    <button className="form-button" type="submit">Enviar</button>
                </form>
            </section>
        </>
    );
}
