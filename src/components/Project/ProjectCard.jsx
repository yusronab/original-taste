const ProjectCard = ({name, desc, weblink, codelink, image}) => {
    return(
        <div className="card-container">
            <div className="card">
                <div className="card-info">
                    <h2>{name}</h2>
                    <p>{desc}</p>
                    <div>
                        <button className="btn-web" onClick={() => window.open(weblink)}>Website</button>
                        <button className="btn-code" onClick={() => window.open(codelink)}>Github</button>
                    </div>
                </div>
                <img className="card-image" src={image} alt="project-img" style={{ background: `url(${image})` }} />
                {/* <image className="card-image" style={{ background: `url(${image})` }} /> */}
            </div>
        </div>
    );
}

export default ProjectCard;