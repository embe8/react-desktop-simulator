import aboutList from '../../data/aboutme.json';


function AboutWindow() {
    return (
        <div className="about-container">
                {aboutList.map(about => (
                    <div key={about.aboutId}
                    className="about-card">
                        <img src={about.aboutMedia} alt="image" />
                        <h4>{about.aboutName}</h4>
                        <p>{about.aboutNotes}</p>
                    </div>
                ))}
        </div>
    );
}

export default AboutWindow;