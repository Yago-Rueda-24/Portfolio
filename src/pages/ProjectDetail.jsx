import { useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import { PROJECTS_DATA } from "../data/projectsData";
import {
    FaGithub, FaGlobe, FaArrowLeft, FaCubes,
    FaCheckCircle, FaLightbulb, FaTools,
    FaLayerGroup, FaChevronRight, FaTag, FaServer
} from "react-icons/fa";

export default function ProjectDetail() {
    const { id } = useParams();
    const navigate = useNavigate();
    const project = PROJECTS_DATA[id];

    // Scroll to top when loading page
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    if (!project) {
        return (
            <>
                <Navbar />
                <div className="section detail-not-found">
                    <h2>Proyecto no encontrado</h2>
                    <p>El proyecto que estás buscando no existe o fue movido.</p>
                    <Link to="/" className="back-btn">
                        <FaArrowLeft /> Volver a Proyectos
                    </Link>
                </div>
            </>
        );
    }

    const allProjectKeys = Object.keys(PROJECTS_DATA);
    const currentIndex = allProjectKeys.indexOf(id);
    const nextProjectId = allProjectKeys[(currentIndex + 1) % allProjectKeys.length];

    return (
        <>
            <Navbar />
            <div className="project-detail-wrapper section">

                {/* Botón de Retorno */}
                <div className="detail-navigation">
                    <button onClick={() => navigate("/")} className="back-btn">
                        <FaArrowLeft /> Volver a la Galería
                    </button>
                    <span className="breadcrumb-path">
                        <Link to="/">Proyectos</Link> / <span className="current">{project.title}</span>
                    </span>
                </div>

                {/* Hero Header del Proyecto */}
                <header className="project-detail-hero">
                    <div className="project-type-badge">
                        <FaTag /> {project.projectType}
                    </div>
                    <h1>{project.title}</h1>
                    <p className="project-tagline">{project.tagline}</p>

                    {/* Resumen del proyecto sustituyendo a la barra de metadatos */}
                    <p className="project-summary-hero">{project.summary}</p>

                    {/* Links de GitHub y Demo */}
                    <div className="detail-actions">
                        {project.github && (
                            <a href={project.github} target="_blank" rel="noopener noreferrer" className="action-btn github-action">
                                <FaGithub size={20} /> Ver Repositorio GitHub
                            </a>
                        )}
                        {project.prod && (
                            <a href={project.prod} target="_blank" rel="noopener noreferrer" className="action-btn demo-action">
                                <FaGlobe size={20} /> Demo / Sitio En Vivo
                            </a>
                        )}
                    </div>
                </header>

                {/* Logros & Contribuciones Técnicas (Formato CV) */}
                <section className="detail-section-card">
                    <h2 className="detail-section-title">
                        <FaLayerGroup /> Resumen
                    </h2>
                    <div className="cv-highlights-box">
                        <ul className="cv-bullets">
                            {project.cvHighlights.map((bullet, idx) => (
                                <li key={idx} className="cv-bullet-item">
                                    <span className="bullet-dot"></span>
                                    <span>{bullet}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </section>

                {/* Tecnologías Usadas (Ordenadas por Categorías con Bullet Points) */}
                <section className="detail-section-card">
                    <h2 className="detail-section-title">
                        <FaTools /> Tecnologías Usadas
                    </h2>
                    <div className="tech-categories-bullets">
                        {Object.entries(project.techStack).map(([catKey, items]) => {
                            const categoryLabel = {
                                backend: "Backend",
                                frontend: "Frontend",
                                database: "Base de Datos",
                                tools: "Herramientas & DevOps",
                                core: "Core & Runtime",
                                storage: "Almacenamiento Local",
                                cloudBaaS: "Cloud & BaaS"
                            }[catKey] || catKey.toUpperCase();

                            return (
                                <div key={catKey} className="tech-category-group">
                                    <h4 className="tech-category-subheading">{categoryLabel}</h4>
                                    <ul className="cv-bullets">
                                        {items.map((tech, idx) => (
                                            <li key={idx} className="cv-bullet-item">
                                                <span className="bullet-dot"></span>
                                                <span>{tech}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            );
                        })}
                    </div>
                </section>

                {/* Arquitectura de Software & Desarrollo */}
                <section className="detail-section-card">
                    <h2 className="detail-section-title">
                        <FaCubes /> Arquitectura de Software & Desarrollo
                    </h2>
                    <div className="architecture-box">
                        <span className="architecture-pattern-badge">
                            {project.architecture.pattern}
                        </span>
                        <p className="architecture-desc">{project.architecture.description}</p>

                        <h4 className="subheading-accent">Aspectos Clave del Desarrollo:</h4>
                        <ul className="architecture-list">
                            {project.architecture.highlights.map((highlight, idx) => (
                                <li key={idx}>
                                    <FaCheckCircle className="check-icon" /> {highlight}
                                </li>
                            ))}
                        </ul>
                    </div>
                </section>

                {/* Arquitectura de Infraestructura, Cloud & DevOps */}
                {project.infrastructure && (
                    <section className="detail-section-card">
                        <h2 className="detail-section-title">
                            <FaServer /> Infraestructura, Cloud & Despliegue
                        </h2>
                        <div className="architecture-box">
                            <span className="architecture-pattern-badge">
                                {project.infrastructure.platform}
                            </span>
                            <p className="architecture-desc">{project.infrastructure.description}</p>

                            <h4 className="subheading-accent">Aspectos Clave de Infraestructura & DevOps:</h4>
                            <ul className="architecture-list">
                                {project.infrastructure.highlights.map((highlight, idx) => (
                                    <li key={idx}>
                                        <FaCheckCircle className="check-icon" /> {highlight}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </section>
                )}

                {/* Desafíos Técnicos y Decisiones de Ingeniería */}
                {project.engineeringChallenges && project.engineeringChallenges.length > 0 && (
                    <section className="detail-section-card">
                        <h2 className="detail-section-title">
                            <FaLightbulb /> Desafíos Técnicos y Decisiones de Ingeniería
                        </h2>
                        <div className="challenges-grid">
                            {project.engineeringChallenges.map((item, idx) => (
                                <div key={idx} className="challenge-card">
                                    <div className="challenge-header">
                                        <span className="challenge-number">0{idx + 1}</span>
                                        <h3>{item.challenge}</h3>
                                    </div>
                                    <div className="challenge-body">
                                        <div className="solution-block">
                                            <strong>Solución Aplicada:</strong> {item.solution}
                                        </div>
                                        <div className="impact-block">
                                            <strong>Resultado / Impacto:</strong> {item.impact}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                )}

                {/* Navegación al siguiente proyecto */}
                <footer className="detail-footer-nav">
                    <button onClick={() => navigate("/")} className="back-btn">
                        <FaArrowLeft /> Volver a Inicio
                    </button>

                    <Link to={`/project/${nextProjectId}`} className="next-project-link">
                        Siguiente Proyecto: <strong>{PROJECTS_DATA[nextProjectId].title}</strong> <FaChevronRight />
                    </Link>
                </footer>

            </div>
        </>
    );
}
