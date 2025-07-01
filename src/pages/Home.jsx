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
                        <input type="text" name="name" required />
                    </label>
                    <label>
                        Email:
                        <input type="email" name="email" required />
                    </label>
                    <label>
                        Mensaje:
                        <textarea name="message" rows="4" required></textarea>
                    </label>
                    <button className="form-button" type="submit">Enviar</button>
                </form>
            </section>
        </>
    );
}
