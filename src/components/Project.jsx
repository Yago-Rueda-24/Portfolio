import { FaGithub } from 'react-icons/fa';
function Project({ title, description, github }) {
    return (
        <div className="project-card">
            <h1>{title}</h1>
            <p>{description}</p>
            <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className='github-link'
            >
                <FaGithub />
            </a>
        </div>
    );
}

export default Project;