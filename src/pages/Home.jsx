// src/pages/Home.jsx
import Navbar from "../components/Navbar";
import Project from "../components/Project";
import TimelineItem from '../components/TimelineItem';
import TechStack from "../components/TechStack";
import BigProject from "../components/BigProject";
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { DiJavascript1, DiPython, DiReact } from 'react-icons/di';


export default function Home() {
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
                <p>Soy un estudiante de Ingeniería Informática con una gran pasión por el desarrollo de software y la tecnología.<br />
                    Disfruto aprender nuevas herramientas y seguir mejorando cada día, tanto en lo técnico como en lo personal.<br />
                    Me defino como una persona curiosa, constante y con ganas de aportar valor real en cada proyecto.<br />
                    <br />

                </p>
            </section>

            <section id="projects" className="section">
                <h1>Proyectos</h1>
                <h2>Proyectos Principales</h2>
                <p>Proyectos con un toque más profesional creados para reforzar conocimientos y aprender a gestionar proyectos durante todo su ciclo de vida.</p>

                <div className="big-projects-grid">
                    <BigProject 
                    title={"Finanzas API"} 
                    description={"Esta API permite subir registros de transacciones con información básica(como cantidad y fecha). A partir de estos datos, genera análisis y métricas útiles, incluyendo totales, promedios, tendencias a lo largo del tiempo y agrupaciones por períodos. Está pensada para pruebas, prototipos o aprendizaje, no está orientada a entornos de producción."}
                    github={"https://github.com/Yago-Rueda-24/Finanzas"}
                    tech={["Java", "Springboot", "Mysql", "Maven", "REST"]}
                    prod={"https://finanzas-lv2n.onrender.com"} />
                    <BigProject 
                    title={"Taskflow"} 
                    description={"Un servicio de gestión de tareas estilo Scrum que te ayuda a organizar tu trabajo de manera eficiente y mejorar tu productividad. Permite crear sprints, seguir el progreso de tus tareas y mantener el control de tus proyectos con una metodología ágil."}
                    github={"https://github.com/Yago-Rueda-24/AppTareas"}
                    tech={["TypeScript","NestJS","React", "Node", "PostgreSQL", "NPM"]}
                    prod={"https://apptareas-front.onrender.com"}
                     />
                     <BigProject 
                    title={"PF-Evolution"} 
                    description={"Un gestor de contraseñas que permite a los usuarios almacenar y gestionar sus contraseñas de forma segura. Esta desarrollado como una aplicacion de escritorio usando el framework electron. La app permite guardar contraseñas en la nube y acceder a ellas desde cualquier dispositivo. Por seguridad, las contraseñas se guardan cifradas en la base de datos."}
                    github={"https://github.com/Yago-Rueda-24/PF-Evolution"}
                    tech={["TypeScript","Electron","Node", "Supabase", "NPM"]}
                     />
                    
                </div>
            </section>

            
            <section id="experience" className="section">
                <h1>Experiencia</h1>
                <TimelineItem
                    year="06/2025–08/2026"
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
                <div className="technologies">
                    <TechStack name={"Java"} logoUrl={"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg"}></TechStack>
                    <TechStack name={"Springboot"} logoUrl={"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg"}></TechStack>
                    <TechStack name={"TypeScript"} logoUrl={"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg"}></TechStack>
                    <TechStack name={"NestJS"} logoUrl={"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nestjs/nestjs-original.svg"}></TechStack>
                    <TechStack name={"Sql"} logoUrl={"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg"}></TechStack>
                    <TechStack name={"Python"} logoUrl={"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg"}></TechStack>
                    <TechStack name={"C/C++"} logoUrl={"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg"}></TechStack>
                    <TechStack name={"HTML5"} logoUrl={"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg"}></TechStack>
                    <TechStack name={"CSS"} logoUrl={"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg"}></TechStack>
                    <TechStack name={"JavaScript"} logoUrl={"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-plain.svg"}></TechStack>
                    <TechStack name={"React"} logoUrl={"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"}></TechStack>

                </div>
            </section>

        </>
    );
}
