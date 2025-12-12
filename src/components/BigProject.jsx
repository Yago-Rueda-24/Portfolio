import { FaGithub , FaGlobe} from 'react-icons/fa';
function BigProject({ title, description, github, prod, tech }) {
    return (
        <div className="project-card">
            <h1>{title}</h1>
            <p style={{ marginBottom: '1rem' }}>{description}</p>

            {tech && tech.length > 0 && (
                <ul className="project-items">
                    {tech.map((item, index) => (
                        <li className='project-item-element' key={index}>{item}</li>
                    ))}
                </ul>
            )}

            <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className='github-link'
                style={{marginRight:'1rem'}}
            >
                <FaGithub />
            </a>

            {prod && (
                <a
                    href={prod}
                    target="_blank"
                    rel="noopener noreferrer"
                    className='github-link'
                >
                    <FaGlobe />
                </a>
            )}


        </div>
    );
}

export default BigProject;