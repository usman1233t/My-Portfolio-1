import "./Projects.scss"

const Projects = () => {
  return <div className="projects-wrapper">
    <div className="project">
        <div className="project-details">
            <h2 className="project-name">Project Name</h2>
            <span className="project-desc">Description</span>

            <div className="tags">
                <h2 className="tech-stack">Technologies used:</h2>

                <div className="tag">
                    <h2 className="title">React</h2>
                </div>

                
                <div className="tag">
                    <h2 className="title">React</h2>
                </div>
            </div>
        </div>

        <div className="project-image">CSS</div>
    </div>
  </div>
  
}

export default Projects