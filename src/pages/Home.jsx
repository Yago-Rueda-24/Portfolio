import { useState } from "react";
import Navbar from "../components/Navbar";
import TimelineItem from '../components/TimelineItem';
import TechStack from "../components/TechStack";
import BigProject from "../components/BigProject";
import { PROJECTS_DATA } from "../data/projectsData";
import { 
    FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt,
    FaRobot, FaBrain, FaNetworkWired, FaMicrochip, FaServer,
    FaKey, FaVial, FaProjectDiagram, FaFileAlt
} from 'react-icons/fa';

const SKILLS = [
    // 🤖 IA Aplicada
    { name: "Agentes de IA", category: "IA Aplicada", icon: <FaRobot /> },
    { name: "IA Agéntica", category: "IA Aplicada", icon: <FaBrain /> },
    { name: "MCP Protocol", category: "IA Aplicada", icon: <FaNetworkWired /> },
    { name: "Integración Multi-LLM", category: "IA Aplicada", icon: <FaMicrochip /> },

    // 💻 Lenguajes
    { name: "Java", category: "Lenguajes", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" },
    { name: "Python", category: "Lenguajes", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" },
    { name: "TypeScript", category: "Lenguajes", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" },
    { name: "JavaScript", category: "Lenguajes", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-plain.svg" },
    { name: "SQL", category: "Lenguajes", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" },

    // ⚙️ Backend
    { name: "Spring", category: "Backend", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg" },
    { name: "FastAPI", category: "Backend", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg" },
    { name: "NestJS", category: "Backend", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nestjs/nestjs-original.svg" },
    { name: "TypeORM", category: "Backend", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typeorm/typeorm-original.svg" },
    { name: "REST APIs", category: "Backend", icon: <FaServer /> },
    { name: "Autenticación & Auth", category: "Backend", icon: <FaKey /> },

    // 🎨 Frontend
    { name: "React", category: "Frontend", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
    { name: "React Native", category: "Frontend", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
    { name: "Electron", category: "Frontend", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/electron/electron-original.svg" },
    { name: "Tailwind CSS", category: "Frontend", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
    { name: "HTML5", category: "Frontend", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" },
    { name: "CSS", category: "Frontend", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" },

    // ☁️ Cloud & DB
    { name: "PostgreSQL", category: "Cloud & DB", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" },
    { name: "Azure (VMs)", category: "Cloud & DB", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azure/azure-original.svg" },
    { name: "Docker", category: "Cloud & DB", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" },
    { name: "GitHub Actions", category: "Cloud & DB", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/githubactions/githubactions-original.svg" },
    { name: "Linux", category: "Cloud & DB", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg" },
    { name: "Gestión de Logs", category: "Cloud & DB", icon: <FaFileAlt /> },

    // 🛠️ Calidad & Tools
    { name: "Testing (Unit/E2E)", category: "Calidad & Tools", icon: <FaVial /> },
    { name: "Git", category: "Calidad & Tools", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" },
    { name: "VS Code", category: "Calidad & Tools", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg" },
    { name: "Scrum", category: "Calidad & Tools", icon: <FaProjectDiagram /> }
];

export default function Home() {
    const [selectedCategory, setSelectedCategory] = useState("IA Aplicada");
    const [status, setStatus] = useState("idle"); // idle, sending, success, error

    const categories = ["IA Aplicada", "Lenguajes", "Backend", "Frontend", "Cloud & DB", "Calidad & Tools"];

    const filteredSkills = selectedCategory === "Todas" 
        ? SKILLS 
        : SKILLS.filter(skill => skill.category === selectedCategory);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("sending");

        const form = e.target;
        const data = new FormData(form);

        try {
            const response = await fetch(`https://formspree.io/f/${import.meta.env.VITE_FORMSPREE_ID}`, {
                method: 'POST',
                body: data,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                setStatus("success");
                form.reset();
            } else {
                setStatus("error");
            }
        } catch (error) {
            setStatus("error");
        }
    };

    return (
        <>
            <Navbar />
            <section id="home" className="section">
                <h1>Hola, soy Yago Rueda.<br />
                    Estudiante de Ingeniería Informatica apasionado por el desarrollo  software
                </h1>
                <div className="social-links">
                    <a id="github" href="https://github.com/Yago-Rueda-24" target="_blank" rel="noopener noreferrer"><FaGithub size={24} /> </a>
                    <a id="linkedin" href="https://www.linkedin.com/in/yago-rueda-carrilero-4b6043319/" target="_blank" rel="noopener noreferrer"><FaLinkedin size={24} /> </a>
                    <a id="CV" href="mailto:ruedayago@gmail.com"><FaEnvelope size={24} /> </a>
                </div>
                <h2>Sobre Mi</h2>
                <p className="about-text">
                    Graduado en Ingeniería Informática, con experiencia en desarrollo de soluciones de automatización e integración de sistemas durante prácticas en empresa.
                    Interesado en desarrollo software, IA aplicada y gestión de infraestructura.
                    Perfil autónomo, orientado a aprendizaje continuo y trabajo en equipo.
                </p>
            </section>

            <section id="projects" className="section">
                <h1>Proyectos</h1>


                <div className="big-projects-grid">
                    {Object.values(PROJECTS_DATA).map((project) => {
                        const techList = project.techStack
                            ? [...new Set(Object.values(project.techStack).flat())]
                            : [];

                        return (
                            <BigProject
                                key={project.id}
                                id={project.id}
                                title={project.title}
                                description={project.summary}
                                github={project.github}
                                prod={project.prod}
                                tech={techList}
                            />
                        );
                    })}
                </div>
            </section>


            <section id="experience" className="section">
                <h1>Experiencia</h1>
                <TimelineItem
                    year="06/2025–08/2025"
                    title="Diseño e Implementación de un asistente virtual gestionado por IA"
                    institution="MyA Fotovoltaica"
                    description="Creación de un asistente virtual inteligente capaz de atender llamadas,mensajes y correos de clientes. Integración del asistente con los servidores
                    empresariales para permitir la recuperación y escritura de datos en tiempo real "
                />
            </section>
            <section id="estudios" className="section">
                <h1>Estudios</h1>
                <TimelineItem
                    year="2022–2026"
                    title="Grado en Ingeniería Informática"
                    institution="Escuela Politecnica de Gijón"
                    description="Estudios de grado en Ingeniería Informática, conocimientos en programación, bases de datos, redes y desarrollo de software"
                />

            </section>

            <section id="skills" className="section">
                <h1>Skills</h1>

                <div className="skill-selectors">
                    {categories.map(cat => (
                        <button
                            key={cat}
                            className={`skill-selector ${selectedCategory === cat ? 'active' : ''}`}
                            onClick={() => setSelectedCategory(cat)}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                <div className="technologies">
                    {filteredSkills.map(skill => (
                        <TechStack
                            key={skill.name}
                            name={skill.name}
                            logoUrl={skill.logoUrl}
                            icon={skill.icon}
                        />
                    ))}
                </div>
            </section>

            <section id="contacto" className="section">
                <h1>Contacto</h1>
                <p className="contact-subtitle">¿Tienes un proyecto en mente? No dudes en contactarme.</p>

                <div className="contact-layout">

                    {/* Subsección 1: Lista de contacto */}
                    <div className="contact-info-wrapper">
                        <ul className="contact-info-list">
                            <li className="contact-info-item">
                                <span className="contact-info-icon"><FaEnvelope size={20} /></span>
                                <div>
                                    <span className="contact-info-label">Email</span>
                                    <a href="mailto:ruedayago@gmail.com" className="contact-info-value">ruedayago@gmail.com</a>
                                </div>
                            </li>
                            <li className="contact-info-item">
                                <span className="contact-info-icon"><FaLinkedin size={20} /></span>
                                <div>
                                    <span className="contact-info-label">LinkedIn</span>
                                    <a href="https://www.linkedin.com/in/yago-rueda-carrilero-4b6043319/" target="_blank" rel="noopener noreferrer" className="contact-info-value">Yago Rueda Carrilero</a>
                                </div>
                            </li>
                            <li className="contact-info-item">
                                <span className="contact-info-icon"><FaGithub size={20} /></span>
                                <div>
                                    <span className="contact-info-label">GitHub</span>
                                    <a href="https://github.com/Yago-Rueda-24" target="_blank" rel="noopener noreferrer" className="contact-info-value">Yago-Rueda-24</a>
                                </div>
                            </li>
                            <li className="contact-info-item">
                                <span className="contact-info-icon"><FaMapMarkerAlt size={20} /></span>
                                <div>
                                    <span className="contact-info-label">Ubicación</span>
                                    <span className="contact-info-value">Gijón, Asturias, España</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                    {/* Subsección 2: Formulario (Oculto pero presente en el código) */}
                    <div className="contact-form-wrapper hidden-form">
                        {status === "success" ? (
                            <div className="form-success-message">
                                <h3>¡Mensaje enviado con éxito!</h3>
                                <p>Gracias por contactarme, te responderé lo antes posible.</p>
                                <button onClick={() => setStatus("idle")} className="form-button">Enviar otro mensaje</button>
                            </div>
                        ) : (
                            <form className="contact-form" onSubmit={handleSubmit}>
                                {/* Campo Honeypot para evitar SPAM (oculto para humanos) */}
                                <input type="text" name="_gotcha" style={{ display: 'none' }} />

                                <label>
                                    Nombre
                                    <input type="text" name="nombre" placeholder="Tu nombre" required />
                                </label>
                                <label>
                                    Email
                                    <input type="email" name="email" placeholder="tu@email.com" required />
                                </label>
                                <label>
                                    Asunto
                                    <input type="text" name="asunto" placeholder="¿De qué quieres hablar?" />
                                </label>
                                <label className="label-grow">
                                    Mensaje
                                    <textarea name="mensaje" placeholder="Escribe tu mensaje aquí..." required />
                                </label>

                                {status === "error" && (
                                    <p className="form-error-message">Hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo.</p>
                                )}

                                <button
                                    type="submit"
                                    className="form-button"
                                    disabled={status === "sending"}
                                >
                                    {status === "sending" ? "Enviando..." : "Enviar mensaje"}
                                </button>
                            </form>
                        )}
                    </div>


                </div>
            </section>

        </>
    );
}
