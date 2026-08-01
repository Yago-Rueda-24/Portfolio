import { FaGithub, FaGlobe, FaFileAlt, FaArrowRight } from 'react-icons/fa';
import { useNavigate, Link } from 'react-router-dom';

function BigProject({ id, title, description, github, prod, tech }) {
    const navigate = useNavigate();

    const handleCardClick = () => {
        if (id) {
            navigate(`/project/${id}`);
        }
    };

    const handleExternalClick = (e) => {
        e.stopPropagation();
    };

    return (
        <div className="project-card" onClick={handleCardClick}>
            <h1>{title}</h1>
            <p style={{ marginBottom: '1rem' }}>{description}</p>

            {tech && tech.length > 0 && (
                <ul className="project-items">
                    {tech.map((item, index) => (
                        <li className='project-item-element' key={index}>{item}</li>
                    ))}
                </ul>
            )}

            <div className="project-card-footer">
                <div className="project-external-links">
                    {github && (
                        <a
                            href={github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className='github-link'
                            title="Ver en GitHub"
                            onClick={handleExternalClick}
                        >
                            <FaGithub />
                        </a>
                    )}

                    {prod && (
                        <a
                            href={prod}
                            target="_blank"
                            rel="noopener noreferrer"
                            className='github-link'
                            title="Ver Demo en Vivo"
                            onClick={handleExternalClick}
                        >
                            <FaGlobe />
                        </a>
                    )}
                </div>

                {id && (
                    <Link to={`/project/${id}`} className="project-detail-link" onClick={handleExternalClick}>
                        <FaFileAlt /> Detalles & Arquitectura <FaArrowRight className="arrow-icon" />
                    </Link>
                )}
            </div>
        </div>
    );
}

export default BigProject;
